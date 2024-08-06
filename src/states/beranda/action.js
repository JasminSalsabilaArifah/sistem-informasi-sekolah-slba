import axios from 'axios';

const ActionType = {
    RECEIVE_BERANDA: 'RECEIVE_BERANDA',
    EDIT_BERANDA: 'EDIT_BERANDA',
  };

function receiveBeranda(berandas) {
    return {
        type: ActionType.RECEIVE_BERANDA,
        payload: {
          berandas,
        },
    };
}

function editBerandaActionCreator(berandas) {
  return {
    type: ActionType.EDIT_BERANDA,
    payload: {
      berandas,
    },
  };
}

function asyncEditBeranda({visi, sambutan, imgKepsek, imgBeranda}){
  return async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('sambutan', sambutan);
        formData.append('visi', visi);
        if(imgKepsek){
            formData.append('imgKepsek', imgKepsek);
        }
        if(imgBeranda){
            formData.append('imgBeranda', imgBeranda);
        }
        await axios.put('http://localhost:1962/beranda', formData,
         { headers: {
            'Content-Type': 'multipart/form-data'
          }}
        )
        const convertGambar = (gambar, type) => {
          const base64String = gambar;
          const byteCharacters = atob(base64String);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: type });
          const url = URL.createObjectURL(blob);
          return url;
        }
        const asyncBeranda = await (await axios.get('http://localhost:1962/beranda')).data
        const dataBeranda = asyncBeranda.map((dt) => {
          const data = { ...dt };
          if (data.gambar){
            data.gambar = convertGambar(data.gambar, data.type)
          }
          return data;
        })
        const berandas = {
          sambutan: dataBeranda[0].sambutan,
          visi: dataBeranda[0].visi,
          imgKepsek: dataBeranda[0].gambar,
          imgBeranda: dataBeranda[1].gambar,
        };
        dispatch(editBerandaActionCreator(berandas));
    } catch (error) {
        alert(error.message);
    }
};
}

export { 
  ActionType,
  receiveBeranda,
  asyncEditBeranda,
  editBerandaActionCreator,
}
import { receiveCarousels } from '../carousel/action';
import { receiveBeranda } from '../beranda/action';
import { receiveMisi } from '../misi/action';
import axios from 'axios';

function asyncBeranda() {
    return async (dispatch) => {
      try {
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
        const asyncCarousels = await (await axios.get('http://localhost:1962/carousel')).data
        const dataCarousels = asyncCarousels.map((dt) => {
          const data = { ...dt };
          if (data.gambar){
            data.gambar = convertGambar(data.gambar, data.type)
          }
          return {
            gambar: data.gambar,
            keterangan : data.ket,
          }
        })
        dispatch(receiveCarousels(dataCarousels));

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
        dispatch(receiveBeranda(berandas))
        const misi = await (await axios.get('http://localhost:1962/misi')).data
        dispatch(receiveMisi(misi))
      } catch (error) {
        alert(error.message);
      }
    };
  }

export {
  asyncBeranda,
}
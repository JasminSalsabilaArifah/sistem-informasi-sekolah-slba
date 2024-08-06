import axios from 'axios';

const ActionType = {
    RECEIVE_MISI: 'RECEIVE_MISI',
    EDIT_MISI: 'EDIT_MISI',
    DELETE_MISI: 'DELETE_MISI',
  };

function receiveMisi(misi) {
    return {
        type: ActionType.RECEIVE_MISI,
        payload: {
          misi,
        },
    };
}

function editMisiActionCreator(misi) {
  return {
    type: ActionType.EDIT_MISI,
    payload: {
      misi,
    },
  };
}

function deleteMisiActionCreator(id) {
  console.log('jbj',id)
  return {
    type: ActionType.DELETE_MISI,
    payload: {
      id,
    },
  };
}

function asyncEditMisi({id, misi}) {
  return async (dispatch) => {
    try {
      await axios.put('http://localhost:1962/misi', {id, misi})
      const datamisi = await (await axios.get('http://localhost:1962/misi')).data
      dispatch(editMisiActionCreator(datamisi));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncDeleteMisi(id) {
  return async (dispatch) => {
    try {
      console.log(id.id)
      await axios.delete('http://localhost:1962/misi/'+id.id)
      dispatch(deleteMisiActionCreator(id));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { 
    ActionType,
    receiveMisi,
    editMisiActionCreator,
    asyncEditMisi,
    deleteMisiActionCreator,
    asyncDeleteMisi,
}
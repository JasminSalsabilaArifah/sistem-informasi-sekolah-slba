import axios from 'axios';

const ActionType = {
    SET_AUTH_USER: 'SET_AUTH_USER',
    UNSET_AUTH_USER: 'UNSET_AUTH_USER',
  };
  
function setAuthUserActionCreator(authUser) {
    return {
        type: ActionType.SET_AUTH_USER,
        payload: {
            authUser,
        },
    };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
  };
}

function asyncSetAuthUser({ username, password }) {
    return async (dispatch) => {
      try {
        await axios.post('http://localhost:1962/login', { username, password })
        axios.defaults.withCredentials = true;
        const auth = await (await axios.get('http://localhost:1962')).data.profile
        dispatch(setAuthUserActionCreator(auth));
      } catch (error) {
        alert(error.message);
      }
    };
  }

  function asyncUnsetAuthUser() {
    return (dispatch) => {
      dispatch(unsetAuthUserActionCreator());
      axios.get('http://localhost:1962/logout')
    };
  }

export {
    ActionType,
    setAuthUserActionCreator,
    asyncSetAuthUser,
    unsetAuthUserActionCreator,
    asyncUnsetAuthUser
}
import { setAuthUserActionCreator } from '../authUser/action';
import axios from 'axios';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};
 
function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}
 
function asyncPreloadProcess() {
  return async (dispatch) => {
    try {
      // preload process
      axios.defaults.withCredentials = true;
      const authUser = await (await axios.get('http://localhost:1962')).data.profile
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      // fallback process
      dispatch(setAuthUserActionCreator(null));
    } finally {
      // end preload process
      dispatch(setIsPreloadActionCreator(false));
    }
  };
}
 
export {
  ActionType,
  setIsPreloadActionCreator,
  asyncPreloadProcess,
};
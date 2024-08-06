import { ActionType } from './action';
 
function misiReducer(misi = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_MISI:
      return action.payload.misi;
    case ActionType.EDIT_MISI:
      return action.payload.misi;
    case ActionType.DELETE_MISI:
      return misi.filter(item => item.id !== action.payload);
    default:
      return misi;
  }
}
 
export default misiReducer;
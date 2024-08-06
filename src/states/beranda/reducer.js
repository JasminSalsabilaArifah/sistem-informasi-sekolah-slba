import { ActionType } from './action';
 
function berandasReducer(berandas = {} , action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_BERANDA:
      return action.payload.berandas;
    case ActionType.EDIT_BERANDA:
      return action.payload.berandas;
    default:
      return berandas;
  }
}
 
export default berandasReducer;
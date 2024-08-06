import { ActionType } from './action';
 
function carouselsReducer(carousels = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_CAROUSEL:
      console.log('hehehwsn')
      return action.payload.carousels;
    default:
      return carousels;
  }
}
 
export default carouselsReducer;
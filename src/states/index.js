import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './user/reducer';
import authUserReducer from './authUser/reducer';
import carouselsReducer from './carousel/reducer';
import berandasReducer from './beranda/reducer';
import misiReducer from './misi/reducer';

const store = configureStore({
    reducer: { 
        users: usersReducer,
        authUser: authUserReducer,
        carousel: carouselsReducer,
        beranda: berandasReducer,
        misi: misiReducer,
    },
  });
   
  export default store;
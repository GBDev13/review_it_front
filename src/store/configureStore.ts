import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import menus from './modules/menus';
import user from './modules/user';

const persistConfig = {
  key: 'root',
  storage
};

const reducers = combineReducers({ menus, user });
const reducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

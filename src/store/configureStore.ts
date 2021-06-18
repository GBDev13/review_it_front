import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import menus from './modules/menus';
import user from './modules/user';

const reducer = combineReducers({ menus, user });

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

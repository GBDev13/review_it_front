import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import menus from './modules/menus';

const reducer = combineReducers({ menus });

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

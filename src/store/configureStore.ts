import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import menus from './modules/menus';
import user from './modules/user';
import filters from './modules/filters';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filters']
};

const reducers = combineReducers({ menus, user, filters });
const reducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

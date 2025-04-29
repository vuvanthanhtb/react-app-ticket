import { configureStore as rtkConfigureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import createReducerManager from "./reducer-manager";

function configureStore(initialState = {}) {
  const staticReducers = {};
  const reducerManager = createReducerManager(staticReducers);

  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["ticketBooking"], // hoặc các reducer bạn muốn lưu
  };

  const persistedReducer = persistReducer(persistConfig, reducerManager.reduce);

  const store = rtkConfigureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    preloadedState: initialState,
  });

  store.reducerManager = reducerManager;
  const persistor = persistStore(store);

  return { store, persistor };
}

const { store, persistor } = configureStore();
export { store, persistor };

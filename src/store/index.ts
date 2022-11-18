import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import todoReducer from "features/todo/todoSlice"
import UIReducer from "features/UI/UISlice"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"

const persistConfig = {
  key: "todoReducer",
  storage,
  blacklist: [
    "todoTitle",
    "todoDescription",
    "searchValue",
    "isVisibleAddTask",
    "isVisibleRemoveAll",
    "isLoading",
    "error",
  ],
}

const persistedtodoReducer = persistReducer(persistConfig, todoReducer)

const rootReducer = combineReducers({
  todoReducer: persistedtodoReducer,
  UIReducer,
})

const createStore = () => {
  return configureStore({
    devTools: process.env.NODE_ENV === "development",
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
}

const setupStore = () => {
  const store = createStore()
  const persistor = persistStore(store)
  return { store, persistor }
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore["dispatch"]

export default setupStore

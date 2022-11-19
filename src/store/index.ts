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

const todoPersistConfig = {
  key: "todoReducer",
  storage,
  whitelist: ["todoItems", "filterType"],
}
const persistedTodoReducer = persistReducer(todoPersistConfig, todoReducer)

const UIPersistConfig = {
  key: "UIReducer",
  storage,
  whitelist: ["theme"],
}
const persistedUIReducer = persistReducer(UIPersistConfig, UIReducer)

const rootReducer = combineReducers({
  todoReducer: persistedTodoReducer,
  UIReducer: persistedUIReducer,
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

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import namespaceReducer from "./namespace";

const store = configureStore({
  reducer: {
    user: userReducer,
    namespace: namespaceReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;

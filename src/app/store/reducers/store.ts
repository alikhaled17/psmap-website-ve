import { configureStore } from "@reduxjs/toolkit";

import formReducers from "./form-reducers";

export const store = configureStore({
  reducer: {
    ...formReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

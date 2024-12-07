import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./features/ApplicationSlice";
import registrationReducer  from "./features/RegistrationSlice";

export const store = configureStore({
  reducer: {
    apply: applicationReducer,
    registration: registrationReducer,
  },
});

// Define types for the Redux store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

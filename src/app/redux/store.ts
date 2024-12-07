import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./features/ApplicationSlice";
import registrationReducer  from "./features/RegistrationSlice";
import eventReducer from './features/EventSlice';

export const store = configureStore({
  reducer: {
    apply: applicationReducer,
    registration: registrationReducer,
    event: eventReducer,
  },
});

// Define types for the Redux store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

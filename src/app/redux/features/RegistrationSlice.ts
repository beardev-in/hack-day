import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state of the registration slice
interface RegistrationState {
  fullName: string | null;
  email: string | null;
  emailOtp: string | null;
}

const initialState: RegistrationState = {
  fullName: null,
  email: null,
  emailOtp: null,
};

// Create the registration slice
const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setFullName(state, action: PayloadAction<string>) {
      state.fullName = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setEmailOtp(state, action: PayloadAction<string>) {
      state.emailOtp = action.payload;
    },
  },
});

// Export the actions for updating the state
export const { setFullName, setEmail, setEmailOtp } = registrationSlice.actions;

// Export the reducer to be used in the store
export default registrationSlice.reducer;

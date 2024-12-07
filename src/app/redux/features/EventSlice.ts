// src/store/selectedCountrySlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EventState {
  selectedCountry: string | null;
  selectedCity: string | null;
}

const initialState: EventState = {
  selectedCountry: "India",
  selectedCity: "Pondy",
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setSelectedCountry(state, action: PayloadAction<string>) {
      state.selectedCountry = action.payload;
    },
    setSelectedCity(state, action: PayloadAction<string>) {
      state.selectedCity = action.payload;
    },
  },
});

export const { setSelectedCountry, setSelectedCity } = eventSlice.actions;
export default eventSlice.reducer;

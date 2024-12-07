import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ApplicationState {
  teamName: string;
  teamCount: number | undefined;
  participationType: "team" | "solo" | undefined;
}

const initialState: ApplicationState = {
  teamName: "",
  teamCount: undefined,
  participationType: undefined,
};

const applicationSlice = createSlice({
  name: "apply",
  initialState,
  reducers: {
    setTeamName: (state, action: PayloadAction<string>) => {
      state.teamName = action.payload;
    },
    setTeamCount: (state, action: PayloadAction<number | undefined>) => {
      state.teamCount = action.payload;
    },
    setParticipationType: (state, action: PayloadAction<"team" | "solo" | undefined>) => {
      state.participationType = action.payload;
    },
    resetForm: (state) => {
      state.teamName = "";
      state.teamCount = undefined;
      state.participationType = undefined;
    },
  },
});

export const { setTeamName, setTeamCount, setParticipationType, resetForm } = applicationSlice.actions;
export default applicationSlice.reducer;

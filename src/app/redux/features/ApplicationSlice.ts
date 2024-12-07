import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ApplicationState {
  teamName: string;
  teamCount: number | undefined;
  participationType: "team" | "solo" | undefined;
  teamEmails: string[]; // This will store the team member emails
  currentStep: number; // Track the current step of the form
}

const initialState: ApplicationState = {
  teamName: "",
  teamCount: undefined,
  participationType: undefined,
  teamEmails: [], // Initialize with an empty array
  currentStep: 0, // Start at step 0
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
    setTeamEmails: (state, action: PayloadAction<string[]>) => {
      state.teamEmails = action.payload;
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setTeamName, setTeamCount, setParticipationType, resetForm, setTeamEmails, setCurrentStep } = applicationSlice.actions;
export default applicationSlice.reducer;

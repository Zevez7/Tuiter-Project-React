import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {},
  reducers: {
    getUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getUserProfile } = profileSlice.actions;

export default profileSlice.reducer;

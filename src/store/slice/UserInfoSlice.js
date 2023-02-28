import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const UserInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      state.users = [...state.users, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = UserInfoSlice.actions;

export default UserInfoSlice.reducer;

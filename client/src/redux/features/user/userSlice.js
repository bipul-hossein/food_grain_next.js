import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  // localStorage.getItem("user") !== null
  //   ? JSON.parse(localStorage.getItem("user"))
  //   : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginInfo: (state, { payload }) => {
      // console.log(payload);
      state.user = payload;
      // state.user.push(payload);
      // console.log(state.user);
      // localStorage.setItem("user", JSON.stringify(state.user));
    },
    logoutUser: (state) => {
      state.user = null;
      // localStorage.removeItem("user");
    },
  },
});

export const { setUserLoginInfo, logoutUser } = userSlice.actions;

export default userSlice.reducer;

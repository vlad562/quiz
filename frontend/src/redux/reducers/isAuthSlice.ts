import { createSlice } from "@reduxjs/toolkit";

const isAuthSlice = createSlice({
  name: 'isAuth',
  initialState: {
    isAuth: false
  },
  reducers: {
    login: state => {
      state.isAuth = true
    }
  }
})


export const isAuthReducer = isAuthSlice.reducer
export const { login } = isAuthSlice.actions
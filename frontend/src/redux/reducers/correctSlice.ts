import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  correct: 0
}

const correctCounterSlice = createSlice({
  name: 'qustions',
  initialState,
  reducers: {
    increment: (state) => {
      state.correct += 1
    },
    defaultCorrectCounter: (state) => {
      state.correct = 0
    }
  },
})

export const correctReducer = correctCounterSlice.reducer
export const { increment, defaultCorrectCounter } = correctCounterSlice.actions
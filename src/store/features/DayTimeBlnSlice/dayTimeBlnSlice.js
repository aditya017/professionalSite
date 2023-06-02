import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isItDay: false,
};

export const dayNightSlice = createSlice({
  name: 'isItDay',
  initialState,
  reducers: {
    dayNightIdentifier: (state, action) => {
      state.isItDay = action.payload;
    },
  },
});

export const { dayNightIdentifier } = dayNightSlice.actions;

export default dayNightSlice.reducer;

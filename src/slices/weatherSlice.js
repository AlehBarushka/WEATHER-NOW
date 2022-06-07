import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {},
  reducers: {
    getWeatherLoading: state => {
      state.isLoading = true;
    },
    getWeatherSuccess: (state, action) => {
      state.data = action && action.payload;
      state.isLoading = false;
      state.error = undefined;
    },
    getWeatherFailure: (state, action) => {
      state.isLoading = false;
      state.data = undefined;
      state.error = action && action.payload;
    },
  },
});

export const { getWeatherLoading, getWeatherSuccess, getWeatherFailure } = weatherSlice.actions;

export default weatherSlice.reducer;

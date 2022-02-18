import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWeather } from '../api/openWeather';

//action
export const getWeatherAction = createAsyncThunk(
	'weather/fetch',
	(payload, { rejectWithValue, getState, dispatch }) => {
		try {
			getWeather(payload);
		} catch (error) {
			if (!error?.response) {
				throw error;
			}
			return rejectWithValue(error?.response?.data);
		}
	}
);

//slice
const weatherSlice = createSlice({
	name: 'weather',
	initialState: {},
	extraReducers: (builder) => {
		//pending
		builder.addCase(getWeatherAction.pending, (state, action) => {
			state.loading = true;
		});
		//fulfilled
		builder.addCase(getWeatherAction.fulfilled, (state, action) => {
			state.weather = action && action.payload;
			state.loading = false;
			state.error = undefined;
		});
		//rejected
		builder.addCase(getWeatherAction.rejected, (state, action) => {
			state.loading = false;
			state.weather = undefined;
			state.error = action && action.payload;
		});
	},
});

export default weatherSlice.reducer;

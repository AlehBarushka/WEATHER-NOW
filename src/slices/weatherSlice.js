import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWeather } from '../api/openWeather';

//action
export const getWeatherAction = createAsyncThunk(
	'weather/fetch',
	async (payload, { rejectWithValue, getState, dispatch }) => {
		try {
			const { data } = await getWeather(payload);
			return data;
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
			state.isLoading = true;
		});
		//fulfilled
		builder.addCase(getWeatherAction.fulfilled, (state, action) => {
			state.weather = action && action.payload;
			state.isLoading = false;
			state.error = undefined;
		});
		//rejected
		builder.addCase(getWeatherAction.rejected, (state, action) => {
			state.isLoading = false;
			state.weather = undefined;
			state.error = action && action.payload;
		});
	},
});

export default weatherSlice.reducer;

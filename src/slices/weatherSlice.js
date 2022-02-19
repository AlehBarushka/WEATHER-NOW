import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWeatherByCity, getWeatherByCoords } from '../api/openWeather';

//action
export const getWeatherByCityAction = createAsyncThunk(
	'GET_WEATHER_BY_CITY',
	async (payload, { rejectWithValue, getState, dispatch }) => {
		try {
			const { data } = await getWeatherByCity(payload);
			return data;
		} catch (error) {
			if (!error?.response) {
				throw error;
			}
			return rejectWithValue(error?.response?.data);
		}
	}
);

export const getWeatherByCoordsAction = createAsyncThunk(
	'GET_WEATHER_BY_COORDS',
	async (payload, { rejectWithValue, getState, dispatch }) => {
		try {
			const { latitude, longitude } = payload;
			const { data } = await getWeatherByCoords(latitude, longitude);
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
		builder.addCase(getWeatherByCityAction.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getWeatherByCoordsAction.pending, (state, action) => {
			state.isLoading = true;
		});
		//fulfilled
		builder.addCase(getWeatherByCityAction.fulfilled, (state, action) => {
			state.weather = action && action.payload;
			state.isLoading = false;
			state.error = undefined;
		});
		builder.addCase(getWeatherByCoordsAction.fulfilled, (state, action) => {
			state.weather = action && action.payload;
			state.isLoading = false;
			state.error = undefined;
		});
		//rejected
		builder.addCase(getWeatherByCityAction.rejected, (state, action) => {
			state.isLoading = false;
			state.weather = undefined;
			state.error = action && action.payload;
		});
		builder.addCase(getWeatherByCoordsAction.rejected, (state, action) => {
			state.isLoading = false;
			state.weather = undefined;
			state.error = action && action.payload;
		});
	},
});

export default weatherSlice.reducer;

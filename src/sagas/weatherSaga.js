import { call, put } from 'redux-saga/effects';

import { getWeatherByCity, getWeatherByCoords } from '../api/openWeather';
import { getWeatherFailure, getWeatherSuccess, getWeatherLoading } from '../slices/weatherSlice';

export function* workGetWeatherByCity({ payload }) {
  try {
    yield put(getWeatherLoading());

    const { data } = yield call(getWeatherByCity, payload);

    yield put(getWeatherSuccess(data));
  } catch ({ response: { data } }) {
    yield put(getWeatherFailure(data));
  }
}

export function* workGetWeatherByCoords({ payload }) {
  try {
    yield put(getWeatherLoading());

    const { latitude, longitude } = payload;

    const { data } = yield call(getWeatherByCoords, latitude, longitude);

    yield put(getWeatherSuccess(data));
  } catch ({ response: { data } }) {
    yield put(getWeatherFailure(data));
  }
}

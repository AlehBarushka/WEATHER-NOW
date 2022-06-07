import { takeEvery } from 'redux-saga/effects';
import { workGetWeatherByCity, workGetWeatherByCoords } from './weatherSaga';

function* weatherSaga() {
  yield takeEvery('weather/getWeatherByCityPending', workGetWeatherByCity);
  yield takeEvery('weather/getWeatherByCoordsPending', workGetWeatherByCoords);
}

export default weatherSaga;

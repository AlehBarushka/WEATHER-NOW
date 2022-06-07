import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import weatherSaga from '../sagas/rootSaga';
import weatherReducer from '../slices/weatherSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { weather: weatherReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(weatherSaga);

export default store;

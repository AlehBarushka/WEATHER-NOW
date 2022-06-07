export const getWatherByCity = city => {
  return {
    type: 'weather/getWeatherByCityPending',
    payload: city,
  };
};

export const getWatherByCoords = payload => {
  return {
    type: 'weather/getWeatherByCoordsPending',
    payload,
  };
};

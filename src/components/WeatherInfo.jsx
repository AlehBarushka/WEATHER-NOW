import React from 'react';

const WeatherInfo = props => {
  const { weather } = props;

  return (
    <div className='p-8 border border-blue-800 rounded-lg'>
      <div className='flex justify-start  items-center'>
        <span className='flex items-center justify-center w-16 h-16 rounded-full border-2'>
          <img
            className='w-56 '
            src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
            alt='/'
          />
        </span>
        <h1 className='text-gray-300 pl-5'>{weather?.weather[0].main}</h1>
      </div>
      <h1 className='text-gray-300 text-center text-4xl mb-10'>
        {Math.ceil(Number(weather?.main.temp))}
        <span className='text-yellow-500 text-4xl'>°C</span>
      </h1>
      <h3 className='mb-6 text-xl text-white font-semibold'>
        {weather?.name}, {weather?.sys?.country}
      </h3>
      <p className='mb-8 text-gray-300'>
        {`The weather condition in ${weather?.name}, is described as:
                ${weather?.weather[0].description} with a temperature of
                ${Math.ceil(Number(weather?.main.temp))} °C and a humidity of
                ${weather?.main?.humidity} %`}
      </p>
    </div>
  );
};

export default WeatherInfo;

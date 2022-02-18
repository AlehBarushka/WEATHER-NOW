import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherAction } from './slices/weatherSlice';

import weatherSVG from './assets/weather.svg';
import Preloader from './Preloader';

const App = () => {
	const dispatch = useDispatch();
	const [city, setCity] = useState('');

	const onChangeHandler = (e) => {
		setCity(e.target.value);
	};

	const onClickHandler = () => {
		dispatch(getWeatherAction(city));
	};

	useEffect(() => {
		dispatch(getWeatherAction(city));
	}, [dispatch]);

	const { weather, isLoading, error } = useSelector((state) => state);

	return (
		<div>
			<section className='relative bg-gray-900  min-h-screen'>
				<img
					className='w-56 lg:block lg:absolute top-0 left-0 pt-10'
					src={weatherSVG}
					alt='/'
				/>
				<div className='relative container pt-12 px-4 mb-20 mx-auto text-center'>
					<h2 className='mt-8 mb-8 lg:mb-12 text-white text-4xl lg:text-6xl font-semibold'>
						Weather now!
					</h2>
					<p className='max-w-3xl mx-auto mb-8 lg:mb-12 text-white text-xl opacity-50'>
						Find out the current weather situation around the world
					</p>
					<input
						onChange={onChangeHandler}
						value={city}
						placeholder='Search City'
						className='relative z-10 inline-block w-full md:w-auto mb-2  px-3 py-2 mr-4  font-medium leading-normal bg-transparent border-2 rounded-lg text-green-400 '
					></input>
					<button
						onClick={onClickHandler}
						type='button'
						className='inline-flex items-center px-3 pr-3 28 text-center py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
					>
						Search
					</button>
				</div>
				{isLoading ? (
					<Preloader />
				) : error ? (
					<h1 className='text-red-400 text-xl text-center'>{error?.message}</h1>
				) : (
					<div className='max-w-6xl px-4 mx-auto'>
						<div className='flex flex-wrap -mx-4 justify-center'>
							<div className='w-full md:w-1/3 px-4 mb-10'>
								<div className='p-8 border border-blue-800 rounded-lg'>
									<div className='flex justify-start  items-center'>
										<span className='flex items-center justify-center w-16 h-16 rounded-full border-2'>
											<img
												className='w-56 '
												src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
												alt='/'
											/>
										</span>
										<h1 className='text-gray-300 pl-5'>
											{weather?.weather[0].main}
										</h1>
									</div>
									<h1 className='text-gray-300 text-center text-4xl mb-10'>
										{Math.ceil(Number(weather?.main.temp))}
										<span className='text-yellow-500 text-4xl'>°C</span>
									</h1>
									<h3 className='mb-6 text-xl text-white font-semibold'>
										{weather?.name}, {weather?.sys?.country}
									</h3>
									<p className='mb-8 text-gray-300'>
										{`The weather condition in ${
											weather?.name
										}, is described as:
                ${weather?.weather[0].description} with a temperature of
                ${Math.ceil(Number(weather?.main.temp))} °C and a humidity of
                ${weather?.main?.humidity} %`}
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</section>
		</div>
	);
};

export default App;

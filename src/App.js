import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherAction } from './slices/weatherSlice';

import weatherSVG from './assets/weather.svg';
import Preloader from './common/Preloader';
import SearchInput from './components/SearchInput';
import WeatherInfo from './components/WeatherInfo';

const App = () => {
	const dispatch = useDispatch();
	const { weather, isLoading, error } = useSelector((state) => state);
	const [city, setCity] = useState('гродно');

	useEffect(() => {
		dispatch(getWeatherAction(city));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	const onChangeHandler = (e) => {
		setCity(e.target.value);
	};

	const onClickHandler = useCallback(() => {
		dispatch(getWeatherAction(city));
	}, [city, dispatch]);

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
					<SearchInput
						onChangeHandler={onChangeHandler}
						onClickHandler={onClickHandler}
						city={city}
					/>
				</div>
				{isLoading ? (
					<Preloader />
				) : error ? (
					<h1 className='text-red-400 text-xl text-center'>{error?.message}</h1>
				) : (
					<div className='max-w-6xl px-4 mx-auto'>
						<div className='flex flex-wrap -mx-4 justify-center'>
							<div className='w-full md:w-1/3 px-4 mb-10'>
								<WeatherInfo weather={weather} />
							</div>
						</div>
					</div>
				)}
			</section>
		</div>
	);
};

export default App;

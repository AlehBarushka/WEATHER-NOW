import { data } from 'browserslist';
import React, { useState } from 'react';
import { getWeather } from './api/openWeather';

const App = () => {
	const [weatherData, setWeatherData] = useState({});
	const [location, setLocation] = useState('');

	const searchLocation = (event) => {
		if (event.key === 'Enter') {
			getWeather(location).then((res) => {
				setWeatherData(res.data);
			});
			setLocation('');
		}
	};

	return (
		<div className='app'>
			<div className='search'>
				<input
					value={location}
					type='text'
					onChange={(e) => setLocation(e.target.value)}
					placeholder='Enter location'
					onKeyPress={searchLocation}
				/>
			</div>
			<div className='container'>
				<div className='top'>
					<div className='location'>
						<p>{weatherData.name}</p>
					</div>
					<div className='temp'>
						{weatherData.main ? (
							<h1>{weatherData.main.temp.toFixed()}°C</h1>
						) : null}
					</div>
					<div className='description'>
						{weatherData.weather ? <p>{weatherData.weather[0].main}</p> : null}
					</div>
				</div>
				{weatherData.name != undefined ? (
					<div className='bottom'>
						<div className='feels'>
							{weatherData.main ? (
								<p className='bold'>
									{weatherData.main.feels_like.toFixed()}°C
								</p>
							) : null}
							<p>Feels like</p>
						</div>
						<div className='humidity'>
							{weatherData.main ? (
								<p className='bold'>{weatherData.main.humidity}%</p>
							) : null}
							<p>Humidity</p>
						</div>
						<div className='wind'>
							{weatherData.wind ? (
								<p className='bold'>{weatherData.wind.speed} m/s</p>
							) : null}
							<p>Winds speed</p>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default App;

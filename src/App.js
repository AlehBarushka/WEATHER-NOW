import React, { useState } from 'react';
import { getWeather } from './api/openWeather';

const App = () => {
	const [weatherData, setWeatherData] = useState({});
	const [location, setLocation] = useState('');
	console.log(weatherData);

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
						{weatherData.main ? <h1>{weatherData.main.temp}°C</h1> : null}
					</div>
					<div className='description'>
						{weatherData.weather ? <p>{weatherData.weather[0].main}</p> : null}
					</div>
				</div>
				<div className='bottom'>
					<div className='feels'>
						{weatherData.main ? (
							<p className='bold'>{weatherData.main.feels_like}°C</p>
						) : null}
						<p>Feels like</p>
					</div>
					<div className='humidity'>
						<p className='bold'>20%</p>
						<p>Humidity</p>
					</div>
					<div className='wind'>
						<p className='bold'>12 km/h</p>
						<p>Winds speed</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;

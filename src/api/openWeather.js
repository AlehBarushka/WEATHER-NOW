import axios from 'axios';

const API_KEY = '75787c308f283527b34dff6f9ed6f9b8';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';

//get weather by city name
export const getWeatherByCity = async (city) => {
	const response = await axios.get(
		`${API_URL}q=${city}&units=metric&appid=${API_KEY}`
	);
	return response;
};

//get the weather by coordinates
export const getWeatherByCoords = async (lat, lon) => {
	const response = await axios.get(
		`${API_URL}lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
	);
	return response;
};

import axios from 'axios';

const API_KEY = '38f69189f74a5e5a980937407ef43e10';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';

export const getWeather = async (location) => {
	const response = await axios.get(
		`${API_URL}${location}&units=metric&appid=${API_KEY}`
	);
	return response;
};

import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';

export const getWeather = async (location) => {
	const response = await axios.get(
		`${API_URL}${location}&units=metric&appid=${API_KEY}`
	);
	return response;
};

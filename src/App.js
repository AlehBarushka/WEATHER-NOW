import React, { useState } from 'react';
import axios from 'axios';
import { API_KEY } from './api/constants';

const App = () => {
	// const url = API_KEY;

	return (
		<div className='app'>
			<div className='container'>
				<div className='top'>
					<div className='location'>
						<p>Hrodna</p>
					</div>
					<div className='temp'>
						<h1>5C</h1>
					</div>
					<div className='description'>
						<p>Clouds</p>
					</div>
				</div>
				<div className='bottom'>
					<div className='feels'>
						<p className='bold'>4C</p>
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

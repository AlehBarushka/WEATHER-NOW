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
					<div className='descriptiom'>
						<p>Clouds</p>
					</div>
				</div>
				<div className='bottom'>
					<div className='feels'>
						<p>4C</p>
					</div>
					<div className='humidity'>
						<p>20%</p>
					</div>
					<div className='wind'>12 км/ч</div>
				</div>
			</div>
		</div>
	);
};

export default App;

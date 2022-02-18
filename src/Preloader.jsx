import React from 'react';

import loader from './assets/loader-spiner.svg';

const Preloader = () => {
	return <img className='mx-auto' src={loader} alt='loader' />;
};

export default Preloader;

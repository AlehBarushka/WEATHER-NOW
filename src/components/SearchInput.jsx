import React from 'react';

const SearchInput = (props) => {
	const { onChangeHandler, city, onClickHandler, onKeyDownHandler } = props;
	return (
		<>
			<input
				onKeyDown={onKeyDownHandler}
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
		</>
	);
};

export default SearchInput;

import React, { useEffect, useState } from 'react';
import useDebouce from './useDebounce';
import { useAppDispatch } from './useRedux';
import { listActions } from '../store/slice/listSlice';

export default function useInput() {
	const debounce = useDebouce<string>(value => {
		console.log('?', value);
		dispatch(listActions.findList(value));
	}, 300);
	const dispatch = useAppDispatch();

	const [searchWord, setSearchWord] = useState('');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		debounce(inputValue);
		setSearchWord(inputValue);
	};

	return { searchWord, handleInputChange };
}

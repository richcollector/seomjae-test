import axios from 'axios';
import { URL, PAGE_PER_COUNT } from '@/common/constants/Constants';

const instance = axios.create({
	baseURL: URL,
});

export const Apis = {
	get: async () => {
		console.log('호출');
		return await instance.get('', { params: '' });
	},
};

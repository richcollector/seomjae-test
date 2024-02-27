import axios from 'axios';
import { URL, PAGE_PER_COUNT } from '@/common/constants/Constants';

const instance = axios.create({
	baseURL: URL,
});

export const Apis = {
	get: async () => {
		return await instance.get('', { params: '' });
	},
};

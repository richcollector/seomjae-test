import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../Store';
import { Apis } from '@/common/apis/Apis';

const initialState: IListState = {
	list: 0,
};

export const listSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<number>) => {
			state.list += action.payload;
		},
		sub: (state, action: PayloadAction<number>) => {
			state.list -= action.payload;
		},
	},
});

export const listActions = listSlice.actions;
export const selectList = (state: RootState) => state.listReducer.list;
export default listSlice.reducer;

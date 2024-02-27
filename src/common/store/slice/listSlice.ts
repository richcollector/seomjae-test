import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../Store';
import { Apis } from '@/common/apis/Apis';

interface IListState {
	list: Array<Object>;
}

const initialState: IListState = {
	list: [
		{
			title: '수학공식1',
			content:
				'<math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn></math>',
		},
		{
			title: '수학공식2',
			content:
				'<math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn></math>',
		},
	],
};

export const listSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<Array<Object>>) => {
			state.list.push(...action.payload);
		},
		findList: (state, action: PayloadAction<string | undefined>) => {
			state.list;
		},
	},
});

export const listActions = listSlice.actions;
export const selectList = (state: RootState) => state.listReducer.list;
export default listSlice.reducer;

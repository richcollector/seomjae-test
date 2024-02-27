import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../Store';

interface IListState {
	list: Array<Object>;
}

const initialState: IListState = {
	list: [
		{
			title: '수학공식1',
			content:
				'<p><math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn></math></p>',
			date: '2024-02-26',
		},
		{
			title: '수학공식2',
			content:
				'<p><math xmlns="http://www.w3.org/1998/Math/MathML"><mroot><mn>111222</mn><mrow>&#160;</mrow></mroot></math></p>',
			date: '2024-02-26',
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
	},
});

export const listActions = listSlice.actions;

export const selectList = (state: RootState) => state.listReducer.list;

export const findList = (state: RootState) => {
	state.listReducer.list;
};

export const Pageination = (state: RootState) => {
	state.listReducer.list;
};

export default listSlice.reducer;

import CommonButton from '@/components/button/CommonButton';
import CommonInput from '@/components/input/CommonInput';
import Editor from './customEditor/Editor';
import { WRITE_BUTTON } from '@/common/constants/Constants';
import { useAppSelector, useAppDispatch } from '@/common/hooks/useRedux';
import { selectList, listActions } from '@/common/store/slice/listSlice';

export default function Write() {
	const list = useAppSelector(selectList);
	const dispatch = useAppDispatch();

	const handleOnClick = () => {
		dispatch(listActions.add(10));
	};

	console.log('list', list);

	return (
		<>
			<TitleBarWrapper>
				<CommonInput />
			</TitleBarWrapper>
			<WriteButtonBarWrapper>
				{WRITE_BUTTON.map((btnName, idx) => (
					<CommonButton key={idx} btnName={btnName} />
				))}
			</WriteButtonBarWrapper>
			<Editor />
		</>
	);
}

import styled from 'styled-components';

const WriteButtonBarWrapper = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;

	margin-bottom: 1rem;

	gap: 1rem;
`;

const TitleBarWrapper = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;

	border: 1px solid rgb(201, 202, 204);
	border-radius: 0.25rem;
	margin-bottom: 1rem;
	background-color: rgb(255, 255, 255);

	&:focus-within {
		border: 0.2rem solid orange;
	}
`;

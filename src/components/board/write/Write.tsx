import CommonButton from '@/components/button/CommonButton';
import CommonInput from '@/components/input/CommonInput';
import Editor from './customEditor/Editor';
import { WRITE_BUTTON } from '@/common/constants/Constants';
import { useAppDispatch } from '@/common/hooks/useRedux';
import { listActions } from '@/common/store/slice/listSlice';
import { useRouter } from 'next/router';
import OnClickButton from '@/components/button/OnClickButton copy';
import { useState } from 'react';
import useDebouce from '@/common/hooks/useDebounce';

export default function Write() {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const [word, setWord] = useState({ title: '', content: '', date: '' });

	const debounce = useDebouce<string>(value => {
		if (value) {
			setWord(prevWord => ({
				...prevWord,
				date: value,
			}));
		}
	}, 300);

	const handleOnClick = () => {
		if (word.title && word.content) {
			dispatch(listActions.add([word]));
			router.push('/');
		} else alert('값을 입력해주세요.');
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newTitle = event.currentTarget.value;
		const currentTime = new Date();
		const formattedTime = currentTime.toISOString().split('T')[0];
		debounce(formattedTime);

		setWord(prevWord => ({
			...prevWord,
			title: newTitle,
		}));
	};

	return (
		<>
			<TitleBarWrapper>
				<CommonInput word={word} handleInputChange={handleInputChange} />
			</TitleBarWrapper>
			<WriteButtonBarWrapper>
				{WRITE_BUTTON.map((btnName, idx) =>
					btnName[0] !== '' ? (
						<CommonButton key={idx} btnName={btnName} />
					) : (
						<OnClickButton key={idx} btnName={btnName} handleOnClick={handleOnClick} />
					),
				)}
			</WriteButtonBarWrapper>
			<Editor setWord={setWord} />
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

import useInput from '@/common/hooks/useInput';

export default function SearchInput() {
	const { searchWord, handleInputChange } = useInput();

	return (
		<Input
			type="text"
			placeholder="입력해 주세요."
			value={searchWord}
			onChange={handleInputChange}
			autoFocus
		/>
	);
}

import styled from 'styled-components';
const Input = styled.input`
	width: 100%;
	padding: 1rem;
	font-size: 1rem;

	border: 0;
	outline: none;
`;

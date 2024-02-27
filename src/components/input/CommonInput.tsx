export default function CommonInput({
	word,
	handleInputChange,
}: {
	word: { title: string; content: string };
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<Input
			type="text"
			placeholder="입력해 주세요."
			value={word.title}
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

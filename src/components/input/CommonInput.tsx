export default function CommonInput() {
	return <Input placeholder="입력해 주세요." autoFocus />;
}

import styled from 'styled-components';
const Input = styled.input`
	width: 100%;
	padding: 1rem;
	font-size: 1rem;

	border: 0;
	outline: none;
`;

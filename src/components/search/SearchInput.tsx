import styled from 'styled-components';

export default function SearchInput() {
	return <Input placeholder="검색어를 입력해 주세요." autoFocus />;
}

const Input = styled.input`
	width: 100%;
	padding-top: 1rem;
	padding-bottom: 1rem;
	font-size: 1rem;

	border: 0;
	outline: none;
`;

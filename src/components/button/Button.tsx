import styled from 'styled-components';

export default function Button() {
	return <CustomButton>글쓰기</CustomButton>;
}

const CustomButton = styled.button`
	border-radius: 0.25rem;

	font-size: 1rem;
	font-weight: 600;
	border: 1px solid orange;
	color: orange;
	background-color: #fff;
	cursor: pointer;

	&:hover {
		background-color: orange;
		color: #fff;
	}
`;

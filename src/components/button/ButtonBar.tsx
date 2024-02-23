import styled from 'styled-components';
import Button from './Button';

export default function ButtonBar() {
	return (
		<ButtonBarWrapper>
			<Button></Button>
		</ButtonBarWrapper>
	);
}

const ButtonBarWrapper = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;

	margin-bottom: 1rem;
`;

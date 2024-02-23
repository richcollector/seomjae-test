import styled from 'styled-components';
import SearchInput from './SearchInput';
import SearchIcon from './SearchIcon';

export default function SearchBar() {
	return (
		<SearchBarWrapper>
			<SearchIcon />
			<SearchInput />
		</SearchBarWrapper>
	);
}

const SearchBarWrapper = styled.div`
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

import List from '@/components/board/list/List';
import Pagination from '@/components/paginations/Paginations';
import CommonButton from '@/components/button/CommonButton';
import { MAIN_BUTTON } from '@/common/constants/Constants';
import Head from 'next/head';
import CommonInput from '@/components/input/CommonInput';
import SearchIcon from '@/components/input/SearchIcon';

export default function Home() {
	const handleOnClick = () => {};
	return (
		<>
			<Head>
				<title>seomjae-test</title>
				<link rel="icon" href="logo/favicon.ico" />
			</Head>
			<SearchBarWrapper>
				<SearchIcon />
				<SearchInput />
			</SearchBarWrapper>
			<SearchButtonBarWrapper>
				{MAIN_BUTTON.map((btnName, idx) => (
					<CommonButton key={idx} btnName={btnName} />
				))}
			</SearchButtonBarWrapper>
			<List />
			{/* <Pagination /> */}
		</>
	);
}

import styled from 'styled-components';
import SearchInput from '@/components/input/SearchInput';

const SearchButtonBarWrapper = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;

	margin-bottom: 1rem;
`;

const SearchBarWrapper = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;

	border: 1px solid rgb(201, 202, 204);
	border-radius: 0.25rem;
	margin-bottom: 1rem;
	background-color: rgb(255, 255, 255);

	&:focus-within {
		border: 1px solid orange;
	}
`;

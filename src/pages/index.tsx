import List from '@/components/board/list/List';
import ButtonBar from '@/components/button/ButtonBar';
import Pagination from '@/components/paginations/Paginztions';
import SearchBar from '@/components/search/SearchBar';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>seomjae-test</title>
				<link rel="icon" href="/logo/favicon.ico" />
			</Head>
			<SearchBar />
			<ButtonBar />
			<List />
			<Pagination />
		</>
	);
}

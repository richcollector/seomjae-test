import { useEffect, useState } from 'react';
import { PAGE_PER_COUNT } from '@/common/constants/Constants';
import { useRouter } from 'next/router';
import { useAppSelector } from '@/common/hooks/useRedux';
import { selectList } from '@/common/store/slice/listSlice';

export default function Pagination({
	setPage,
}: {
	setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
	const list = useAppSelector(selectList);
	const [startPage, setStartPage] = useState(1);
	const [activedPage, setActivedPage] = useState(1);
	const lastPage = Math.ceil((list.length ?? PAGE_PER_COUNT) / PAGE_PER_COUNT);
	const router = useRouter();

	useEffect(() => {
		setPage(1);
	}, [router]);

	const onClickPage = (event: React.MouseEvent<HTMLSpanElement>): void => {
		const activedPage = Number(event.currentTarget.id);
		setActivedPage(activedPage);
		setPage(Number(event.currentTarget.id));
	};

	const onClickPrevPage = (): void => {
		if (startPage === 1) return;
		setStartPage(startPage - 5);
		setActivedPage(startPage - 5);
		setPage(startPage - 5);
	};

	const onClickNextPage = (): void => {
		if (startPage + 5 <= lastPage) {
			setStartPage(startPage + 5);
			setActivedPage(startPage + 5);
			setPage(startPage + 5);
		}
	};

	return (
		<PaginationWrapper>
			<Page $isActive={false} onClick={onClickPrevPage}>
				<Arrow src="icon/arrowLeft.svg" alt="arrowLeft" />
			</Page>
			{new Array(5).fill(1).map(
				(_, index) =>
					startPage + index <= lastPage && (
						<Page
							key={startPage + index}
							id={String(startPage + index)}
							onClick={onClickPage}
							$isActive={startPage + index === activedPage}
						>
							{startPage + index}
						</Page>
					),
			)}
			<Page $isActive={false} onClick={onClickNextPage}>
				<Arrow src="icon/arrowRight.svg" alt="arrowRight" />
			</Page>
		</PaginationWrapper>
	);
}

import styled from 'styled-components';

const PaginationWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	gap: 1.5rem;
`;

const Page = styled.button<{ $isActive: boolean }>`
	color: ${props => (props.$isActive ? '#fff' : '#999')};
	background-color: ${props => (props.$isActive ? 'orange' : '')};
	font-weight: ${props => (props.$isActive ? 'bold' : 'normal')};
	cursor: ${props => (props.$isActive ? 'none' : 'pointer')};

	border: 0;
`;

const Arrow = styled.img`
	width: 0.8rem;
`;

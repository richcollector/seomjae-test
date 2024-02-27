import { useAppSelector } from '@/common/hooks/useRedux';
import { selectList } from '@/common/store/slice/listSlice';
import ListCard from './listCard/ListCard';

export default function List() {
	const list = useAppSelector(selectList);
	console.log('??', list);

	return (
		<>
			<TotalCard>
				<span>{list.length} total</span>
			</TotalCard>
			<ListWrapper>
				{list.map((card, i) => (
					<ListCard key={i} card={card} />
				))}
			</ListWrapper>
		</>
	);
}

import styled from 'styled-components';

const ListWrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 30rem);
	grid-gap: 20px;

	padding-top: 1rem;
	padding-bottom: 2rem;

	@media (min-width: 811px) and (max-width: 1200px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 501px) and (max-width: 810px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media (max-width: 500px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const TotalCard = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	border-bottom: 1px solid rgb(225, 226, 228);
	text-align: left;
	padding-bottom: 0.75rem;

	color: #222;
	font-weight: 600;
`;

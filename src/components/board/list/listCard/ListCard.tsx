import { useEffect, useRef } from 'react';

export default function ListCard({ card }: any) {
	const mathMLRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const mathMLString = card.content;

		const parser = new DOMParser();
		const mathMLDocument = parser.parseFromString(mathMLString, 'application/xml');
		const mathMLElement = mathMLDocument.documentElement;

		if (mathMLRef.current && mathMLElement) {
			mathMLRef.current.appendChild(mathMLElement);
		}
	}, [card.content]);

	return (
		<CardWrapper>
			<CardImg src="img/math.jpg" alt="math" />
			<CardBody>
				<CardTitle>
					<h1>{card.title}</h1>
					<div ref={mathMLRef}></div>
				</CardTitle>
				<CardInfo>
					<p style={{ color: '#524fa1', fontWeight: '600' }}>{card.date}</p>
				</CardInfo>
			</CardBody>
		</CardWrapper>
	);
}

import styled from 'styled-components';
const CardWrapper = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: #ffffff;
	border-radius: 0.5rem;
	border: 1px solid rgb(225, 226, 228);

	cursor: pointer;

	&:hover {
		border: 0.5rem solid orange;
		filter: brightness(95%);
	}
`;

const CardImg = styled.img`
	width: 100%;
	height: 30%;
	object-fit: cover;
`;

const CardBody = styled.div`
	width: 100%;
	height: calc(100% - 30%);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 0 1rem;
`;

const CardTitle = styled.div`
	width: 100%;
	height: 80%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 1rem;

	border-bottom: 1px solid rgb(225, 226, 228);
	padding-top: 1rem;
`;

const CardInfo = styled.div`
	width: 100%;
	height: calc(100% - 80%);

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	padding: 1rem 0;
`;

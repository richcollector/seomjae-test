import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function ListCard() {
	const mathMLRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		// MathML 문자열
		const mathMLString =
			'<math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn></math>';

		// MathML 문자열을 파싱하여 DOM 요소로 변환
		const parser = new DOMParser();
		const mathMLDocument = parser.parseFromString(mathMLString, 'application/xml');
		const mathMLElement = mathMLDocument.documentElement;

		// useRef로 참조한 div에 MathML 추가
		if (mathMLRef.current && mathMLElement) {
			mathMLRef.current.appendChild(mathMLElement);
		}
	}, []);

	return (
		<CardWrapper>
			<CardImg src="img/math.jpg" alt="math" />
			<CardBody>
				<CardTitle>
					<p style={{ color: '#524fa1', fontWeight: '600' }}>No categories</p>
					<h1>수학문제</h1>
					<div ref={mathMLRef}></div>
				</CardTitle>
				<CardInfo>
					<p style={{ color: '#524fa1', fontWeight: '600' }}>2024.02.23</p>
				</CardInfo>
			</CardBody>
		</CardWrapper>
	);
}

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

	&:hover {
		border: 0.5rem solid orange;
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

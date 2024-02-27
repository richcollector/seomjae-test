import Link from 'next/link';

export default function CommonButton({ btnName }: { btnName: string[] }) {
	const handleOnClick = () => {};
	return (
		<>
			{btnName[0] !== '' ? (
				<Link href={btnName[0]}>
					<Button>{btnName[1]}</Button>
				</Link>
			) : (
				<Button onClick={handleOnClick}>{btnName[1]}</Button>
			)}
		</>
	);
}

import styled from 'styled-components';
const Button = styled.button`
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

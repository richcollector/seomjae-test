import React from 'react';
import dynamic from 'next/dynamic';

const CustomEditor = dynamic(
	() => {
		return import('./CustomEditor');
	},
	{ ssr: false },
);

export default function Editor({
	setWord,
}: {
	setWord: React.Dispatch<
		React.SetStateAction<{
			title: string;
			content: string;
			date: string;
		}>
	>;
}) {
	return (
		<CustomEditorWrapper>
			<CustomEditor setWord={setWord} />
		</CustomEditorWrapper>
	);
}

import styled from 'styled-components';
const CustomEditorWrapper = styled.div`
	width: 100%;

	[role='textbox'] {
		height: 100vh;
	}
`;

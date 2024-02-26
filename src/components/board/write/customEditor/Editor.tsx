import React from 'react';
import dynamic from 'next/dynamic';

const CustomEditor = dynamic(
	() => {
		return import('./CustomEditor');
	},
	{ ssr: false },
);

export default function Editor() {
	return (
		<CustomEditorWrapper>
			<CustomEditor />
		</CustomEditorWrapper>
	);
}

import styled from 'styled-components';
const CustomEditorWrapper = styled.div`
	width: 100%;

	[role='textbox'] {
		height: 1000px;
	}
`;

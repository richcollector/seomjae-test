import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build';

const editorConfiguration = {
	toolbar: [
		'heading',
		'|',
		'bold',
		'italic',
		'link',
		'bulletedList',
		'numberedList',
		'|',
		'outdent',
		'indent',
		'|',
		'imageUpload',
		'blockQuote',
		'insertTable',
		'mediaEmbed',
		'undo',
		'redo',
		'mathtype',
	],
};

function CustomEditor({
	setWord,
}: {
	setWord: React.Dispatch<
		React.SetStateAction<{
			title: string;
			content: string;
		}>
	>;
}) {
	return (
		<CKEditor
			editor={Editor}
			config={editorConfiguration}
			onChange={(event, editor) => {
				const data = editor.getData();
				console.log({ event, editor, data });

				setWord(prevWord => ({
					...prevWord,
					content: data,
				}));
			}}
		/>
	);
}

export default CustomEditor;

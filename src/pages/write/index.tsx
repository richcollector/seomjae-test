import Editor from '@/components/board/write/customEditor/Editor';
import ButtonBar from '@/components/button/ButtonBar';
import SearchBar from '@/components/search/SearchBar';

export default function WritePage() {
	return (
		<>
			<SearchBar />
			<ButtonBar />
			<Editor />
		</>
	);
}

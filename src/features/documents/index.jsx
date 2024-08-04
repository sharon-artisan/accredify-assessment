/*
	Everything related to documents is in this folder to be exported
*/
import ListDocuments from "../documents/components/ListDocuments.jsx";

function DocumentsFeature() {
	return (
		<>
			<ListDocuments showLink={false} />
		</>
	);
}

export { DocumentsFeature, ListDocuments }
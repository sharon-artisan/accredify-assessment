/*
	Everything related to documents is in this folder
*/
import RecentDocuments from "../documents/components/ListDocuments.jsx";

export default function DocumentsFeature() {
	return (
		<>
			<RecentDocuments showLink={false} />
		</>
	);
}

import RecentDocuments from "../documents/components/ListDocuments.jsx";

export default function DocumentsFeature() {
	return (
		<>
			<div className="home-container">
				<div className="home-user-container">
					<span className="home-username">📄 Documents</span>
				</div>

				<div>
					<RecentDocuments showLink={false}/>
				</div>
			</div>
		</>
	);
}

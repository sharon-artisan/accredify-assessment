import React, { useEffect } from "react";

function Settings() {
	useEffect(() => {
		document.title = "Settings | Accredify";
	}, []);

	return (
		<>
			<div className="home-container">
				<div className="home-user-container">
					<span className="home-title">⚙️ Settings</span>
				</div>
			</div>
		</>
	);
}

export default Settings;

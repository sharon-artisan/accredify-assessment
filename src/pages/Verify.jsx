import React, { useEffect } from "react";

function Verify() {
	useEffect(() => {
		document.title = "Verify | Accredify";
	}, []);

	return (
		<>
			<div className="home-container">
				<div className="home-user-container">
					<span className="home-title">🔐 Verify</span>
				</div>
			</div>
		</>
	);
}

export default Verify;

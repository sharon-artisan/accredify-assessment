import GoalsFeature from "../features/goals/index.jsx";
import React, { useEffect } from "react";

function Goals() {
	useEffect(() => {
		document.title = "Goals | Accredify";
	}, []);

	return (
		<>
			<div className="home-container">
				<div className="home-user-container">
					<span className="home-title">💡 Goals</span>
				</div>

				<div>
					<GoalsFeature />
				</div>
			</div>
		</>
	);
}

export default Goals;

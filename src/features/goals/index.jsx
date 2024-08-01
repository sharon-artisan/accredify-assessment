import UserCircularProgress from "../goals/components/ProgressGoal.jsx";

export default function GoalsFeature() {
	return (
		<>
			<div className="home-container">
				<div className="home-user-container">
					<span className="home-username">💡 Goals</span>
				</div>

				<div>
					<UserCircularProgress showLink={false} showDetails={true}/>
				</div>
			</div>
		</>
	);
}

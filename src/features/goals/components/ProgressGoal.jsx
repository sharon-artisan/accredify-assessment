import "../styles/ProgressGoal.scss";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { formatIndefiniteArticle } from "../../../utils/formatIndefiniteArticle.js";
import { useUserGoals } from "../hooks/useUserGoals.js";
import { Tag } from "primereact/tag";
import { ProgressSpinner } from 'primereact/progressspinner';

const CircularProgress = ({ value }) => {
	return (
		<div style={{ maxWidth: 180, height: 180 }}>
			<CircularProgressbar
				value={value}
				text={`${value}%`}
				styles={buildStyles({
					strokeLinecap: "round",
					pathTransitionDuration: 0.5,
					pathColor: `#493DF5`,
					textColor: "#493DF5",
					trailColor: "#E8E9EB",
					backgroundColor: "#3e98c7",
				})}
			/>
		</div>
	);
};

export default function ProgressGoal({ showLink, showDetails }) {
	const { userGoalsData, loading, error } = useUserGoals();
	const goals = userGoalsData?.record?.data || [];
	
	if (loading) {
		return (
			<div className="home-container">
				<div role="status" className="spinner-container">
					<ProgressSpinner style={{width: '100px', height: '100px'}} strokeWidth="5" />
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="home-container">
				<div className="error-message">
					<p>Error fetching user data: {error.message}</p>
				</div>
			</div>
		);
	}

	return (
		<div className="home-career-document-gap">
			<div>
				<h1 className="text-h4">Career Goals</h1>
			</div>
			{goals.length === 0 ? (
				<p>No goals available</p>
			) : (
				goals.map((goal, index) => (
					<div id="career-goal" key={index} className="goal-progress-container">
						<div
							className={`flex w-full gap-4 ${
								showDetails
									? "flex-col sm:flex-row"
									: "flex-col"
							}`}>
							<div
								className={`left-section ${
									showDetails ? "w-full lg:w-1/2" : "w-full"
								}`}>
								<div className="text-center flex flex-col gap-4">
									<span className="text-h6 text-grey-300">
										Your Progress
									</span>
									<CircularProgress value={goal.progress} />
									{!showDetails && (
										<div className="goal-title items-center">
											<span className="text-meta">
												I want to become{" "}
												{formatIndefiniteArticle(
													goal.name
												)}
											</span>
											<span className="text-h4 text-center">
												{goal.name}
											</span>
										</div>
									)}
									<div>
										{showLink && (
											<Link
												to={`/goals`}
												id="secondary-cta">
												View Insights
											</Link>
										)}
									</div>
								</div>
							</div>
							{showDetails && (
								<div className="right-section">
									<div className="goal-title">
										<span className="text-meta">
											I want to become{" "}
											{formatIndefiniteArticle(goal.name)}
										</span>
										<span className="text-h4 text-center">
											{goal.name}
										</span>
									</div>
									<span className="text-meta text-grey-30">
										{goal.description}
									</span>
									<div className="goal-type">
										<Tag value={goal.type} rounded></Tag>
									</div>
								</div>
							)}
						</div>
					</div>
				))
			)}
		</div>
	);
}

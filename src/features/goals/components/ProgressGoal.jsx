import "../styles/ProgressGoal.scss";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import careerGoalJson from "../../../data/careerGoal.json";
import { formatIndefiniteArticle } from "../../../utils/formatIndefiniteArticle.js";



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

	const percentage = careerGoalJson.data[0].progress;
	const careerGoalName = careerGoalJson.data[0].name;
	const careerGoalDescription = careerGoalJson.data[0].description;

	return (
		<>
			<div className="home-career-document-gap">
				<div>
					<h1 className="text-h4">Career Goal</h1>
				</div>
				<div className="goal-progress-container">
					<div
						className={`flex w-full ${
							showDetails ? "flex-row" : "flex-col"
						}`}>
						<div
							className={`left-section ${
								showDetails ? "w-full lg:w-1/2" : "w-full"
							}`}>
							<div className="text-center flex flex-col gap-4">
								<span className="text-h6 text-grey-300">
									Your Progress
								</span>
								<CircularProgress value={percentage} />

								{!showDetails && (
									<div className="goal-title  items-center">
										<span className="text-meta">
											{" "}
											I want to become{" "}
											{formatIndefiniteArticle(
												careerGoalName
											)}
										</span>
										<span className="text-h4 text-center">
											{careerGoalName}
										</span>
									</div>
								)}

								<div>
									{showLink && (
										<Link to={`/goals`} id="secondary-cta">
											View Insights
										</Link>
									)}
								</div>
							</div>
						</div>
						{showDetails && (
							<div className="right-section flex items-start">
								<div className="goal-title">
									<span className="text-meta">
										{" "}
										I want to become{" "}
										{formatIndefiniteArticle(
											careerGoalName
										)}
									</span>
									<span className="text-h4 text-center">
										{careerGoalName}
									</span>
								</div>
								<span className="text-meta text-grey-30">
									{careerGoalDescription}
								</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

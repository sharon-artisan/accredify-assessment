import { UserCircularProgress } from "../features/goals/index.jsx";
import { ListDocuments } from "../features/documents/index.jsx";
import React, { useEffect } from "react";
import { useUserData } from "../hooks/useUserData.js";
import { ProgressSpinner } from "primereact/progressspinner";

function Home() {
	useEffect(() => {
		document.title = "Home | Accredify";
	}, []);
	const { userData, loading, error } = useUserData();
	const name = userData?.record?.data?.name;
	const isPersonal =
		userData?.record?.data?.current_organisation?.is_personal;

	if (loading) {
		return (
			<div className="home-container">
				<div role="status" className="spinner-container">
					<ProgressSpinner
						style={{ width: "100px", height: "100px" }}
						strokeWidth="5"
					/>
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
		<div className="home-container">
			<div className="home-user-container">
				<span className="home-title">Hi, {name} 👋</span>
				<span className="home-description">
					{!isPersonal
						? " Manage your documents issued by SMU Academy or track your career goal."
						: "Manage your documents"}
				</span>
			</div>

			<div className="grid grid-cols-12 gap-6">
				{!isPersonal && (
					<div className="col-span-12 sm:col-span-4 lg:col-span-3">
						<UserCircularProgress
							showLink={true}
							showDetails={false}
						/>
					</div>
				)}

				<div
					className={`col-span-12 ${
						isPersonal
							? "lg:col-span-12"
							: "sm:col-span-8 lg:col-span-9"
					}`}>
					<ListDocuments showLink={true} />
				</div>
			</div>
		</div>
	);
}

export default Home;

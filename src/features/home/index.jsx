import "./styles/home.scss";
import UserCircularProgress from "../goals/components/ProgressGoal.jsx";
import RecentDocuments from "../documents/components/ListDocuments.jsx";
import { useUserData } from "../../hooks/useUserData.js";

export default function HomeFeature() {
	const { userData } = useUserData();
	const isPersonal = userData?.record?.data?.current_organisation?.is_personal;
	
	return (
		<div className="grid grid-cols-12 gap-6">
			{!isPersonal && (
				<div className="col-span-12 sm:col-span-4 lg:col-span-3">
					<UserCircularProgress showLink={true} showDetails={false} />
				</div>
			)}

			<div
				className={`col-span-12 ${
					isPersonal
						? "lg:col-span-12"
						: "sm:col-span-8 lg:col-span-9"
				}`}>
				<RecentDocuments showLink={true} />
			</div>
		</div>
	);
}

import "./styles/layouts.scss";
import { NavLink } from "react-router-dom";
import { Avatar } from "primereact/avatar";
import avatarImage from "../assets/avatar.png";
import homeIcon from "../assets/icons/icon_home.svg";
import documentsIcon from "../assets/icons/icon_documents.svg";
import goalsIcon from "../assets/icons/icon_goals.svg";
import verifyIcon from "../assets/icons/icon_verify.svg";
import settingsIcon from "../assets/icons/icon_settings.svg";
import userJson from "../data/user.json";
import { formatInitials } from "../utils/formatInitials.js";

export default function Sidebar() {
	const { name, current_organisation } = userJson.data;
	const isPersonal = current_organisation.is_personal;
	const initials = formatInitials(name);

	const sidebarItems = [
		{ id: 1, image: homeIcon, label: "Home", route: "/home" },
		{
			id: 2,
			image: documentsIcon,
			label: "Documents",
			route: "/documents",
		},
		{ id: 3, image: goalsIcon, label: "Goals", route: "/goals" },
		{ id: 4, image: verifyIcon, label: "Verify", route: "/verify" },
		{ id: 5, image: settingsIcon, label: "Settings", route: "/settings" },
	];

	return (
		<>
			<div id="sidebar">
				<div className="pt-4">
					{!isPersonal ? (
						<Avatar
							image={avatarImage}
							size="xlarge"
							shape="circle"
							aria-label="Default avatar"
						/>
					) : (
						<Avatar
							size="xlarge"
							label={initials}
							shape="circle"
							style={{
								backgroundColor: "#493DF5",
								color: "#ffffff",
							}}
							aria-label="Avatar with initials"
						/>
					)}
				</div>

				<div className="sidebar-container">
					{sidebarItems.map((item) => (
						<NavLink
							key={item.id}
							to={item.route}
							className={({ isActive }) =>
								`sidebar-icon-container ${
									isActive ? "icon-active" : ""
								}`
							}>
							<img
								src={item.image}
								alt={item.label}
								className="sidebar-icon"
							/>
						</NavLink>
					))}
				</div>
			</div>
		</>
	);
}

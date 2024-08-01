import "./styles/layouts.scss";
import { NavLink } from "react-router-dom";
import { Avatar } from "primereact/avatar";
import avatarImage from "../assets/avatar.png";
import homeIcon from "../assets/icons/icon_home.svg";
import documentsIcon from "../assets/icons/icon_documents.svg";
import goalsIcon from "../assets/icons/icon_goals.svg";
import verifyIcon from "../assets/icons/icon_verify.svg";
import settingsIcon from "../assets/icons/icon_settings.svg";

const sidebarItems = [
	{ id: 1, image: homeIcon, label: "Home", route: "/home" },
	{ id: 2, image: documentsIcon, label: "Documents", route: "/documents" },
	{ id: 3, image: goalsIcon, label: "Goals", route: "/goals" },
	{ id: 4, image: verifyIcon, label: "Verify", route: "/verify" },
	{ id: 5, image: settingsIcon, label: "Settings", route: "/settings" },
];

export default function Sidebar() {
	return (
		<>
			<div id="sidebar">
				<div className="pt-4">
					<Avatar image={avatarImage} size="xlarge" shape="circle" />
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

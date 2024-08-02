import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/layouts.scss";
import { Avatar } from "primereact/avatar";
import chevronDown from "../assets/icons/icon_chevron_down.svg";
import userJson from "../data/user.json";
import { formatInitials } from "../utils/formatInitials.js";
import { OverlayPanel } from "primereact/overlaypanel";
import { Divider } from "primereact/divider";
import LogoutIcon from "../assets/icons/icon_logout.svg";


export default function Header() {
	const userName = userJson.data.name;
	const openHeaderPanel = useRef(null);
	const [isPanelOpen, setIsPanelOpen] = useState(false);

	const initials = formatInitials(userName);

	const handlePanelToggle = (e) => {
		setIsPanelOpen(!isPanelOpen);
		openHeaderPanel.current.toggle(e);
	};

	return (
		<div className="header-container">
			<div
				className={`header-user ${
					isPanelOpen ? "header-user-active" : ""
				}`}
				onClick={handlePanelToggle}>
				<Avatar
					label={initials}
					shape="circle"
					style={{
						backgroundColor: "#493DF5",
						color: "#ffffff",
					}}
				/>
				<span className="text-meta text-primary-background">
					{userName}
				</span>
				<img src={chevronDown} alt="Chevron Down" />
				<OverlayPanel ref={openHeaderPanel}>
					<div className="overlay-panel w-[280px]">
						<div className="username-panel">
							<Avatar
								label={initials}
								shape="circle"
								style={{
									backgroundColor: "#493DF5",
									color: "#ffffff",
								}}
							/>
							<div className="flex flex-col">
								<span className="text-h5 text-primary-background">
									{userName}
								</span>
								<span className="text-meta text-grey-300">
									Recipient
								</span>
							</div>
						</div>

						<Divider className="divider my-4" />

							<Link to={`/login`}>
						<div className="logout-text">
								<img
									src={LogoutIcon}
									alt="Logout Icon"
									className="w-[16px] h-[16px]"
								/>
								<span className="text-meta">Log out</span>
						</div>
							</Link>
					</div>
				</OverlayPanel>
			</div>
		</div>
	);
}

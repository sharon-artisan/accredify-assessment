import Sidebar from "../layouts/Sidebar";
import { Outlet, NavLink } from "react-router-dom";
import Header from "../layouts/Header";

const MainLayout = ({ children }) => {
	return (
		<>
		<div role="sidebar">
			<Sidebar />
		</div>
			<div id="page">
				<div role="header" id="header">
					<Header />
				</div>
				<div role="detail" id="detail">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default MainLayout;

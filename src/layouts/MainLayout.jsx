import Sidebar from "../layouts/Sidebar";
import { Outlet, NavLink } from "react-router-dom";
import Header from "../layouts/Header";

const MainLayout = ({ children }) => {
	return (
		<>
			<Sidebar />
			<div id="page">
				<div id="header">
					<Header />
				</div>
				<div id="detail">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default MainLayout;

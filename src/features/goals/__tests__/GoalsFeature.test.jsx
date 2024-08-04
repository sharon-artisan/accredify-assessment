import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { GoalsFeature } from "../index.jsx";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../components/ProgressGoal.jsx", () => ({
	__esModule: true,
	default: () => <div>UserCircularProgress</div>,
}));

describe("GoalsFeature", () => {
	test("renders without crashing", () => {
		render(
			<Router>
				<GoalsFeature />
			</Router>
		);
	});
	test("renders UserCircularProgress component", () => {
		render(
			<Router>
				<GoalsFeature />
			</Router>
		);
		expect(screen.getByText("UserCircularProgress")).toBeInTheDocument();
	});
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GoalsFeature from "../index.jsx";

jest.mock("../components/ProgressGoal.jsx", () => ({
	__esModule: true,
	default: () => <div>UserCircularProgress</div>,
}));

describe("GoalsFeature", () => {
	test("renders without crashing", () => {
		render(<GoalsFeature />);
	});
	test("renders UserCircularProgress component", () => {
		render(<GoalsFeature />);

		expect(screen.getByText("UserCircularProgress")).toBeInTheDocument();
	});
});

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AuthenticationFeature } from "../index.jsx";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../components/LoginForm.jsx", () => ({
	__esModule: true,
	default: () => <div>LoginForm</div>,
}));

describe("AuthenticationFeature", () => {
	test("renders without crashing", () => {
		render(
			<Router>
				<AuthenticationFeature />
			</Router>
		);
	});
	test("renders LoginForm component", () => {
		render(
			<Router>
				<AuthenticationFeature />
			</Router>
		);

		expect(screen.getByText("LoginForm")).toBeInTheDocument();
	});
});

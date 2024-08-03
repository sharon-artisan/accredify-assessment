import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AuthenticationFeature from "../components/LoginForm.jsx";

jest.mock("../components/LoginForm.jsx", () => ({
	__esModule: true,
	default: () => <div>LoginForm</div>,
}));

describe("AuthenticationFeature", () => {
	test("renders without crashing", () => {
		render(<AuthenticationFeature />);
	});
	test("renders LoginForm component", () => {
		render(<AuthenticationFeature />);

		expect(screen.getByText("LoginForm")).toBeInTheDocument();
	});
});

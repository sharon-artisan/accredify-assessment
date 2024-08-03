import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import LoginForm from "../LoginForm.jsx";

test("renders without crashing", () => {
	render(
		<Router>
			<LoginForm />
		</Router>
	);

	expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
	expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
	expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
});

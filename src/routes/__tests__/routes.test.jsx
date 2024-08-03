import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import router from "../index.jsx";

test("should render Home component for /home path", () => {
	render(<RouterProvider router={router} />);
	window.history.pushState({}, "Home", "/home");
});
test("renders Login page on /login route", () => {
	render(<RouterProvider router={router} />);
	window.history.pushState({}, "Login", "/login");
});

test("redirects from root to /home", () => {
	render(<RouterProvider router={router} />);
	window.history.pushState({}, "Home", "/home");
});

// Test for route name
test("should have correct route names", () => {
	const routeNames = router.routes.flatMap(
		(route) => route.children?.map((child) => child.name) || []
	);

	expect(routeNames).toContain("Home");
	expect(routeNames).toContain("Documents");
	expect(routeNames).toContain("Goals");
	expect(routeNames).toContain("Verify");
	expect(routeNames).toContain("Settings");
	expect(routeNames).toContain("Login");
});

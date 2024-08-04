import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { DocumentsFeature } from "../index.jsx";

jest.mock("../../documents/components/ListDocuments.jsx", () => ({
	__esModule: true,
	default: () => <div>RecentDocuments</div>,
}));

describe("DocumentsFeature", () => {
	test("renders without crashing", () => {
		render(
			<Router>
				<DocumentsFeature />
			</Router>
		);
	});
	test("renders RecentDocuments component", () => {
		render(
			<Router>
				<DocumentsFeature />
			</Router>
		);

		expect(screen.getByText("RecentDocuments")).toBeInTheDocument();
	});
});

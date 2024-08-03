import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DocumentsFeature from "../index.jsx";

jest.mock("../../documents/components/ListDocuments.jsx", () => ({
	__esModule: true,
	default: () => <div>RecentDocuments</div>,
}));

describe("DocumentsFeature", () => {
	test("renders without crashing", () => {
		render(<DocumentsFeature />);
	});
	test("renders RecentDocuments component", () => {
		render(<DocumentsFeature />);

		expect(screen.getByText("RecentDocuments")).toBeInTheDocument();
	});
});

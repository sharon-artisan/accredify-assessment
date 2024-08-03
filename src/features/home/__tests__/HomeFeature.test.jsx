import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomeFeature from "../index.jsx";
import { useUserData } from "../../../hooks/useUserData";

jest.mock("../../../hooks/useUserData");
jest.mock("../../goals/components/ProgressGoal.jsx", () => ({
	__esModule: true,
	default: () => <div>ProgressGoal</div>,
}));
jest.mock("../../documents/components/ListDocuments.jsx", () => () => (
	<div>ListDocuments</div>
));

describe("HomeFeature", () => {
	test("renders without crashing", () => {
		useUserData.mockReturnValue({
			userData: {
				record: {
					data: { current_organisation: { is_personal: false } },
				},
			},
			loading: false,
			error: null,
		});
		render(<HomeFeature />);
	});

	test("renders UserCircularProgress and RecentDocuments correctly when is_personal is false", () => {
		useUserData.mockReturnValue({
			userData: {
				record: {
					data: { current_organisation: { is_personal: false } },
				},
			},
			loading: false,
			error: null,
		});

		render(<HomeFeature />);

		expect(screen.getByText("ProgressGoal")).toBeInTheDocument();
		expect(screen.getByText("ListDocuments")).toBeInTheDocument();
	});

	test("does not render UserCircularProgress and renders RecentDocuments with full width when is_personal is true", () => {
		useUserData.mockReturnValue({
			userData: {
				record: {
					data: { current_organisation: { is_personal: true } },
				},
			},
			loading: false,
			error: null,
		});

		render(<HomeFeature />);

		expect(screen.queryByText("ProgressGoal")).not.toBeInTheDocument();
		expect(screen.getByText("ListDocuments")).toBeInTheDocument();
	});
});

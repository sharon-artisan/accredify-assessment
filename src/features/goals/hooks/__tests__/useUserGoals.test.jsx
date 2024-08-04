import React from "react";
import { render, screen } from "@testing-library/react";
import { useUserGoals } from "../useUserGoals.js";
import { getUserCareerGoals } from "../../services/goalsServices.js";

jest.mock("../../services/goalsServices.js");

const TestComponent = () => {
	const { userGoalsData, loading, error } = useUserGoals();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;
	if (!userGoalsData) return <div>No goals available</div>;

	return (
		<div>
			{userGoalsData.map((goal) => (
				<div key={goal.id}>{goal.title}</div>
			))}
		</div>
	);
};

describe("useUserGoals", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("should set userGoalsData and loading to false when data is fetched successfully", async () => {
		// Arrange
		const mockGoals = [
			{ id: 1, title: "Goal 1" },
			{ id: 2, title: "Goal 2" },
		];
		getUserCareerGoals.mockResolvedValue(mockGoals);

		// Act
		render(<TestComponent />);

		// Assert
		expect(await screen.findByText("Goal 1")).toBeInTheDocument();
		expect(await screen.findByText("Goal 2")).toBeInTheDocument();
	});

	test("should set error and loading to false when data fetch fails", async () => {
		// Arrange
		const mockError = new Error("Failed to fetch");
		getUserCareerGoals.mockRejectedValue(mockError);

		// Act
		render(<TestComponent />);

		// Assert
		expect(
			await screen.findByText(`Error: ${mockError.message}`)
		).toBeInTheDocument();
	});
});

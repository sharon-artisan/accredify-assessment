import React from "react";
import { render, screen } from "@testing-library/react";
import { useUserDocuments } from "../../hooks/useUserDocuments";
import { getUserDocuments } from "../../services/dataServices.js";

jest.mock("../../services/dataServices.js");

const TestComponent = () => {
	const { userDocumentsData, loading, error } = useUserDocuments();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;
	if (!userDocumentsData) return <div>No documents available</div>;

	return (
		<div>
			{userDocumentsData.map((doc) => (
				<div key={doc.id}>{doc.title}</div>
			))}
		</div>
	);
};

describe("useUserDocuments", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("should set userDocumentsData and loading to false when data is fetched successfully", async () => {
		// Arrange
		const mockDocuments = [
			{ id: 1, title: "Document 1" },
			{ id: 2, title: "Document 2" },
		];
		getUserDocuments.mockResolvedValue(mockDocuments);

		// Act
		render(<TestComponent />);

		// Assert
		expect(await screen.findByText("Document 1")).toBeInTheDocument();
		expect(await screen.findByText("Document 2")).toBeInTheDocument();
	});

	test("should set error and loading to false when data fetch fails", async () => {
		// Arrange
		const mockError = new Error("Failed to fetch");
		getUserDocuments.mockRejectedValue(mockError);

		// Act
		render(<TestComponent />);

		// Assert
		expect(
			await screen.findByText(`Error: ${mockError.message}`)
		).toBeInTheDocument();
	});
});

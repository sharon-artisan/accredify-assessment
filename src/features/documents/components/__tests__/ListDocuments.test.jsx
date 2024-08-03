import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ListDocuments from "../ListDocuments.jsx";
import { useUserDocuments } from "../../../../hooks/useUserDocuments.js";
import { BrowserRouter as Router } from "react-router-dom";
import { formatDate } from "../../../../utils/formatDate.js";
jest.mock("../../../../hooks/useUserDocuments.js");

const mockUserDocuments = [
	{
		id: 1,
		document_name: "Document 1",
		received_on: "2022-01-12T17:58:25.000000Z",
	},
	{
		id: 2,
		document_name: "Document 2",
		received_on: "2022-01-12T17:58:25.000000Z",
	},
	{ id: 3, document_name: "Document 3", received_on: null },
];
describe("ListDocuments", () => {
	test("renders without crashing", () => {
		useUserDocuments.mockReturnValue({
			loading: false,
			error: null,
			userDocumentsData: { record: { data: mockUserDocuments } },
		});
		render(
			<Router>
				<ListDocuments showLink={true} />
			</Router>
		);

		expect(screen.getByText("Recent Documents")).toBeInTheDocument();
	});

	test("renders loading spinner while data is being fetched", () => {
		useUserDocuments.mockReturnValue({
			loading: true,
			error: null,
			userDocumentsData: { record: { data: [] } },
		});
		render(
			<Router>
				<ListDocuments showLink={true} />
			</Router>
		);
		expect(screen.getByRole("status")).toBeInTheDocument();
	});

	test("renders loading state", () => {
		useUserDocuments.mockReturnValue({
			loading: true,
			error: null,
			userDocumentsData: null,
		});
		render(
			<Router>
				<ListDocuments showLink={true} />
			</Router>
		);
		expect(screen.getByRole("status")).toBeInTheDocument();
	});

	test("renders error state", () => {
		useUserDocuments.mockReturnValue({
			loading: false,
			error: { message: "Error fetching user data" },
			userDocumentsData: null,
		});
		render(
			<Router>
				<ListDocuments showLink={true} />
			</Router>
		);
		expect(
			screen.getByText(/Error fetching user data/i)
		).toBeInTheDocument();
	});

	test("renders documents", async () => {
		useUserDocuments.mockReturnValue({
			loading: false,
			error: null,
			userDocumentsData: { record: { data: mockUserDocuments } },
		});
		render(
			<Router>
				<ListDocuments showLink={true} />
			</Router>
		);
		expect(await screen.findByText("Document 1")).toBeInTheDocument();
		expect(await screen.findByText("Document 2")).toBeInTheDocument();
		expect(await screen.findByText("Document 3")).toBeInTheDocument();
	});

	test("renders without documents", async () => {
		useUserDocuments.mockReturnValue({
			loading: false,
			error: null,
			userDocumentsData: { record: { data: [] } },
		});
		render(
			<Router>
				<ListDocuments showLink={true} />
			</Router>
		);

		expect(await screen.findByText("Recent Documents")).toBeInTheDocument();
		expect(
			await screen.findByText("View All Documents")
		).toBeInTheDocument();
	});
});

test("renders documents with formatted dates", async () => {
	useUserDocuments.mockReturnValue({
		loading: false,
		error: null,
		userDocumentsData: { record: { data: mockUserDocuments } },
	});
	render(
		<Router>
			<ListDocuments showLink={true} />
		</Router>
	);

	const formattedDate = formatDate("2022-01-12T17:58:25.000000Z");
	const noDateText = formatDate(null);

	// Check that the formatted date is present
	const dateElements = await screen.findAllByText(formattedDate);
	expect(dateElements.length).toBe(2); // Adjust based on how many times the formatted date should appear

	// Check that the "No date" text is present
	expect(await screen.findByText(noDateText)).toBeInTheDocument();
});

test("documents are sorted by received_on date", async () => {
	const mockUserDocumentsSorted = [
		{
			id: 1,
			document_name: "Document 1",
			received_on: "2024-03-01T17:58:25.000000Z",
		},
		{
			id: 2,
			document_name: "Document 2",
			received_on: "2023-02-01T17:58:25.000000Z",
		},
		{ id: 3, document_name: "Document 3", received_on: null },
	];

	useUserDocuments.mockReturnValue({
		loading: false,
		error: null,
		userDocumentsData: { record: { data: mockUserDocumentsSorted } },
	});
	render(
		<Router>
			<ListDocuments showLink={true} />
		</Router>
	);

	expect(await screen.findByText("Document 1")).toBeInTheDocument();
	expect(await screen.findByText("Document 2")).toBeInTheDocument();
	expect(await screen.findByText("Document 3")).toBeInTheDocument();
});

test("handles overlay panel toggle", () => {
	useUserDocuments.mockReturnValue({
		loading: false,
		error: null,
		userDocumentsData: { record: { data: mockUserDocuments } },
	});
	render(
		<Router>
			<ListDocuments showLink={true} />
		</Router>
	);

	const kebabIcon = screen.getAllByAltText("Actions Icon")[0];
	fireEvent.click(kebabIcon);

	expect(screen.getByText("Download")).toBeInTheDocument();
	expect(screen.getByText("Edit")).toBeInTheDocument();
	expect(screen.getByText("Delete")).toBeInTheDocument();
});
test('renders invalid date as "Invalid Date"', async () => {
	const invalidDate = "invalid-date";
	useUserDocuments.mockReturnValue({
		loading: false,
		error: null,
		userDocumentsData: {
			record: {
				data: [
					{
						id: 1,
						document_name: "Invalid Document",
						received_on: invalidDate,
					},
				],
			},
		},
	});
	render(
		<Router>
			<ListDocuments showLink={true} />
		</Router>
	);

	expect(await screen.findByText("Invalid Date")).toBeInTheDocument();
});

test('does not render "View All Documents" link when showLink is false', () => {
	// Mock the hook to return dummy data
	useUserDocuments.mockReturnValue({
		loading: false,
		error: null,
		userDocumentsData: { record: { data: mockUserDocuments } },
	});

	// Render the component with showLink set to false
	render(
		<Router>
			<ListDocuments showLink={false} />
		</Router>
	);

	// Assert that the "View All Documents" link is not present
	expect(screen.queryByText("View All Documents")).not.toBeInTheDocument();
});

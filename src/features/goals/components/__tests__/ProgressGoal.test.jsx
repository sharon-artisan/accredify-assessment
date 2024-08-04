import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { MemoryRouter } from 'react-router';
import ProgressGoal from "../ProgressGoal.jsx";
import { useUserGoals } from "../../hooks/useUserGoals.js";
jest.mock("../../hooks/useUserGoals.js");

const mockUserGoals = [
	{
		id: 1,
		name: "Account Manager",
		description:
			"Manage maintain and grow the sales and relationships with a specific customer or set of accounts. This includes in-depth customer engagement relationship-building and provision of quality solutions and service to address customers' needs efficiently and generate revenue",
		type: "technical",
		progress: 65,
	},
];

describe("ProgressGoal", () => {
	test("renders without crashing", () => {
		useUserGoals.mockReturnValue({
			loading: false,
			error: null,
			userGoalsData: { record: { data: mockUserGoals } },
		});

		render(
			<Router>
				<ProgressGoal />
			</Router>
		);
	});

	test("renders loading spinner while data is being fetched", () => {
		useUserGoals.mockReturnValue({
			loading: true,
			error: null,
			userGoalsData: { record: { data: [] } },
		});
		render(
			<Router>
				<ProgressGoal />
			</Router>
		);
		expect(screen.getByRole("status")).toBeInTheDocument();
	});

	test("renders loading state", () => {
		useUserGoals.mockReturnValue({
			loading: true,
			error: null,
			userGoalsData: null,
		});

		render(
			<Router>
				<ProgressGoal />
			</Router>
		);
		expect(screen.getByRole("status")).toBeInTheDocument();
	});
	test("renders error state", () => {
		useUserGoals.mockReturnValue({
			loading: false,
			error: { message: "Error fetching user data" },
			userGoalsData: null,
		});

		render(
			<Router>
				<ProgressGoal />
			</Router>
		);
		expect(
			screen.getByText(/Error fetching user data/i)
		).toBeInTheDocument();
	});

	test("renders goals", async () => {
        useUserGoals.mockReturnValue({
			loading: false,
			error: null,
			userGoalsData: { record: { data: mockUserGoals } },
		});
		render(
			<Router>
				<ProgressGoal />
			</Router>
		);
		expect(await screen.findByText("Account Manager")).toBeInTheDocument();
		expect(await screen.findByText("65%")).toBeInTheDocument();
	});

    test("renders no goals message when no goals are available", () => {
        useUserGoals.mockReturnValue({
            loading: false,
            error: null,
            userGoalsData: { record: { data: [] } },
        });
    
        render(
            <Router>
                <ProgressGoal />
            </Router>
        );
        expect(screen.getByText("No goals available")).toBeInTheDocument();
    });
   
    test("renders View Insights link when showLink is true", () => {
        useUserGoals.mockReturnValue({
            loading: false,
            error: null,
            userGoalsData: { record: { data: mockUserGoals } },
        });
    
        render(
            <Router>
                <ProgressGoal showLink={true} />
            </Router>
        );
        expect(screen.getByText("View Insights")).toBeInTheDocument();
    });

    test("renders goal details when showDetails is true", () => {
        useUserGoals.mockReturnValue({
            loading: false,
            error: null,
            userGoalsData: { record: { data: mockUserGoals } },
        });
    
        render(
            <Router>
                <ProgressGoal showDetails={true} />
            </Router>
        );
    
        expect(screen.getByText("Manage maintain and grow the sales and relationships with a specific customer or set of accounts. This includes in-depth customer engagement relationship-building and provision of quality solutions and service to address customers' needs efficiently and generate revenue")).toBeInTheDocument();
        expect(screen.getByText("technical")).toBeInTheDocument();
    });
    
    test("renders CircularProgressbar with correct value", () => {
        useUserGoals.mockReturnValue({
            loading: false,
            error: null,
            userGoalsData: { record: { data: mockUserGoals } },
        });
    
        render(
            <Router>
                <ProgressGoal />
            </Router>
        );
    
        // Assuming CircularProgress is correctly imported and used
        expect(screen.getByText("65%")).toBeInTheDocument();
    });

    test("navigates to /goals when View Insights link is clicked", () => {
        useUserGoals.mockReturnValue({
            loading: false,
            error: null,
            userGoalsData: { record: { data: mockUserGoals } },
        });
    
        render(
            <MemoryRouter>
                <ProgressGoal showLink={true} />
            </MemoryRouter>
        );
    
        const link = screen.getByText("View Insights");
        expect(link.getAttribute('href')).toBe('/goals');
    });
    
    
});

import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Home from "../Home.jsx";
import { useUserData } from "../../hooks/useUserData.js";

jest.mock("../../hooks/useUserData.js");

const mockUserData = [
	{
		id: 1,
		name: "John Smith",
		current_organisation: {
			id: 2,
			is_personal: false,
		},
	},
];
describe("Home", () => {
	test("renders without crashing", () => {
		useUserData.mockReturnValue({
			loading: false,
			error: null,
			userData: { record: { data: mockUserData } },
		});

		render(
			<Router>
				<Home />
			</Router>
		);
	});

	test("renders loading spinner while data is being fetched", () => {
		useUserData.mockReturnValue({
			loading: true,
			error: null,
			userData: { record: { data: [] } },
		});
		render(
			<Router>
				<Home />
			</Router>
		);
		expect(screen.getByRole("status")).toBeInTheDocument();
	});

	test("renders loading state", () => {
		useUserData.mockReturnValue({
			loading: true,
			error: null,
			userData: { record: { data: [] } },
		});
		render(
			<Router>
				<Home />
			</Router>
		);
		expect(screen.getByRole("status")).toBeInTheDocument();
	});

	test("renders error state", () => {
		useUserData.mockReturnValue({
			loading: false,
			error: { message: "Error fetching user data" },
			userData: null,
		});
		render(
			<Router>
				<Home />
			</Router>
		);
		expect(
			screen.getByText(/Error fetching user data/i)
		).toBeInTheDocument();
	});

    test("displays correct description when isPersonal is true", () => {
        useUserData.mockReturnValue({
          userData: {
            record: {
              data: {
                name: "Jane Smith",
                current_organisation: {
                  is_personal: true,
                },
              },
            },
          },
          loading: false,
          error: null,
        });
    
        render(
          <Router>
            <Home />
          </Router>
        );
    
        expect(screen.getByText("Manage your documents")).toBeInTheDocument();
      });
});

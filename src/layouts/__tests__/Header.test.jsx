// Header.test.jsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Header from "../Header.jsx"; // Adjust the path accordingly
import { useUserData } from "../../hooks/useUserData.js";
import { formatInitials } from "../../utils/formatInitials.js";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../../hooks/useUserData.js", () => ({
	useUserData: jest.fn(),
}));

jest.mock("../../utils/formatInitials.js", () => ({
	formatInitials: jest.fn(),
}));

describe("Header Component", () => {
	beforeEach(() => {
		// Mock user data
		useUserData.mockReturnValue({
			userData: {
				record: {
					data: {
						name: "John Doe",
					},
				},
			},
		});

		// Mock the initials
		formatInitials.mockReturnValue("JD");
	});

	test("should render user avatar and name correctly", () => {
		render(
			<Router>
				<Header />
			</Router>
		);

		expect(screen.getByText("John Doe")).toBeInTheDocument();
		expect(screen.getByText("JD")).toBeInTheDocument();
	});

	test("should toggle panel visibility when user avatar is clicked", () => {
		render(
			<Router>
				<Header />
			</Router>
		);

		const avatar = screen.getByText("JD");
		fireEvent.click(avatar);

		expect(screen.getByText("Recipient")).toBeInTheDocument();
		expect(screen.getByText("Log out")).toBeInTheDocument();
	});

    test('should navigate to login page when log out link is clicked', async () => {
        render(
          <Router>
            <Header />
          </Router>
        );
    
        const avatar = screen.getByText('JD');
        fireEvent.click(avatar);
    
        await waitFor(() => {
          const logoutLink = screen.getByText('Log out').closest('a');
          expect(logoutLink).toHaveAttribute('href', '/login');
        });
    
        fireEvent.click(screen.getByText('Log out'));
    
        // Check if the navigation occurred
        await waitFor(() => {
          expect(window.location.pathname).toBe('/login');
        });
      });
});

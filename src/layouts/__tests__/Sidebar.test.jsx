import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import Sidebar from '../Sidebar.jsx'; // Adjust the path accordingly
import userJson from '../../data/user.json';
import { formatInitials } from '../../utils/formatInitials.js';

// Mock the formatInitials utility function
jest.mock('../../utils/formatInitials.js', () => ({
  formatInitials: jest.fn(),
}));

describe('Sidebar Component', () => {
  beforeEach(() => {
    // Mock user data
    formatInitials.mockReturnValue('JD');
  });

  test('should render the correct avatar based on isPersonal flag', () => {
    // Render the Sidebar with Router
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    const isPersonal = userJson.data.current_organisation.is_personal;

    if (!isPersonal) {
        expect(screen.getByLabelText('Default avatar')).toBeInTheDocument();
      } else {
        // Check for the presence of the initials avatar
        expect(screen.getByLabelText('Avatar with initials')).toBeInTheDocument();

      }
  });

  test('should render sidebar navigation links', () => {
    // Render the Sidebar with Router
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    // Check that each NavLink renders correctly
    const sidebarItems = [
      { id: 1, label: 'Home', route: '/home' },
      { id: 2, label: 'Documents', route: '/documents' },
      { id: 3, label: 'Goals', route: '/goals' },
      { id: 4, label: 'Verify', route: '/verify' },
      { id: 5, label: 'Settings', route: '/settings' },
    ];

    sidebarItems.forEach((item) => {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', item.route);
    });
  });

  test('should apply active class to the current route', () => {
    // Render the Sidebar with Router and set initial route
    render(
      <Router initialEntries={['/home']}>
        <Sidebar />
      </Router>
    );

    // Check if the "Home" NavLink has the active class
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toHaveClass('icon-active');
  });
});
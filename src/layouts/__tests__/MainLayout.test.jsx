import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from '../MainLayout.jsx'; // Adjust path if needed

test('should render Sidebar, Header, and Outlet correctly', () => {
  render(
    <Router>
      <MainLayout />
    </Router>
  );

  expect(screen.getByRole('sidebar')).toBeInTheDocument(); 

  expect(screen.getByRole('header')).toBeInTheDocument(); 

  expect(screen.getByRole('detail')).toBeInTheDocument(); 
});

import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginLayout from '../LoginLayout.jsx'; 

test('should render Outlet correctly', () => {
  render(
    <Router>
      <LoginLayout />
    </Router>
  );

  expect(screen.getByRole('login-layout')).toBeInTheDocument();
});

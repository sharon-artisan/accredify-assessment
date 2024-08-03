import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useUserData } from '../../hooks/useUserData.js';
import { getUser } from '../../services/dataServices.js';

// Mock the getUser function
jest.mock('../../services/dataServices.js');

const TestComponent = () => {
    const { userData, loading, error } = useUserData();
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!userData) return <div>No user data</div>;
  
    return <div>User: {userData.name}</div>;
  };

  describe('useUserData', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    test('should set userData and loading to false when data is fetched successfully', async () => {
      // Arrange
      const mockData = { name: 'John Doe' };
      getUser.mockResolvedValue(mockData);
  
      // Act
      render(<TestComponent />);
  
      // Assert
      await waitFor(() => {
        expect(screen.getByText('User: John Doe')).toBeInTheDocument();
      });
    });
  
    test('should set error and loading to false when data fetch fails', async () => {
      // Arrange
      const mockError = new Error('Failed to fetch');
      getUser.mockRejectedValue(mockError);
  
      // Act
      render(<TestComponent />);
  
      // Assert
      await waitFor(() => {
        expect(screen.getByText(`Error: ${mockError.message}`)).toBeInTheDocument();
      });
    });
  });
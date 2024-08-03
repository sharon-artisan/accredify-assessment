// Import necessary functions
import { getUser, getUserCareerGoals, getUserDocuments } from '../dataServices.js';

// Mock the global fetch function
global.fetch = jest.fn();

describe('dataServices', () => {
  beforeEach(() => {
    // Clear previous mock calls and instances
    fetch.mockClear();
  });

  test('getUser should fetch user data correctly', async () => {
    const mockResponse = { name: 'John Doe' };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await getUser();
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith('https://api.jsonbin.io/v3/b/66a878a5e41b4d34e4190c12', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });

  test('getUserCareerGoals should fetch user career goals correctly', async () => {
    const mockResponse = { goals: ['Developer', 'Manager'] };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await getUserCareerGoals();
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith('https://api.jsonbin.io/v3/b/66a87a3ae41b4d34e4190ccc', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });

  test('getUserDocuments should fetch user documents correctly', async () => {
    const mockResponse = { documents: ['Resume', 'Cover Letter'] };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await getUserDocuments();
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith('https://api.jsonbin.io/v3/b/66a87a90ad19ca34f88ecd65', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  });

  test('should handle errors correctly', async () => {
    // Mock fetch to return an error response
    fetch.mockResolvedValueOnce({
      ok: false,
      json: jest.fn().mockResolvedValueOnce({}),
    });

    // Test getUser
    await expect(getUser()).rejects.toThrow('Network response was not ok');

    // Test getUserCareerGoals
    await expect(getUserCareerGoals()).rejects.toThrow('Network response was not ok');

    // Test getUserDocuments
    await expect(getUserDocuments()).rejects.toThrow('Network response was not ok');
  });
});
import { getUserCareerGoals } from "../goalsServices.js";

global.fetch = jest.fn();

describe("goalServices", () => {
    beforeEach(() => {
        // Clear previous mock calls and instances
        fetch.mockClear();

    });

    test("getUserCareerGoals should fetch user career goals correctly", async () => {
        const mockResponse = { goals: ["Developer", "Manager"] };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        const result = await getUserCareerGoals();
        expect(result).toEqual(mockResponse);
    });

    test("should handle errors correctly", async () => {
        // Mock fetch to return an error response
        fetch.mockResolvedValueOnce({
            ok: false,
            json: jest.fn().mockResolvedValueOnce({}),
        });

        // Test getUserGoals
        await expect(getUserCareerGoals()).rejects.toThrow("Network response was not ok");
    });
})
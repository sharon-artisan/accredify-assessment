import { getUserDocuments } from "../documentsServices.js";

// Mock the global fetch function
global.fetch = jest.fn();

describe("documentsServices", () => {
    beforeEach(() => {
        // Clear previous mock calls and instances
        fetch.mockClear();
    });

    test("getUserDocuments should fetch user documents correctly", async () => {
        const mockResponse = { documents: ["Resume", "Cover Letter"] };
        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        const result = await getUserDocuments();
        expect(result).toEqual(mockResponse);
        expect(fetch).toHaveBeenCalledWith("https://api.jsonbin.io/v3/b/66a87a90ad19ca34f88ecd65", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
    });

    test("should handle errors correctly", async () => {
        // Mock fetch to return an error response
        fetch.mockResolvedValueOnce({
            ok: false,
            json: jest.fn().mockResolvedValueOnce({}),
        });

        // Test getUserDocuments
        await expect(getUserDocuments()).rejects.toThrow("Network response was not ok");
    });
});
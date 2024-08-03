import { formatDate } from "../formatDate.js";

describe("formatDate", () => {
	test("should format a valid date string correctly", () => {
		// Arrange
		const dateString = "2024-08-01T12:00:00Z";
		const expectedOutput = "1 August 2024"; // Adjust based on locale

		// Act
		const result = formatDate(dateString);

		// Assert
		expect(result).toBe(expectedOutput);
	});

	test('should return "No date" for empty or null input', () => {
		// Act & Assert
		expect(formatDate("")).toBe("No date");
		expect(formatDate(null)).toBe("No date");
	});

	test('should return "Invalid Date" for invalid date strings', () => {
		// Arrange
		const invalidDateString = "invalid-date-string";

		// Act
		const result = formatDate(invalidDateString);

		// Assert
		expect(result).toBe("Invalid Date");
	});

	test('should return "Invalid Date" for incorrect date format', () => {
		// Arrange
		const incorrectDateFormat = "2024-02-30"; // Invalid date

		// Act
		const result = formatDate(incorrectDateFormat);

		// Assert
		expect(result).toBe("Invalid Date");
	});
});

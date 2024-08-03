import { formatInitials } from "../formatInitials.js";

describe("formatInitials", () => {
	test("should return the initial of a single name (e.g., James, Peter)", () => {
		expect(formatInitials("James")).toBe("J");
		expect(formatInitials("Peter")).toBe("P");
		expect(formatInitials("Sarah")).toBe("S");
	});

	test("should return the initials of multiple names (e.g., Gerald Goh, Marissa Lee)", () => {
		expect(formatInitials("Gerald Goh")).toBe("GG");
		expect(formatInitials("Marissa Lee")).toBe("ML");
		expect(formatInitials("Sarah Connor")).toBe("SC");
	});

	test("should handle names with multiple parts correctly (e.g., Gerald Goh, Marissa Lee)", () => {
		expect(formatInitials("Gerald Goh")).toBe("GG");
		expect(formatInitials("Marissa Lee")).toBe("ML");
	});

	test('should return an empty string for empty or null input (e.g., "", null)', () => {
		expect(formatInitials("")).toBe("");
		expect(formatInitials(null)).toBe("");
	});

	test("should handle names with mixed case correctly (e.g., James smith, MARISSA LEE)", () => {
		expect(formatInitials("james smith")).toBe("JS");
		expect(formatInitials("MARISSA LEE")).toBe("ML");
	});

	test("should handle single-character names correctly (e.g., A, B)", () => {
		expect(formatInitials("A")).toBe("A");
		expect(formatInitials("B")).toBe("B");
	});
});

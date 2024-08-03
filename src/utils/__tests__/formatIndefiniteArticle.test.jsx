import { formatIndefiniteArticle } from "../formatIndefiniteArticle.js";

describe("formatIndefiniteArticle", () => {
	test('should return "an" for words starting with vowels (e.g., Actuary, Accountant)', () => {
		expect(formatIndefiniteArticle("Actuary")).toBe("an");
		expect(formatIndefiniteArticle("Accountant")).toBe("an");
		expect(formatIndefiniteArticle("Engineer")).toBe("an");
	});

	test('should return "a" for words starting with consonants (e.g., Tax Manager, Software Developer)', () => {
		expect(formatIndefiniteArticle("Tax Manager")).toBe("a");
		expect(formatIndefiniteArticle("Software Developer")).toBe("a");
		expect(formatIndefiniteArticle("Project Manager")).toBe("a");
	});

	test('should return an empty string for empty or null input (e.g., "", null)', () => {
		expect(formatIndefiniteArticle("")).toBe("");
		expect(formatIndefiniteArticle(null)).toBe("");
	});

	test('should return "an" for words starting with lowercase vowels (e.g., actuary, accountant)', () => {
		expect(formatIndefiniteArticle("actuary")).toBe("an");
		expect(formatIndefiniteArticle("accountant")).toBe("an");
	});

	test("should handle uppercase input correctly (e.g., Actuary, Tax Manager)", () => {
		expect(formatIndefiniteArticle("Actuary")).toBe("an");
		expect(formatIndefiniteArticle("Tax Manager")).toBe("a");
	});

	test('should return "a" for words starting with non-alphabetic characters (e.g., 1st Analyst, $specialist)', () => {
		expect(formatIndefiniteArticle("1st Analyst")).toBe("a");
		expect(formatIndefiniteArticle("$specialist")).toBe("a");
	});
});

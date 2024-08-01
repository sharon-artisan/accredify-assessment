export function formatDate(dateString) {
	if (!dateString) return "No date";
	try {
		const options = { day: "numeric", month: "long", year: "numeric" };
		return new Date(dateString).toLocaleDateString(undefined, options);
	} catch {
		return "Invalid Date";
	}
}

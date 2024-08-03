/*
	This is to format date in different formats and can be used throughout the project
*/
export function formatDate(dateString) {
	if (!dateString) return "No date";
  
	const date = new Date(dateString);
  
	if (isNaN(date.getTime()) || date.toISOString().split('T')[0] !== dateString.split('T')[0]) {
	  return "Invalid Date";
	}
  
	try {
	  const options = { day: "numeric", month: "long", year: "numeric" };
	  return date.toLocaleDateString('en-GB', options); 
	} catch {
	  return "Invalid Date";
	}
  }
  
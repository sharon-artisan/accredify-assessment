// Fetches user career goals from the API
function getUserCareerGoals() {
    return fetch('https://api.jsonbin.io/v3/b/66a87a3ae41b4d34e4190ccc', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if (!res.ok) {
            // Throw an error if response is not ok
            throw new Error('Network response was not ok');
        }
        return res.json(); // Return the JSON response
    });
}

export { getUserCareerGoals };
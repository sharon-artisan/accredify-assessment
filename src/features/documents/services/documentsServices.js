// Fetches user documents from the API
function getUserDocuments() {
    return fetch('https://api.jsonbin.io/v3/b/66a87a90ad19ca34f88ecd65', {
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

export { getUserDocuments }
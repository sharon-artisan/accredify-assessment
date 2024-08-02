/*
    Here is where I list down all my third-party API calls
*/
function getUser() {
    return fetch('https://api.jsonbin.io/v3/b/66a878a5e41b4d34e4190c12', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

function getUserCareerGoals() {
    return fetch('https://api.jsonbin.io/v3/b/66a87a3ae41b4d34e4190ccc', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

function getUserDocuments() {
    return fetch('https://api.jsonbin.io/v3/b/66a87a90ad19ca34f88ecd65', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

export { getUser, getUserCareerGoals, getUserDocuments };
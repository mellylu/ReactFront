export default {
    getAll(token) {
        return fetch(`http://localhost:5000/api/v1/mangas`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                "authorization":token,
            },
        }).then(res => res.json())
    },
}

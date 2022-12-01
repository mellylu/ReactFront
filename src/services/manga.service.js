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
    putManga(manga, id) {
        return fetch('http://localhost:3131/api/v1/mangas/' + id, {
            method: "PUT",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(manga),
        })
        .then(res => res.json())
    },
}

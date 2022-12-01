export default {
    login(user) {
        return fetch(`http://localhost:5000/api/v1/users/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then(res => res.json())
    },
    register(user) {
        return fetch(`http://localhost:5000/api/v1/users/register`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then(res => res.json())
    },
    sendEmailToResetPassword(email) {
        return fetch(`http://localhost:5000/api/v1/token/sendEmailToResetPassword`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(email),
        }).then(res => res.json())
    },
    formResetPassword(token) {
        return fetch(`http://localhost:5000/api/v1/token/formResetPassword`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: token,
        }).then(res => res.json())
    },
}

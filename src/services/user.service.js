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
        const body = { token: token }
        return fetch(`http://localhost:5000/api/v1/token/formResetPassword`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(body),
        }).then(res => res.json())
    },
    update(userId, password) {
        console.log("userId")
        console.log(userId)
        return fetch("http://localhost:5000/api/v1/users/" + userId, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(password),
        }).then(res => res.json())
    },
}

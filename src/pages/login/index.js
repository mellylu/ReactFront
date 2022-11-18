import React, { useState, useEffect } from 'react'

import Input from '../../components/input'

import userService from '../../services/user.service'

const Login = () => {
    const [user, setUser] = useState({})

    const handleSubmit = e => {
        e.preventDefault()
        userService
            .login(user)
            .then(data => {
                localStorage.setItem('token', data.token)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1 className="text-center">SearchToLearn</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <Input
                    label="Identifiant"
                    placeholder="john.doe@pinotes.com"
                    size="large"
                    className="mb-5"
                    required={true}
                    onChange={e => {
                        setUser({ ...user, email: e.target.value })
                    }}
                />
                <Input
                    label="Mot de passe"
                    type="password"
                    placeholder="**********"
                    size="large"
                    className="mb-5"
                    required={true}
                    onChange={e => {
                        setUser({ ...user, password: e.target.value })
                    }}
                />
                <input className="btn btn-red" width="100" type="submit" value="S'identifier" />
            </form>
        </div>
    )
}

export default Login


import React, { useState } from 'react'
import styled from 'styled-components'

import { FiEye, FiEyeOff } from 'react-icons/fi'

const Input = ({label, type, id, value, placeholder, required, onChange}) => {
    const [hide, setHide] = useState(true)

    const hidePass = e => {
        e.preventDefault()
        if (hide) {
            document.getElementById(label ?? '')?.setAttribute('type', 'text')
            setHide(false)
        } else {
            document.getElementById(label ?? '')?.setAttribute('type', 'password')
            setHide(true)
        }
    }

    return (
        <div //className={`relative flex flex-col ${props.className && props.className}`}
        >
            {label && (
                <div //className="flex justify-between items-center mb-2"
                >
                    <label htmlFor={label} //className="mb-1 text-left cursor-pointer"
                    >
                        {label}
                    </label>
                </div>
            )}
            <InputForm
                type={type}
                id={label}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
            />
            {type === 'password' && (
                <button
                    //className="absolute right-2 sm:right-4 bottom-3 sm:bottom-5 text-slate-800"
                    type="button"
                    onClick={hidePass}
                >
                    {hide ? <FiEyeOff /> : <FiEye />}
                </button>
            )}
        </div>
    )
}

const InputForm = styled.input`

`



export default Input

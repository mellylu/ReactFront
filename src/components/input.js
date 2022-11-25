import React, { useState } from 'react'
import styled from 'styled-components'

import { FiEye, FiEyeOff } from 'react-icons/fi'

const Input = ({label, type, value, placeholder, required, onChange}) => {
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
        <div>
            {label && (
                <div //className="flex justify-between items-center mb-2"
                >
                    <LabelInput htmlFor={label} //className="mb-1 text-left cursor-pointer"
                    >
                        {label}
                    </LabelInput>
                </div>
            )}
            <DivInput>
            <TextInputForm 
                type={type}
                id={label}
                value={value}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                />
            <IconInput>{type === 'password' && (
                <button
                    type="button"
                    onClick={hidePass}
                >
                    {hide ? <FiEyeOff /> : <FiEye />}
                </button>
            )}
            </IconInput>
            </DivInput>
        </div>
    )
}

const DivInput = styled.div`
    flex: auto;
    display: flex;
    flex-direction: row;
    `
const TextInputForm = styled.input`
    border-radius: 5px;
    background-color: #fefee0;
    color: black;
    padding: 2%;
    margin-top: 15px;
    margin-bottom: 15px;
`

const LabelInput = styled.label`
    color: #fefee0;
`

const IconInput = styled.div`
    flex: auto;
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
`

export default Input

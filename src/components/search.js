import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import styled from 'styled-components'

import Input from "./input"



const SearchBar = ({ search, setSearch }) => {
    return (
        <Div>
            <AiOutlineSearch color="fefee0" size="20px" />
            <Input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search note"
            />
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    align-items: center;
    
    `
export default SearchBar

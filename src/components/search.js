import React from "react"
import { AiOutlineSearch } from "react-icons/ai"

import Input from "./input"



const SearchBar = ({ search, setSearch }) => {
    return (
        <div>
            <AiOutlineSearch size="20px" />
            <Input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search note"
            />
        </div>
    )
}

export default SearchBar

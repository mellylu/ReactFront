import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

import Input from './input';
import SearchBar from './search';

const Headermenu = () => {
    const [search, setSearch] = useState("")
    const [manga, setManga] = useState([])//on va récupérer tous les mangas
    const [nameManga, setNameManga] = useState([])//va être le résultat après la recherche va contenir seulement les mangas en fonction de la recherche

    useEffect(() => {
        setNameManga(manga?.filter((note) => note.name?.includes(search)))
    }, [search])
    return (
        <div>
            <nav>
                <Ul>
                    <Li>
                            <A>
                            Home
                            </A>
                    </Li>
                    
                </Ul>
            </nav>
        </div>
    );
}

const Ul=styled.ul`
display: flex;
        list-style: none;
        padding-left: 0px;
`
const Li=styled.li`
    margin: 0px 10px;
`

const A=styled.a`
    color:white;
`



export default Headermenu;

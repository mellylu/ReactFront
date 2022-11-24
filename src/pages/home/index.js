import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import { CgSmileSad } from "react-icons/cg"

import Titlepage from '../../components/titlepage';
import Image from '../../components/image';
import SearchBar from '../../components/search';
import Headermenu from '../../components/main';

import mangaService from '../../services/manga.service';

import {BsFillBucketFill} from "react-icons/bs";

const Home = () => {
    const [mangas, setMangas] = useState([]);
    const [search, setSearch] = useState("")
    const [filterManga, setFilterManga] = useState([])//va être le résultat après la recherche va contenir seulement les mangas en fonction de la recherche

    useEffect(() => {
        const token = localStorage.getItem("token");
        mangaService
            .getAll(token)
            .then((data) => {
                setMangas(data.manga);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        setFilterManga(mangas?.filter((manga) => manga.name?.includes(search)))
    }, [search])

    return (
        <Div>
            <Titlepage title="Liste de mangas" />
        

            <SearchBar search={search} setSearch={setSearch} />
                {search.length > 0 ? (
                    <div>
                        {filterManga.length > 0 ? (
                            filterManga?.map((element) => 
                            <>
                                <DivElement key={element._id}>
                                    <Image path={element.image} description="image manga filtrée" />
                                    <P>{element.name}</P>
                                </DivElement>
                        </> )
                        ) : (
                            <div>
                                Aucune note trouvée <CgSmileSad size="20px" />
                            </div>
                        )}
                    </div>
                ): <DivEl>
                {
                    mangas.map((element) => (
                        <DivElement key={element._id}>
                            <Image styleImage={{ width: '200px' }} path={element.image} description="image manga">
                            </Image>
                            <P>{element.name}</P>
                        </DivElement>
                    ))
                }
                </DivEl>
                }
            
        </Div>
    );
};

const DivEl = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    margin-left:5%;
    margin-right:5%;
    margin-top:60px;
   
`

const DivElement = styled.div`
margin:auto;
background-color: black;
   
`
const ImageElement = styled.img`

width: 200px;
height:130px;
text-align: center;
border-radius: 5px;
margin : 20px 10px 30px;
`

const Div = styled.div`
  background-color: #303030;
   
`

const P = styled.p`
  color: #fefee0;
  text-transform : uppercase;
  text-align: center;
   
`
export default Home;
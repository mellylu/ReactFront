import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components'
import { CgSmileSad } from "react-icons/cg"
import { BiLogInCircle } from "react-icons/bi";

import Titlepage from '../../components/titlepage';
import Image from '../../components/image';
import SearchBar from '../../components/search';
import Headermenu from '../../components/main';

import mangaService from '../../services/manga.service';

import {BsFillBucketFill} from "react-icons/bs";
import CartContext, { CartContextProvider } from '../../context/CartContext';
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [mangas, setMangas] = useState([]);
    const [search, setSearch] = useState("")
    const [filterManga, setFilterManga] = useState([])//va être le résultat après la recherche va contenir seulement les mangas en fonction de la recherche
    const navigate = useNavigate();

    //const { cart, setCart, addItem} = useContext(CartContext)
    const {addItem, setCart, cart} = useContext(CartContext)
    //console.log(context)
    if (localStorage.getItem('token') === null){
        navigate('/')
    }
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

    const panier = (e) => {
        addItem(e)
    }

    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <Div>
            <DivMain>
                <Li><Titlepage title="Liste de mangas" /></Li>
                <Li><SearchBar search={search} setSearch={setSearch} /></Li>
                <Li><BiLogInCircle height="100px" color="fefee0" onClick={() => logout()} /></Li>
            </DivMain>
            {search.length > 0 ? (
                <DivEl>
                    {filterManga.length > 0 ? (
                        filterManga?.map((element) => 
                        <>
                            <DivElement key={element._id}>
                                <Image styleImage={{ width: '200px' }} path={element.image} description="image manga filtrée" />
                                <P>{element.name}</P>
                            </DivElement>
                    </> )
                    ) : (
                        <div>
                            Aucune note trouvée <CgSmileSad size="20px" />
                        </div>
                    )}
                </DivEl>
            ): <DivEl>
            {
                mangas.map((element) => (
                    <DivElement key={element._id}>
                        <Image styleImage={{ width: '200px', padding: "6px", margin:"10px" }} path={element.image} description="image manga">
                        </Image>
                        <P>{element.name}</P>
                        <P>{element.price} $ <button onClick={()=> 
                                panier(element)}>Acheter</button>
                        </P>
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

const DivMain = styled.div`
display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
   
`

const Li = styled.div`
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
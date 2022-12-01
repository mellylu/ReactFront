import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { CgSmileSad } from "react-icons/cg"
import { BiLogInCircle, BiShoppingBag } from "react-icons/bi"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Titlepage from "../../components/titlepage"
import Image from "../../components/image"
import SearchBar from "../../components/search"
import Headermenu from "../../components/main"

import mangaService from "../../services/manga.service"

import { BsFillBucketFill } from "react-icons/bs"
import CartContext from "../../context/CartContext"
import Button from "../../components/button"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const [mangas, setMangas] = useState([])
    const [search, setSearch] = useState("")
    const [filterManga, setFilterManga] = useState([]) //va être le résultat après la recherche va contenir seulement les mangas en fonction de la recherche
    const navigate = useNavigate()

    //const { cart, setCart, addItem} = useContext(CartContext)
    const { addItem, setCart, cart } = useContext(CartContext)
    //console.log(context)
    if (localStorage.getItem("token") === null) {
        navigate("/")
    }
    useEffect(() => {
        const token = localStorage.getItem("token")
        mangaService
            .getAll(token)
            .then(data => {
                setMangas(data.manga)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setFilterManga(mangas?.filter(manga => manga.name?.includes(search)))
    }, [search])

    const panier = e => {
        addItem(e)
    }

    useEffect(() => {
        console.log(cart)
    }, [cart])

    const logout = () => {
        localStorage.clear()
        window.location.href = "/"
    }

    return (
        <Div>
            <DivMain>
                <Li>
                    <Titlepage title="Liste de mangas" />
                </Li>
                <Li>
                    <BiShoppingBag color="fefee0" size={20} onClick={() => navigate("/Cart")} />
                </Li>
                <Li>
                    <SearchBar search={search} size={20} setSearch={setSearch} />
                </Li>
                <Li>
                    <BiLogInCircle color="fefee0" size={20} onClick={() => logout()} />
                </Li>
            </DivMain>
            {search.length > 0 ? (
                <DivEl>
                    {filterManga.length > 0 ? (
                        filterManga?.map(element => (
                            <>
                                <DivElement key={element._id}>
                                    <Image
                                        styleImage={{ width: "200px" }}
                                        path={element.image}
                                        description="image manga filtrée"
                                    />
                                    <P>{element.name}</P>
                                    <P>
                                        {element.price} $ |{" "}
                                        <button
                                            onClick={() => {
                                                panier(element)
                                            }}
                                        >
                                            Acheter
                                        </button>
                                    </P>
                                </DivElement>
                            </>
                        ))
                    ) : (
                        <div>
                            Aucun manga trouvé <CgSmileSad size="20px" />
                        </div>
                    )}
                </DivEl>
            ) : (
                <DivEl>
                    {mangas.map(element => (
                        <DivElement key={element._id}>
                            <Image
                                styleImage={{ width: "200px", padding: "6px", margin: "10px" }}
                                path={element.image}
                                description="image manga"
                            ></Image>
                            <P>{element.name}</P>
                            <P>
                                {element.price} $ |{" "}
                                <button
                                    onClick={() => {
                                        panier(element)
                                    }}
                                >
                                    Acheter
                                </button>
                            </P>
                        </DivElement>
                    ))}
                </DivEl>
            )}
        </Div>
    )
}

const DivEl = styled.div`
    display: flex;
    margin-left: 5%;
    margin-right: 5%;
    flex-flow: row wrap;
    margin-top: 60px;
    gap: 4rem;
`

const DivMain = styled.div`
    display: flex;
    align-items: center;
`

const Li = styled.div`
    margin-top: 4%;
    margin-left: 9%;
    margin-right: 8%;
`

const DivElement = styled.div`
    margin: auto;
    background-color: black;
`
const ImageElement = styled.img`
    width: 200px;
    height: 130px;
    text-align: center;
    border-radius: 5px;
    margin: 20px 10px 30px;
`

const Div = styled.div`
    background-color: #303030;
`

const P = styled.p`
    color: #fefee0;
    text-transform: uppercase;
    text-align: center;
`
export default Home

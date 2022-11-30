import React, {useState, useEffect, useContext} from 'react';
import { AiFillDelete, AiFillCaretLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';

import Image from '../../components/image';

import CartContext from '../../context/CartContext';


const Cart = () => {
    const {cart, setCart, clearCart, removeItem} = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0)
    const tableauPrice = []
    const [count, setCount] = useState(0)
    const navigate = useNavigate()
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    const removeElement = (id) => {
        console.log(id)
        removeItem(id)
    }

   

    const totalPriceCart = (el) => {
        setTotalPrice(totalPrice + el)
    }

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    useEffect(() => {
        console.log("debut totalprice doit etre égale à 0")
        console.log(totalPrice);

    })

    useEffect(() => {
        console.log("A chaque fois que totalprice change")
        console.log(totalPrice);
        
    }, [totalPrice])

    return (
        <div>
            <AiFillCaretLeft color='#fefee0' onClick={() => {navigate("/")}}/>
            <table>
               <thead>
                    <tr>
                        <th>Manga</th>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                    </tr>
                </thead> 
                <tbody>
                    {
                        cart?
                            cart.map((element) => (
                                <tr>
                                <td key={element._id}>
                                    <Image styleImage={{ width: '100px', margin:"10px" }} path={element.image} description="image manga">
                                    </Image>
                                </td>
                                <td>{element.name}</td>
                                <td>{element.price} $
                                {tableauPrice.push(element.price)}</td>
                                <td><button onClick={decrement}>-</button>{count}<button onClick={increment}>+</button></td>
                                <td><AiFillDelete onClick={() => removeElement(element._id)}/></td>
                                {}
                                {/* {setTotalPrice(totalPrice + element.price)} */}
                                </tr>
                            )):
                            <td>Votre panier est vide</td>
                        }
                </tbody>
            </table>
            <p>Prix total : {tableauPrice.reduce(reducer)} $</p>
            <Button onClick={() => clearCart()} title="Vider le panier" />
            <Button onClick={() => console.log("Acheter")} title="Acheter" />
        </div>
    );
};

export default Cart;
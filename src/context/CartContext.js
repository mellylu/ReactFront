//context permet de partager les données qui peuvent être utilisé comme globale
import {createContext, useState, useEffect} from 'react'

let cart = typeof window !== "undefined" ? localStorage.getItem('cart') : []

const CartContext = createContext({ //elements à l'initialisation du context
    cart: [], //tableau vide
    removeItem: () => {},
    addItem: () => {},
    clearCart:() => {},//supprimer tout le panier
    count:0
})
export const CartContextProvider = ({ children }) => {
    //composant encapsuler dans toute l'appli en passe children dedans
    console.log("lllllllllllll")    
    const [cart, setCart] = useState(typeof window !== "undefined" ? JSON.parse(localStorage.getItem('cart')) : []);
        
        const count = cart && cart.length || 0;
        const addItem = (item) => {
            console.log("mmmmmmmmmmmm")
            if (cart && cart.length > 0){
                setCart([...cart, item])
            }
            else if(!cart){
                setCart([item]);
            }
            
       
    }
    //prend en argument l'élément qu'on va ajouter, et on utilise le setCart c'est comme un push
    const context = {cart, count, addItem}

    useEffect(()=> {
        localStorage.setItem("cart", JSON.stringify(cart)) //si il y a rien dans mon local storage
        return () => {
            localStorage.setItem("cart", JSON.stringify(cart))
        };
    }, [cart]);

    return (//children equivaut à ce qu'il y a dans App.js
        <CartContext.Provider value={context}> 
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
//context permet de partager les données qui peuvent être utilisé comme globale
import { createContext, useState, useEffect } from "react"
import React from "react"
import { toast } from "react-toastify"

const CartContext = createContext({
    cart: [],
    removeItem: () => {},
    addItem: () => {},
    clearCart: () => {},
    count: 0,
})
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(
        localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    )
    const count = (cart && cart.length) || 0
    const addItem = item => {
        let double = false
        cart.map(el => {
            console.log(el._id !== item._id)
            if (el._id === item._id) {
                double = true
                toast("Le manga a déjà été ajouté au panier", { type: "warning" })
            }
        })
        if (double === false) {
            if (cart && cart.length > 0) {
                console.log("first")
                setCart([...cart, item])
            } else {
                setCart([item])
            }
            toast("Le manga a été ajouté au panier", { type: "success" })
        }
    }

    const removeItem = idItem => {
        setCart(cart.filter(item => item._id !== idItem))
        toast("Le manga a été retiré au panier", { type: "success" })
    }

    const clearCart = () => {
        localStorage.removeItem("cart")
        setCart([])
    }
    const context = { cart, count, addItem, removeItem, clearCart }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
        return () => {
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart])

    return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}

export default CartContext

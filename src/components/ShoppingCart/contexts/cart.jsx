import { createContext, useReducer } from "react";
import {cartReducer, cartInitialState, CART_ACTIONS_TYPES} from '../reducers/cartReducer.js';
import { useCartReducer } from "../hooks/useCartReducer.js";

export const CartContext = createContext();


export function CartProvider({children}) {
    const {state, addToCart, removeFromCart, clearCart} = useCartReducer();

    return (
        <CartContext.Provider value={{cart: state, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
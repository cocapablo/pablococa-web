import React, { useId } from 'react';
import  {CartIcon, ClearCartIcon, RemoveFromCartIcon} from "./Icons.jsx";
import "./Cart.css";
import { useCart } from './hooks/useCart.js';
import CartItem from './CartItem.jsx';

export function Cart() {
    const {cart, clearCart, addToCart} = useCart();
    const cartCheckboxId = useId()
  return (
    <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
            <CartIcon />
        </label>
        <input type='checkbox' id={cartCheckboxId} hidden /> 

        <aside className='cart'>
            <ul>
                {cart.map(product => (
                    <CartItem key={product.id} 
                    addToCart={() => addToCart(product)}
                    {...product} 
                    />
                ))}

            </ul>
            <button 
            style={{backgroundColor: "red"}}
            onClick={clearCart}>
                <ClearCartIcon />   
            </button>
        </aside>
    </>
  )
}


import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";

import React from 'react'
import { useCart } from "./hooks/useCart.js";

export function Products({products}) {
    const { addToCart, removeFromCart, cart} = useCart();
    
    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id);
    }

  return (
    <main className="products">
        <ul>
            {products.slice(0, 10).map(product => {
                const isProductInCart = checkProductInCart(product);

                return (
                <li key={product.id}>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                    />
                    <div>
                        <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <div>
                        <button 
                        style={{backgroundColor: isProductInCart ? "red" : "blue"}}
                        onClick={() => {
                            //Si el producto ya está en el carrito, se llama a removeFromCart
                            //Si no está en el carrito, se llama a addToCart
                            //Se pasa el producto como parámetro
                            isProductInCart ? removeFromCart(product) : addToCart(product);


                        }}
                            
                        >
                        {
                            isProductInCart 
                            ? 
                            <RemoveFromCartIcon />
                            :
                            <AddToCartIcon />
                        }

                            
                        </button>
                    </div>
                </li>
                )
            })}
        </ul>

    </main>
  )

}

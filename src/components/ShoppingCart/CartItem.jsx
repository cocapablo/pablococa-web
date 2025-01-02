import React from 'react'

function CartItem({thumbnail, price, title, quantity, addToCart}) {
  return (
        <li>
            <img src={thumbnail} alt={title} /> 
        
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button 
                style={{backgroundColor: "blue"}}
                onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export default CartItem
import React from 'react'
import { IS_DEVELOPMENT } from '../../config/config.js'
import { useFilters } from './hooks/useFilters.js'
import { useCart } from './hooks/useCart.js';

export function Footer() {
  const {filters} = useFilters();
  const {cart} = useCart();

  return (
    <footer className='footer'>
        <h4>Soy el Footer - <span>@cocapablo</span></h4>
        {
            IS_DEVELOPMENT && "Filters: " + JSON.stringify(filters, null, 2) + " - Cart: " + JSON.stringify(cart, null, 2)
        }
        <h5>Shopping Cart con useContext y useReducer</h5>
    </footer>
  )
}


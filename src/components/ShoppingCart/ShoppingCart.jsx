import React from 'react';
import { useState } from 'react';
import "./ShoppingCart.css";
import { products as initialProducts} from "./mocks/products.json";
import { Products } from "./Products.jsx";
import { Header } from './Header.jsx';

import { useFilters } from "./hooks/useFilters.js";
import { Footer } from './Footer.jsx';
import { Cart } from './Cart.jsx';
import { CartProvider } from './contexts/cart.jsx';

//La API que se utiliza es https://dummyjson.com/products


function ShoppingCart(props) {
  const estilosDiv = {
    backgroundColor: "red",
    color: "white",
    border: "10px inset blue",
    borderRadius: "1%"
  }

  const [products, setProducts] = useState(initialProducts);
  const {filters, filterProducts} = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header ></Header>
      <Cart ></Cart>
      <Products products={filteredProducts}></Products>
      <Footer ></Footer>
    </CartProvider>
  )
}


export default ShoppingCart

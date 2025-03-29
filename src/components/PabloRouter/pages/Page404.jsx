import React from 'react'
import Link from "../Link.jsx";

function Page404() {
  return (
    <>
        <h1>¡Esto no está nada bien!</h1>
        <p>La página que buscás no existe</p>
        <img src="https://http.cat/404" alt="404" />
        <Link to="/">Ir a Home</Link>
    </>
    
  )
}

export default Page404
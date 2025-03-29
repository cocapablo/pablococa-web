import React from 'react';
//import Link from '../Link.jsx';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
        <h1>Home Page</h1>
        <p>Esta es la página de inicio</p>
        <Link to="/about">Ir a About</Link>
    </>
    
  )
}

export default HomePage


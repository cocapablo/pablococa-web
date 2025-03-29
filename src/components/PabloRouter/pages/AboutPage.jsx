import React from 'react';
import "./AboutPage.css";
//import Link from '../Link.jsx';
import { Link } from 'react-router-dom';
import  { usei18n } from "../hooks/usei18n.js";


function AboutPage({routeParams}) {
  const i18n = usei18n(routeParams.lang);  //Esto habría que pasarlo a un context 
  return (
    <>
        <h1>{i18n.title}</h1>
        <div>
            <img className="tw-followCard-avatar"
            src='icono.png' alt='Imagen de Pablo Coca' />
        </div>
        <p>{i18n.description}</p>
        <Link to="/">{i18n.link}</Link>
    </>
    
  )
}

export default AboutPage
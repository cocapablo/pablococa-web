import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer>
        <div className="logo-footer">
            <Link to="/">
                <img src="img/logo.png" alt="Logo de Pablo Coca"></img>
            </Link>    
        </div>

        <div className="redessociales">
            <h6>Seguime en las redes sociales</h6>
            <Link to="https://twitch.tv/cocapablook" target="_blank" rel="noopener noreferrer">
                <img src="img/twitch60x60.png" alt="Logo de Twitch"></img>
            </Link>
            <Link to="https://youtube.com/cocapablo" target="_blank" rel="noopener noreferrer">
                <img src="img/youtube60x60.png" alt="Logo de YouTube"></img>
            </Link>
            <Link to="https://instagram.com/cocapablo" target="_blank" rel="noopener noreferrer">
                <img src="img/instagram60x60.png" alt="Logo de Instagram"></img>
            </Link>
            <Link to="https://facebook.com/pablococastandup" target="_blank" rel="noopener noreferrer">
                <img src="img/facebook60x60.png" alt="Logo de Facebook"></img>
            </Link>
            <Link to="https://www.tiktok.com/@cocapablo" target="_blank" rel="noopener noreferrer">
                <img src="img/tiktok60x60.png" alt="Logo de TikTok"></img>
            </Link>
        </div>
        <div className="derechosreservados">
            Todos los derechos reservados
        </div>
    </footer>
  )
}

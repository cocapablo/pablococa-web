import React from 'react';
import { BUTTONS, NAVIGATION_EVENTS } from './utils/utils.js';


export function navigate(path) {
    window.history.pushState({}, '', path);
    //Crear un evento personalizado
    const navigationEvent = new Event(NAVIGATION_EVENTS.PUSHSTATE);
    window.dispatchEvent(navigationEvent);
}

function Link({target, to, ...props}) {
    const handleClick = (e) => {
        
        const isMainEvent = e.button === BUTTONS.PRIMARY; //Primary click
        const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey //Evento modificado
        const isManeagebleEvent = target === "_self" || target === undefined //Eventos manejables

        if (isMainEvent && !isModifiedEvent && isManeagebleEvent) {
            e.preventDefault();
            navigate(to); //Navegación con SPA
            window.scrollTo(0, 0); //Scroll al inicio de la página
        }
    }

    return (
        <a onClick={handleClick} href={to} target={target} {...props}></a>
  
  )
}

export default Link;
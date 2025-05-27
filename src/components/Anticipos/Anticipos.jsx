import React from 'react'

import { TarjetaImagenBotonPanel } from '../comunes/TarjetasImagenBoton/TarjetaImagenBotonPanel.jsx';
import { useAnticipos } from './hooks/useAnticipos.js';

export function Anticipos() {
    const { anticipos, error } = useAnticipos();
    
    //Error
    if (error) {
        return (
            <section className="tarjetaimagenboton-panel">   
                <h2>Error al cargar los anticipos</h2>
            </section>
        )
    }   
    
    console.log(anticipos);

    return (
        <TarjetaImagenBotonPanel datosTarjetas={anticipos}></TarjetaImagenBotonPanel>
    )
}

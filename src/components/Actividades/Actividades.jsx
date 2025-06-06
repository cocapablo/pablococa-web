import React from 'react'

import { ImagenDescripcionPanel } from '../comunes/ImagenDescripcion/ImagenDescripcionPanel.jsx';
import { useActividades } from './hooks/useActividades.js';

export function Actividades() {
    const { actividades, error } = useActividades();
    
    //Error
    if (error) {
        return (
            <section className="imagen-descripcion-panel">
                <h2>Error al cargar las actividades</h2>   
            </section>
        )
    }   
    
    console.log(actividades);

    return (
        <ImagenDescripcionPanel 
            titulo="Próximas Funciones"
            datosImagenes={actividades}
        ></ImagenDescripcionPanel>
    )
}

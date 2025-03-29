import React from 'react'
import "./Anticipos.css";
import { Anticipo } from './Anticipo.jsx';
import { TIPO_PATH_ANTICIPO, TIPO_VISTA_ANTICIPO } from './Anticipo.jsx';
import { useAnticipos } from './hooks/useAnticipos.js';

export function Anticipos() {
    const { anticipos, error } = useAnticipos();
    
    //Error
    if (error) {
        return (
            <section className="anticipo-panel">   
                <h2>Error al cargar los anticipos</h2>
            </section>
        )
    }   
    
    console.log(anticipos);

    return (
    <section className="anticipo-panel">
        {
            anticipos.map(anticipo => {
                return <Anticipo key={anticipo.id} titulo={anticipo.titulo} descripcion={anticipo.descripcion} tipoVista={anticipo.tipoVista} origenVista={anticipo.origenVista} tipoPath={anticipo.tipoPath} path={anticipo.path}></Anticipo>
            })
        }

        
    </section>
  )
}

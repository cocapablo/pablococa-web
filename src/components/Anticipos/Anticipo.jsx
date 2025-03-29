import React from 'react';
import { Link } from 'react-router-dom';

export const TIPO_PATH_ANTICIPO = {
  INTERNO: "interno",
  EXTERNO: "externo"
}

export const TIPO_VISTA_ANTICIPO = {
    VIDEO: "video",
    IMAGEN: "imagen"
}


export function Anticipo({id, titulo, descripcion, tipoVista = TIPO_VISTA_ANTICIPO.IMAGEN, origenVista = "", tipoPath = TIPO_PATH_ANTICIPO.EXTERNO, path = ""}) {
  return (
    <div className="anticipo">
        <h3 className="anticipo-titulo">
            {titulo}
        </h3>
        <div className="anticipo-vista">
            {tipoVista === TIPO_VISTA_ANTICIPO.VIDEO ?
                <iframe width="560" height="315" src={origenVista} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                :
                <img src={origenVista} alt={"Foto de " + titulo}></img>
            }
        </div>
        <div className="anticipo-descripcion">
            <p>{descripcion}
            </p>
        </div>
        <div className="anticipo-boton">
            {tipoPath === TIPO_PATH_ANTICIPO.INTERNO 
            ?
            <Link to={path}>Quiero mas {">>>"}</Link>
            :
            <Link to={path} target="_blank" rel="noopener noreferrer">Quiero mas {">>>"}</Link>
            }
            
        </div>
    </div>
  )
}

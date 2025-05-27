import React from 'react'
import { Link } from 'react-router-dom';

export const TIPO_PATH_TARJETAIMAGENBOTON = {
  INTERNO: "interno",
  EXTERNO: "externo"
}

export const TIPO_VISTA_TARJETAIMAGENBOTON = {
    VIDEO: "video",
    IMAGEN: "imagen"
}


export function TarjetaImagenBoton({id, titulo, descripcion, tipoVista = TIPO_VISTA_TARJETAIMAGENBOTON.IMAGEN, origenVista = "", tipoPath = TIPO_PATH_TARJETAIMAGENBOTON.EXTERNO, path = ""}) {
  return (
    <div className="tarjetaimagenboton">
        <h3 className="tarjetaimagenboton-titulo">
            {titulo}
        </h3>
        <div className="tarjetaimagenboton-vista">
            {tipoVista === TIPO_VISTA_TARJETAIMAGENBOTON.VIDEO ?
                <iframe width="560" height="315" src={origenVista} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                :
                <img src={origenVista} alt={"Foto de " + titulo}></img>
            }
        </div>
        <div className="tarjetaimagenboton-descripcion">
            <p>{descripcion}
            </p>
        </div>
        <div className="tarjetaimagenboton-boton">
            {tipoPath === TIPO_PATH_TARJETAIMAGENBOTON.INTERNO 
            ?
            <Link to={path}>Quiero mas {">>>"}</Link>
            :
            <Link to={path} target="_blank" rel="noopener noreferrer">Quiero mas {">>>"}</Link>
            }
            
        </div>
    </div>
  )
}


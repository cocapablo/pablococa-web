import React from 'react';


export function ImagenDescripcion({id = 0, titulo, srcImagen = "img/foto2.jpg" , altImagen = "Foto por defecto", descripcion = "Descripción por defecto"}) {
  return (
    <div className="img-descripcion">
        <div>
            <img src={srcImagen} alt={altImagen}></img>
        </div>
        
        <div>
            {titulo && <h2>{titulo}</h2>}
            <p>{descripcion}</p>
        </div>
    </div>
  )
}


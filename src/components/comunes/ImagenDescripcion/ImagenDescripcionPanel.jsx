import React from 'react';
import "./ImagenDescripcionPanel.css";
import { ImagenDescripcion } from './ImagenDescripcion.jsx';

export function ImagenDescripcionPanel({titulo = "" , datosImagenes = []}) {
  return (
    <section className="imagen-descripcion-panel">
      {titulo && <h2>{titulo}</h2>}
      {
        datosImagenes.map((datoImagen) => (
          <ImagenDescripcion
            key={datoImagen.id}
            id={datoImagen.id}
            titulo={datoImagen.titulo}
            srcImagen={datoImagen.srcImagen}
            altImagen={datoImagen.altImagen}
            descripcion={datoImagen.descripcion}
          />
        ))
      }
    </section>
  );
  
}

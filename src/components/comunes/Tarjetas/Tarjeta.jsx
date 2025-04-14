import React from 'react'


export const TIPO_TARJETA = {
    NORMAL: "tarjeta",
    EXTRA: "tarjeta-extra"
}

export function Tarjeta({id, titulo, descripcion, tipo = TIPO_TARJETA.NORMAL}) {
  return (

    <div className={tipo === TIPO_TARJETA.NORMAL ? "tarjeta" : "tarjeta-extra"}>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
    </div>
    
  )
}

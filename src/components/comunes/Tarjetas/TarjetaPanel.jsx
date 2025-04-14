import React from 'react'
import "./TarjetaPanel.css";
import { Tarjeta, TIPO_TARJETA } from './Tarjeta.jsx'

export function TarjetaPanel({titulo = "", datosTarjetas = []}) {
    return (
        <section className="tarjeta-panel">
            {titulo && <h2>{titulo}</h2>}
            
            {   
                datosTarjetas.map(datoTarjeta => {
                    if (datoTarjeta.id <= 3){
                        return <Tarjeta key={datoTarjeta.id} titulo={datoTarjeta.titulo} descripcion={datoTarjeta.descripcion} tipo={TIPO_TARJETA.NORMAL}></Tarjeta>
                    } else {
                        return <Tarjeta key={datoTarjeta.id} titulo={datoTarjeta.titulo} descripcion={datoTarjeta.descripcion} tipo={TIPO_TARJETA.EXTRA}></Tarjeta>
                    }

                })
            }
        </section>
    )
  
}

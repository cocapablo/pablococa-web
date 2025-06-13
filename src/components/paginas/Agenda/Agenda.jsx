import React from 'react'
import "./Agenda.css";
import { Actividades } from '../../Actividades/Actividades';

export function Agenda() {
  return (
    <main className='agenda'>
        <h1>
            Enterate de mis próximas presentaciones 
        </h1>
        <p>Conocé todo lo que estoy haciendo en el teatro. Podés sacar las entradas para las próximas funciones</p>

        <Actividades></Actividades>
    </main>
  )
}

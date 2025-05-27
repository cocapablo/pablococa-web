import React from 'react'
import "./QuienSoy.css"
import { PortadaQuienSoy } from '../../PortadaQuienSoy/PortadaQuienSoy.jsx'
import { Opiniones } from '../../Opiniones/Opiniones.jsx';

export function QuienSoy() {
  return (
    <div className='fullpantalla'>
      <PortadaQuienSoy></PortadaQuienSoy>

      <Opiniones></Opiniones>
    </div>
    
  )
}

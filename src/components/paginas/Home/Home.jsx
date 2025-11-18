import React from 'react'
import { PortadaHome } from '../../PortadaHome/PortadaHome.jsx';
import { Expectativas } from '../../Expectativas/Expectativas.jsx';
import { Anticipos } from '../../Anticipos/Anticipos.jsx';



export function Home() {
  return (
    <>
      <PortadaHome></PortadaHome>

      
      <Expectativas></Expectativas>
      

      <Anticipos></Anticipos>
    </>
  )
}

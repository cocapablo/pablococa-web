import React from 'react';
import { Modal } from 'react-bootstrap';


// Objective: import the custom hook useExpectativas and use it to fetch the expectativas
// from the API and render them in the Expectativas component.
import { useExpectativas } from './hooks/useExpectativas.js';
import { TarjetaPanel } from '../comunes/Tarjetas/TarjetaPanel.jsx';

export function Expectativas() {
    const { expectativas, loading, error } = useExpectativas();
    
    //Error
    if (error) {
        return (
            <section className="tarjeta-panel">   
                <h2>Error al cargar las expectativas</h2>
            </section>
        )

    }   

    console.log(expectativas);

  // Exitoso  
  return (
    <>
        <Modal show={loading} centered={true} onHide={() => {}}>
            <Modal.Header>
                <Modal.Title>¿Que puedo esperar de esta web?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Cargando todo lo que podés encontrar al visitar esta web.</p>
            </Modal.Body>

        </Modal>
    
        {!loading && <TarjetaPanel titulo="¿Qué puedo esperar de esta web?" datosTarjetas={expectativas} ></TarjetaPanel>}

     </>
  )
}

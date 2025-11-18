import React from 'react';
import { Modal } from 'react-bootstrap';

import { TarjetaImagenBotonPanel } from '../comunes/TarjetasImagenBoton/TarjetaImagenBotonPanel.jsx';
import { useAnticipos } from './hooks/useAnticipos.js';

export function Anticipos() {
    const { anticipos, loading, error } = useAnticipos();
    
    //Error
    if (error) {
        return (
            <section className="tarjetaimagenboton-panel">   
                <h2>Error al cargar los anticipos</h2>
            </section>
        )
    }   
    
    console.log(anticipos);

    return (
        <>
            <Modal show={loading} centered={true} onHide={() => {}}>
                <Modal.Header>
                    <Modal.Title>Anticipos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Cargando los anticipos de las próximas actividades.</p>
                </Modal.Body>
            </Modal>
        
            {!loading && <TarjetaImagenBotonPanel titulo="Anticipos" datosTarjetas={anticipos}></TarjetaImagenBotonPanel>}
        </>
    )
}

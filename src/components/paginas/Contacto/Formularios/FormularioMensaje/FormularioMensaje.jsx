import React from 'react';
import "./FormularioMensaje.css";


export function FormularioMensaje() {
  return (
    <div className="mandame-form">           
        <h3>Completa el formulario</h3>

        <form className="formulario" action="">
            <fieldset>
                <div className="form-label-input-panel">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" required></input>

                    <label htmlFor="telefono">Telefono</label>
                    <input type="tel" name="telefono" id="telefono" required></input>

                    <label htmlFor="mail">Mail</label>
                    <input type="email" name="mail" id="mail" required></input>

                </div>

                <div>
                    <label htmlFor="mensaje">Mensaje</label>    
                </div>
                <div>   
                    <textarea name="mensaje" id="mensaje" cols="30" rows="10" required></textarea>
                </div>

                <div>
                    <input type="submit" value="Enviar"></input>    
                </div>
            </fieldset>    
        </form>

        
    </div>
  )
}

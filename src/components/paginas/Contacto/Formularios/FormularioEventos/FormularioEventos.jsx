import React from 'react';
import { useRef } from 'react';
import "./FormularioEventos.css";


export function FormularioEventos({apiURL = "/", fnExito = (datos) => {console.log("Operación exitosa", datos)}, fnError = (error) => {console.log("Error en la operación", error)}}) {

    //useRef para el formulario
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        let pedidoDePresupuesto = null; // Inicializa la variable fuera del bloque de código

        e.preventDefault();  
        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries()); 
        console.log("Datos del formulario", data);
        // Aquí puedes enviar los datos a tu servidor o hacer lo que necesites con ellos

        //Creo el objeto a enviar al servidor
        const { nombre, email, telefono, tipodeevento, localidad, pais, cantidaddeinvitados, fecha, comentario } = data;
        const formateador = new Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
        
        // Formatear la fecha al formato deseado (DD/MM/YYYY)
        let unDiaMenos = new Date(fecha);
        console.log("Fecha original", unDiaMenos);
        let unDiaMas = new Date(unDiaMenos.setDate(unDiaMenos.getDate() + 1)); // Sumar un día a la fecha original porque sino toma el día anterior al indicado
        console.log("Fecha con un día más", unDiaMas);
        const fechaFormateada = formateador.format(unDiaMas); // Formato de fecha en español
        console.log("Fecha formateada", fechaFormateada);

        // Crear el objeto pedidoDePresupuesto con los datos del formulario
        pedidoDePresupuesto = {
            nombre,
            email,
            telefono,
            tipodeevento,
            localidad,
            pais,
            cantidaddeinvitados : parseInt(cantidaddeinvitados), // Convertir cantidaddeinvitados a número entero
            fecha: fechaFormateada, // Usar la fecha formateada
            comentario
        };

        console.log("Objeto a enviar al servidor", pedidoDePresupuesto);
        // Aquí puedes enviar el objeto pedidoDePresupuesto a tu servidor o hacer lo que necesites con él
        enviarDatos(pedidoDePresupuesto); // Llama a la función para enviar los datos al servidor
        formRef.current.reset(); // Reinicia el formulario después de enviar los datos
        
    };

    function enviarDatos(datos) {
        // Aquí puedes enviar los datos a tu servidor o hacer lo que necesites con ellos
        fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos) // Convertir el objeto a JSON
        })
        .then(response => response.json())
        .then(data => fnExito(data))
        .catch(error => fnError(error));
    }



                                 
  return (
    <div className="mandame-form">           
        <h3>Completa el formulario</h3>

        <form className="formulario" ref={formRef} onSubmit={handleSubmit}>
            <fieldset>
                <div className="form-label-input-panel">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" required></input>

                    <label htmlFor="email">Mail</label>
                    <input type="email" name="email" id="email" required></input>

                    <label htmlFor="telefono">Telefono</label>
                    <input type="tel" name="telefono" id="telefono" required></input>

                    <label htmlFor="tipodeevento">Tipo de Evento</label>
                    <select name="tipodeevento" id="tipodeevento" required>
                        <option value="Cumpleaños">Cumpleaños</option>
                        <option value="Casamiento">Casamiento</option>
                        <option value="Fiesta de 15">Fiesta de 15</option>
                        <option value="Empresarial">Empresarial</option>
                        <option value="Bautismo">Bautismo</option>
                        <option value="Comunión">Comunión</option>                 
                        <option value="Aniversario">Aniversario</option>
                        <option value="Despedida de soltero/a">Despedida de soltero/a</option>
                        <option value="Fiesta de egresados">Fiesta de egresados</option>
                        <option value="Bar Mitzvá">Bar Mitzvá</option>
                        <option value="Bat Mitzvá">Bat Mitzvá</option>
                        <option value="Otro">Otro</option>
                    </select>

                    <label htmlFor="localidad">Localidad</label>
                    <input type="text" name="localidad" id="localidad" required></input>

                    <label htmlFor="pais">País</label>
                    <input type="text" name="pais" id="pais" required></input>

                    <label htmlFor="cantidaddeinvitados">Cantidad de Invitados</label>
                    <input type="number" name="cantidaddeinvitados" id="cantidaddeinvitados" required></input>

                    <label htmlFor="fecha">Fecha</label>
                    <input type="date" name="fecha" id="fecha" required></input>



                </div>

                <div>
                    <label htmlFor="comentario">Comentario</label>    
                </div>
                <div>   
                    <textarea name="comentario" id="comentario" cols="30" rows="10" required></textarea>
                </div>

                <div>
                    <input type="submit" value="Enviar"></input>    
                </div>
            </fieldset>    
        </form>

        
    </div>
  )
}

import React from 'react'
import "./Contacto.css";
import { Comunicate } from './Comunicate/Comunicate.jsx';
import { FormularioEventos } from './Formularios/FormularioEventos/FormularioEventos.jsx';
import swal from 'sweetalert';


const apiURL = "https://entrega1-backend-production.up.railway.app/api/pedidosdepresupuesto"; // URL de la API

const apiURLLocal = "http://localhost:8080/api/pedidosdepresupuesto"; // URL de la API

function fnExitoSwal(datos) {
  if (datos.status === "success") {
    //Salió todo bien
    console.log("Operación exitosa", datos);
    swal({
        title: "¡Gracias por tu consulta!",
        text: "Te responderé a la brevedad posible.",
        icon: "success",
        button: "Aceptar",
    });
  }
  else {
    //Salió todo mal
    console.log("Error en la operación", datos);
    swal({
        title: "¡Ups!",
        text: "Parece que hubo un error al enviar tu consulta. Por favor, intenta nuevamente más tarde.",
        icon: "error",
        button: "Aceptar",
    });
  }
}

function fnErrorSwal(error) {
    console.log("Error en la operación", error);
    swal({
        title: "¡Ups!",
        text: "Parece que hubo un error al enviar tu consulta. Por favor, intenta nuevamente más tarde.",
        icon: "error",
        button: "Aceptar",
    });
}

export function Contacto() {
  return (
    <main>
        <div class="contacto">
            <h1>
                Comunicate conmigo 
            </h1>
            <Comunicate></Comunicate>
            <FormularioEventos apiURL={apiURLLocal} fnExito={fnExitoSwal} fnError={fnErrorSwal}></FormularioEventos>
        </div>
    </main>
  )
}

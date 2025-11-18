//Mocks
import opinionesExitosas from  "../mocks/opiniones.json";
//import opinionesExitosas from  "../mocks/opinionesError.json";

const API_URL_OPINIONES_LOCAL = "http://localhost:8080/api/opiniones"; // Replace with actual API URL
const API_URL_OPINIONES = "https://entrega1-backend-production.up.railway.app/api/opiniones"; // Esto habría que ponerlo en una variable de entorno 

export function getOpiniones() 
{
    //En el futuro esto habría que hacerlo con una llamada a la API
    //return getOpinionesMock();
    return getOpinionesAPI();
}

function getOpinionesMock() {
    //En el futuro esto habría que hacerlo con una llamada a la API
    let promesaOpiniones = new Promise((resolve, reject) => {
        let resultado = false;
        let opiniones;

        opinionesExitosas && opinionesExitosas.payload && opinionesExitosas.payload.opiniones ? resultado = true : resultado = false;

        if (resultado) {    
            opiniones = opinionesExitosas.payload.opiniones;
            resolve(opiniones);
        }
        else {
            opiniones = [];
            reject("No se han encontrado opiniones");
        }
    });

    return promesaOpiniones;
}

function getOpinionesAPI() {
    //Llamada a la API
    return fetch(API_URL_OPINIONES_LOCAL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos recibidos de la API:', data);
            console.log('Payload:', data.payload);
            console.log('Opiniones:', data.payload.opiniones);
            
            // Asegurarse de que los datos tienen el formato esperado
            if (data && data.payload && data.payload.opiniones) {
                return data.payload.opiniones;
            }
            
            throw new Error('Formato de datos inesperado');
            
            
        })
        .catch(error => {
            console.error('Error fetching opiniones:', error);
            throw error;
        });
}
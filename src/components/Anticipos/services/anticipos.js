//Mocks
import anticiposExitosos from  "../mocks/anticipos.json";
//import anticiposExitosas from  "../mocks/anticiposError.json";


const API_URL_ANTICIPOS_LOCAL = "http://localhost:8080/api/anticipos"; // Replace with actual API URL
const API_URL_ANTICIPOS = "https://entrega1-backend-production.up.railway.app/api/anticipos"; // Esto habría que ponerlo en una variable de entorno

export function getAnticipos() 
{
    //En el futuro esto habría que hacerlo con una llamada a la API
    //return getAnticiposMock();
    return getAnticiposAPI();
}

function getAnticiposMock() {
    //En el futuro esto habría que hacerlo con una llamada a la API
    let promesaAnticipos = new Promise((resolve, reject) => {
        let resultado = false;
        let anticipos;
        anticiposExitosos && anticiposExitosos.payload && anticiposExitosos.payload.anticipos ? resultado = true : resultado = false;

        if (resultado) {    
            anticipos = anticiposExitosos.payload.anticipos;
            resolve(anticipos);
        }
        else {
            anticipos = [];
            reject("No se han encontrado anticipos");
        }
    });

    return promesaAnticipos;
}

function getAnticiposAPI() {
    //Llamada a la API
    return fetch(API_URL_ANTICIPOS_LOCAL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos recibidos de la API:', data);
            console.log('Payload:', data.payload);
            console.log('Anticipos:', data.payload.anticipos);
            
            // Asegurarse de que los datos tienen el formato esperado
            if (data && data.payload && data.payload.anticipos) {
                return data.payload.anticipos;
            }
            
            throw new Error('Formato de datos inesperado');
            
            
        })
        .catch(error => {
            console.error('Error fetching anticipos:', error);
            throw error;
        });
}



    
//Mocks
import expectativasExitosas from  "../mocks/expectativas.json";
//import expectativasExitosas from  "../mocks/expectativasError.json";

const API_URL_EXPECTATIVAS_LOCAL = "http://localhost:8080/api/expectativas"; // Replace with actual API URL
const API_URL_EXPECTATIVAS = "https://entrega1-backend-production.up.railway.app/api/expectativas"; // Esto habría que ponerlo en una variable de entorno 

export function getExpectativas() 
{
    
    //En el futuro esto habría que hacerlo con una llamada a la API
    //return getExpectativasMock();
    return getExpectativasAPI();
}

function getExpectativasMock() {
    //En el futuro esto habría que hacerlo con una llamada a la API
    let promesaExpectativas = new Promise((resolve, reject) => {
        let resultado = false;
        let expectativas;
        expectativasExitosas && expectativasExitosas.payload && expectativasExitosas.payload.expectativas ? resultado = true : resultado = false;

        if (resultado) {    
            expectativas = expectativasExitosas.payload.expectativas;
            resolve(expectativas);
        }
        else {
            expectativas = [];
            reject("No se han encontrado expectativas");
        }
    });

    return promesaExpectativas;
}

function getExpectativasAPI() {
    //Llamada a la API
    return fetch(API_URL_EXPECTATIVAS_LOCAL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos recibidos de la API:', data);
            console.log('Payload:', data.payload);
            console.log('Expectativas:', data.payload.expectativas);
            
            // Asegurarse de que los datos tienen el formato esperado
            if (data && data.payload && data.payload.expectativas) {
                return data.payload.expectativas;
            }
            
            throw new Error('Formato de datos inesperado');
            
            
        })
        .catch(error => {
            console.error('Error fetching expectativas:', error);
            throw error;
        });
}


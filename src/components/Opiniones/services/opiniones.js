//Mocks
import opinionesExitosas from  "../mocks/opiniones.json";


export function getOpiniones() 
{
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
            reject("No se han encontrado opiniones del público");
        }
        
    });

    return promesaOpiniones;
}
//Mocks
import anticiposExitosos from  "../mocks/anticipos.json";
//import anticiposExitosas from  "../mocks/anticiposError.json";

export function getAnticipos() 
{
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
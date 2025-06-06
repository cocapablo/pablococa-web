//Mocks
import actividadesExitosas from  "../mocks/actividades.json";
//import actividadesExitosas from  "../mocks/actividadesError.json";

export function getActividades() 
{
    //En el futuro esto habría que hacerlo con una llamada a la API
    let promesaActividades = new Promise((resolve, reject) => {
        let resultado = false;
        let actividades;

        actividadesExitosas && actividadesExitosas.payload && actividadesExitosas.payload.actividades ? resultado = true : resultado = false;
        if (resultado) {
            actividades = actividadesExitosas.payload.actividades;
            resolve(actividades);
        }
        else {
            actividades = [];
            reject("No se han encontrado actividades");
        }
        
        
    });

    return promesaActividades;
}
//Mocks
import expectativasExitosas from  "../mocks/expectativas.json";
//import expectativasExitosas from  "../mocks/expectativasError.json";

export function getExpectativas() 
{
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


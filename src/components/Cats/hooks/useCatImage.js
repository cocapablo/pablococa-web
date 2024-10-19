import { useState } from "react";
import { useEffect } from "react";
import { getFirstThreeWords } from "../services/facts.js";

//Custom Hook
export function useCatImage({fact}) {
    const [idCat, setIdCat] = useState(null);

    useEffect(() => {
        let firstWord = "";
        

        if (fact) {
            //Obtengo la primera palabra
            firstWord = getFirstThreeWords(fact);

            console.log("FirstWord: ", firstWord);

            fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(datos => {
                    console.log("Datos 2da API: ", datos);
                    const {_id} = datos;
                    setIdCat(_id);
                }
            )
            .catch(err => console.log("Error: ", err));
        }

    }, [fact]);

    let imageURL = null;
    idCat && (imageURL = `https://cataas.com/cat/${idCat}?size=50&color=red&position=center`);
    console.log("ImageURL", imageURL);

    return {imageURL};
    
}
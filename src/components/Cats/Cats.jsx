import { useState } from "react";
import { useEffect } from "react";
import "./Cats.css";

import { useCatImage } from "./hooks/useCatImage.js";
import { useCatFact } from "./hooks/useCatFact.js";

import React from 'react'

let firstWord = "-";

const CAT_ENPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;


function Cats() {
    const {fact, refreshFact} = useCatFact();
    const {imageURL} = useCatImage({fact});

    function handleClick() {
        refreshFact();
    }

    
    return (
        <main className="main-cat">
            <h1 className="color-cat">Cats</h1>
            {fact && <p className="color-cat">{fact}</p>}
            {imageURL && <img alt={`Esta es una imagen del Cat`}  src={imageURL} maxwidht="10%" height="auto"></img>}
            <button style={{margin: "20px"}} onClick={handleClick}>New Fact</button>
        </main>
        
    )
}

export default Cats


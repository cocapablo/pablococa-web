
const CAT_ENDPOINT_RANDOM_CAT = `https://catfact.ninja/fact`;

export function getRandomFact() {
    return fetch(CAT_ENDPOINT_RANDOM_CAT)
    .then(res => res.json())
    .then(datos => {
        console.log("Facts: ", datos);
        const {fact} = datos;
        return fact;
    })
    .catch(err => console.log("Error: ", err));     

}

export function getFirstThreeWords(text) {
    let firstThreeWord = "";

    firstThreeWord = text.split(" ",3).join(" ");

    return firstThreeWord;
}
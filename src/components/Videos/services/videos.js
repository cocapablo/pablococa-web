//Mocks
import videosExitosos from  "../mocks/videos.json";
//import expectativasExitosas from  "../mocks/videosError.json";

const API_URL_VIDEOS_LOCAL = "http://localhost:8080/api/videos"; // Replace with actual API URL
const API_URL_VIDEOS = "https://entrega1-backend-production.up.railway.app/api/videos"; // Esto habría que ponerlo en una variable de entorno 


export function getVideos() 
{
    //En el futuro esto habría que hacerlo con una llamada a la API
    //return getVideosMock();
    return getVideosAPI();
        
    
}

function getVideosMock() {
    let promesaVideos = new Promise((resolve, reject) => {
        let resultado = false;
        let videos;

        videosExitosos && videosExitosos.payload && videosExitosos.payload.videos ? resultado = true : resultado = false;

        if (resultado) {
            videos = videosExitosos.payload.videos;
            resolve(videos);
        }
        else {
            videos = [];
            reject("No se han encontrado videos");
        }
        
    });

    return promesaVideos;
}

function getVideosAPI() {
    //Llamada a la API
    return fetch(API_URL_VIDEOS_LOCAL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos recibidos de la API:', data);
            console.log('Payload:', data.payload);
            console.log('Videos:', data.payload.videos);
            
            // Asegurarse de que los datos tienen el formato esperado
            if (data && data.payload && data.payload.videos) {
                return data.payload.videos;
            }
            
            throw new Error('Formato de datos inesperado');
            
            
        })
        .catch(error => {
            console.error('Error fetching videos:', error);
            throw error;
        });
}

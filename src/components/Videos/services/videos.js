//Mocks
import videosExitosos from  "../mocks/videos.json";
//import expectativasExitosas from  "../mocks/videosError.json";

export function getVideos() 
{
    //En el futuro esto habría que hacerlo con una llamada a la API
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


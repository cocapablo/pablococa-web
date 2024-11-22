const API_KEY = "4287ad07&";

export const searchMovies = async ({search}) => {
    if (search === "") return null;

    try {
        let consulta = "";
        let respuesta;
        let datos;

        consulta = "https://www.omdbapi.com/?apikey=" + API_KEY + "&s=" + search;

        respuesta = await fetch(consulta);
        datos = await respuesta.json();

        const movies = datos.Search;

        const mappedMovies = movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }));

        return (mappedMovies);

    }
    catch (error) {
        throw new Error("Error searching Movies");
    }

}
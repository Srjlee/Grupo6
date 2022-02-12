export const GET_MOVIES = 'GET_MOVIES';
export const MOVIE_DETAIL = 'MOVIE_DETAIL';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const getMovieDetail = (id) => { return {type: MOVIE_DETAIL, payload: id}};
export const addMovieFavorite = (pelicula) => {return {type: ADD_FAVORITE, payload: pelicula}};
export const removeMovieFavorite = (id) => {return {type: REMOVE_FAVORITE, payload: id}};


export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=c9c727c5&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          console.log(json)
        dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}
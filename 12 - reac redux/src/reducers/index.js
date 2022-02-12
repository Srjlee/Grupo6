import {GET_MOVIES, MOVIE_DETAIL, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions'


const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
}


function rootReducer(state = initialState, action) {
    if (action.type === ADD_FAVORITE) {
        if(state.moviesFavourites.find((e)=> action.payload.imdbID === e.imdbID)) {
            alert("toma la pastilla que ya apretaste")
            return state 
        } else {

            return {
              ...state,          
              moviesFavourites: state.moviesFavourites.concat(action.payload)
            }
        }

    }
    if (action.type === GET_MOVIES) {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    if(action.type === REMOVE_FAVORITE) {
        return {
            ...state, moviesFavourites: state.moviesFavourites.filter((movie) => movie.imdbID !== action.payload)
        }
    }
    if(action.type === MOVIE_DETAIL) {
        return {
            ...state, 
            movieDetail: state.moviesLoaded.find((peli)=> peli.imdbID===action.payload)
        }
    }
    
    return state;
  }
  
  export default rootReducer;
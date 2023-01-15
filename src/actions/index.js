import {GET_MOVIES, GET_DETAILS, ADD_MOVIE_FAVORITE,REMOVE_FAVORITE} from './constants'
let apiKey = '4689b608'

export function getDetails(id){
    return function(dispatch){
     return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`) 
     .then(response => response.json())
     .then(json => dispatch({type: GET_DETAILS, movie: json}))
    }
}

export function getMovies(title){
     return function(dispatch){
         return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
         .then(response => response.json())
         .then(json => dispatch({type: GET_MOVIES, movie: json}))
     }
}

export function addMovieFavorite(movie){
     return {
         type: ADD_MOVIE_FAVORITE, movie
     }
}

export function removeFavorite(id){
    return{
        type: REMOVE_FAVORITE, id
    }
}
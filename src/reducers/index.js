import { GET_MOVIES, GET_DETAILS, ADD_MOVIE_FAVORITE, REMOVE_FAVORITE } from "../actions/constants"

const initialState = {
  moviesLoaded: [],
  movieDetails: {},
  moviesFavorites: []
};

export default function rootReducer(state=initialState, action){
 switch (action.type){
     case GET_MOVIES:
         return {
             ...state,
             moviesLoaded: action.movie.Search
         }
     case GET_DETAILS:
       return {
        ...state,
      movieDetails: action.movie
       } 
         
     case  ADD_MOVIE_FAVORITE:
       return {
         ...state,
         moviesFavorites: state.moviesFavorites.concat(action.movie)
       }
     case REMOVE_FAVORITE:
       return{
         ...state,
         moviesFavorites: state.moviesFavorites.filter(m => m.id !== action.id)
       }
    default: return state;
 }
}
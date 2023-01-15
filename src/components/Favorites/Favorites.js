import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
          this.props.favorites &&
          this.props.favorites.map(movie => 
            <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            <button onClick={()=>this.props.removeFavorite(movie.id)}>REMOVE FROM FAVORITES</button>
            </div>
          
          )
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    favorites: state.moviesFavorites
  }
}
// function mapDispatchtoProps(dispatch){
//   return
//   {
//     removeFavorite: (id) => dispatch(removeFavorite(id))
//   }
// }

export default connect(mapStateToProps, {removeFavorite})(ConnectedList);

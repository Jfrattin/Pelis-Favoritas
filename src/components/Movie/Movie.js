import React from 'react';
import { connect } from 'react-redux';
import { getDetails } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
      const id = this.props.match.params.id;
      this.props.getMovieDetail(id);
    }


    render() {
        return (
           this.props.movie ? <div className="movie-detail">
                <h3>Detalle de la pelicula</h3>
                <h2>{`Title ${this.props.movie.Title}`}</h2>
                <img src={this.props.movie.Poster} className="movie-img"  alt='img'/>
                <div className='movie-description'>
                <h4>{`Year: ${this.props.movie.Year}`}</h4>
                <h4>{`Actors: ${this.props.movie.Actors}`}</h4>
                <h4>{`Country: ${this.props.movie.Country}`}</h4>  
                </div>
            </div>
            : <div>Loading...</div>
        );
    }
}


function mapStateToProps(state){
    return{
        movie: state.movieDetails
    }
}
function mapDispatchToProps(dispatch){
    return{
        getMovieDetail: id => dispatch(getDetails(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);
import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';


import './Movie.css';

class Movie extends React.Component {



    render() {
        return (
            <div className="movie-detail">
                <h3>{this.props.pelicula.Title}</h3>
                <img src={this.props.pelicula.Poster}></img>

                
            </div>
        );
    }
}
function mapStateToProps (state){
    return {
        pelicula: state.movieDetail
    }
}



export default connect(mapStateToProps, )(Movie)
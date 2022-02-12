import React, { Component } from "react";
 import { connect } from "react-redux";
 import { Link } from 'react-router-dom';
 import {removeMovieFavorite} from  '../../actions'
import './Favorites.css';

export class Favorites extends Component {

  render() {
    
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.favoritos.map((fav)=> (

            <div className="favoritos"><li><img className="fav-img" src={fav.Poster}></img> {fav.Title}</li><button className="btn-fav" onClick={()=> {this.props.removeMovieFavorite(fav.imdbID)}}>X</button> </div>
          )
            
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoritos: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
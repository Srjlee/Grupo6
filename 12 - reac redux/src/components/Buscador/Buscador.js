import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies, addMovieFavorite, getMovieDetail  } from "../../actions";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }  

  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }  

  

  render() {
    const { title } = this.state;
    
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {
           this.props.movies.map((movie) =>
           (
           <div className="movie">
             
          <Link onClick={()=> this.props.getMovieDetail(movie.imdbID)} to={`/movie/${movie.imdbID}`}>
          <li key={movie.imdbID} >{movie.Title}</li>    
          </Link>
           <button onClick={()=> this.props.addMovieFavorite(movie)}>Add Fav</button> </div>
           
           ))
         }
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title)),
    getMovieDetail: id => dispatch(getMovieDetail(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);


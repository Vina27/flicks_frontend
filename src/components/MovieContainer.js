import React, { Component } from 'react';
import MovieCard from "./MovieCard"

class MovieContainer extends Component {

    renderMovieCards=() => {
        this.props.movieArr.map((movieObj) =>{
        
        return <MovieCard movieObj={movieObj}/>
      })
    }

    render() {
        console.log(this.props.movieArr)
        return (
            <div>
               

                {this.renderMovieCards()}

            </div>
        );
    }
}

export default MovieContainer;
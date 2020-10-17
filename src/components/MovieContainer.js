import React, { Component } from 'react';
import MovieCard from "./MovieCard"

class MovieContainer extends Component {

    // renderMovieCards = () => {
    //     this.props.movieArr.map((movieObj) => {
    //     console.log(movieObj)
    //     return <MovieCard movieObj={movieObj}/>

    //   })
    // }

    render() {
        let movieCards = this.props.movieArr ? this.props.movieArr.map((movieObj) => {
           
            return <MovieCard movieObj={movieObj}/>

        }) : null 

        //console.log(this.props.movieArr)
        return (
            <div>
               
               {movieCards}

            </div>
        );
    }
}

export default MovieContainer;
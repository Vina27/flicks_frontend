import React, { Component } from 'react';
import MovieCard from "./MovieCard"
import ReviewContainer from "./ReviewContainer"

class MovieShowContainer extends Component {
    render() {
        return (
            <div>
                <MovieCard />
                <ReviewContainer />
              <p>This is ShowContainer</p>  
            </div>
        );
    }
}

export default MovieShowContainer;

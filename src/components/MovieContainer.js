import React, { Component } from 'react';
import MovieCard from "./MovieCard"
class MovieContainer extends Component {
    render() {
        return (
            <div>
                <MovieCard />
                <p>This is MovieContainer</p>
            </div>
        );
    }
}

export default MovieContainer;
import React, { Component } from 'react';
import MovieCard from "./MovieCard"
import { Image, Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
//import { Grid, Image } from 'semantic-ui-react'
class MovieContainer extends Component {

    renderMovieCards = () => {
    //needed to put return for renderMovieCards func 
       return this.props.movieArr.map((movieObj) => {
        console.log(movieObj)
        //imported linking to showcontainer from RouterDOM connected to App.js routes
        return <Link key={movieObj.id} to={`/${movieObj.id}`}> <MovieCard movieObj={movieObj}/></Link>

      })
    }

    render() {
        console.log(this.props.movieArr)
          return (
            <div className="Movie-Show-Cont">
              <h2 className="Subtitle">Please Click On A Movie To Review </h2>
                
                <Grid>
                
                {this.renderMovieCards()}
                </Grid>
            </div>
        );
    }
}

export default MovieContainer;
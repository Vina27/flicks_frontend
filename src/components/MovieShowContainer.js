import React, { Component } from 'react';
import MovieCard from "./MovieCard"
import ReviewContainer from "./ReviewContainer"
import { withRouter } from 'react-router-dom'

//All crud review functions go in here 

class MovieShowContainer extends Component {
    //we need to do componentDidMount and then render the image card 
    state = {
        movie: {}
    }
    componentDidMount() {
        console.log(this.props.match.params.id)

        let movieObjId = this.props.match.params.id
        fetch(`http://localhost:3000/movies/${movieObjId}`)
        .then(resp => resp.json())
        .then(movieObj => {
            console.log(movieObj)
            this.setState ({
                movie: movieObj
            })
        })
    }

    createReview = (newReview) => {
        //fetch reviews 
        //body send review + user id and movie id
    }
    
    render() {

      //console.log(this.state.movie)
        return (
            <div>
               <MovieCard movieObj={this.state.movie}/>
                <ReviewContainer reviews={this.state.movie.reviews} createReview={this.createReview}/>
              <p>This is ShowContainer</p>  
            </div>
        );
    }
}

export default withRouter(MovieShowContainer);

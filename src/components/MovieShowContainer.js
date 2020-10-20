import React, { Component } from 'react';
import MovieCard from "./MovieCard"
import ReviewContainer from "./ReviewContainer"
import { withRouter } from 'react-router-dom'

//MovieShowContainer holds each individual movie 

//All crud review functions go in here 

class MovieShowContainer extends Component {
    //we need to do componentDidMount and then render the image card 
    state = {
        movie: {}, 
        //review: "", 
        user_id: 1, 
        //movie_id: "", 

    }

    componentDidMount() {
        //console.log(this.props.match.params.id)

        let movieObjId = this.props.match.params.id
        fetch(`http://localhost:3000/movies/${movieObjId}`)
        .then(resp => resp.json())
        .then(movieObj => {
            //console.log(movieObj)
            this.setState ({
                movie: movieObj
            })
        })
    }

   createReview = (newReview) => {
         //fetch reviews 
        //body send review + user id and movie id

   fetch(`http://localhost:3000/reviews`, {
        method: "Post", 
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify({
          review: newReview, 
          user_id: this.state.user_id,
          movie_id: this.props.match.params.id, 
          
        })
      })
         .then(resp => resp.json())
         .then((reviewObj) => {
            let updatedReviews = [...this.state.movie.reviews, reviewObj]
            let updatedMovie = {...this.state.movie, reviews:updatedReviews}
            console.log(updatedMovie)
           //console.log(reviewObj)
        //    console.log(this.setState)
           this.setState ({
               movie: updatedMovie

           })
           //sending up response 
           //this.props.createReview(newReview)
         })
     }
    

    render() {

      console.log(this.state.movie)
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

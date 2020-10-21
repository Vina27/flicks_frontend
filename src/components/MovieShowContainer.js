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
        currentReview: "", 
        clicked: false,
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
         })
     }

     handleUpdatedReview = (updatedReviewObj) => {
         console.log(updatedReviewObj)
        fetch(`http://localhost:3000/reviews/${this.state.currentReview.review.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify({
                reviews: updatedReviewObj
            })
        })
            .then(res => res.json())
            .then( updatedReview => { 
                console.log(updatedReview)
                
            })
    }
     
    currentReviewFunc = (reviewObj) => {
        console.log(reviewObj)
        this.setState ({
            currentReview: reviewObj, 
            clicked: !this.state.clicked
        })
    }

     deleteReview = (reviewObj) => {
        //console.log(reviewObj)
        console.log(this.state.clicked)
        fetch(`http://localhost:3000/reviews/${reviewObj.id}`, {
            method: "Delete", 
            
        })
        .then(resp => resp.json())
        .then(deletedReview => {
            console.log(deletedReview)
        let updatedReviews = this.state.movie.reviews.filter (review => review.id !== deletedReview.review.id)
        let updatedMovie = {...this.state.movie, reviews: updatedReviews}
            this.setState({
                movie: updatedMovie
            })
        })
     }

    render() {

      //console.log(this.state.movie)
      console.log(this.state.clicked)
        return (
            <div>
               <MovieCard movieObj={this.state.movie} />
                <ReviewContainer reviews={this.state.movie.reviews} createReview={this.createReview} deleteReview={this.deleteReview} currentReviewFunc={this.currentReviewFunc} currentReview={this.state.currentReview} clicked={this.state.clicked} handleUpdatedReview={this.handleUpdatedReview}/>
                {/* <button onClick={ this.handleUpdatedReview } >
                    reviews: {reviews}
                </button>  */}
              <p>This is ShowContainer</p>  
            </div>
        );
    }
}

export default withRouter(MovieShowContainer);

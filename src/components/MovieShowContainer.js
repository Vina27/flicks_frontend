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

     handleUpdatedReview = (updatedReviewObj, currentReview) => {
         console.log(updatedReviewObj)
        fetch(`http://localhost:3000/reviews/${currentReview.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify({
                review: updatedReviewObj
            })
        })
            .then(res => res.json())
            .then( updatedReview => { 
                console.log(updatedReview)
                let updatedReviews = this.state.movie.reviews.map (review => {
                    if (review.id === updatedReview.id) {
                        return updatedReview 
                    }else {
                        return review 
                    }
                }) 
                let updatedMovie =  {...this.state.movie, reviews:updatedReviews}
                    this.setState ({
                        movie: updatedMovie 
                    })
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
    
        return (
            <div>
               <MovieCard movieObj={this.state.movie} />
                <ReviewContainer 
                reviews={this.state.movie.reviews} 
                createReview={this.createReview} 
                deleteReview={this.deleteReview}   
                handleUpdatedReview={this.handleUpdatedReview}/>
                {/* <button onClick={ this.handleUpdatedReview } >
                    reviews: {reviews}
                </button>  */}
              <p>This is ShowContainer</p>  
            </div>
        );
    }
}

export default withRouter(MovieShowContainer);

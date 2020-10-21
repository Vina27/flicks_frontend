import React, { Component } from 'react';
import ReviewCard from "./ReviewCard"
import ReviewForm from "./ReviewForm"
import { Button, Comment  } from 'semantic-ui-react'


class ReviewContainer extends Component {
    render() {
        console.log(this.props)
        let reviewCard = this.props.reviews ? this.props.reviews.map(review => <ReviewCard review={review} deleteReview={this.props.deleteReview} handleUpdatedReview={this.props.handleUpdatedReview}/>) : null
        return (
            <div>
                <p>This is ReviewContainer</p>
                <h2>Reviews</h2>
                <Comment.Group>
                {reviewCard}
            
                <ReviewForm createReview={this.props.createReview} />
                </Comment.Group>
            </div>
        );
    }
}

export default ReviewContainer;
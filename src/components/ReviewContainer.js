import React, { Component } from 'react';
import ReviewCard from "./ReviewCard"
import ReviewForm from "./ReviewForm"

class ReviewContainer extends Component {
    render() {
        console.log(this.props)
        let reviewCard = this.props.reviews ? this.props.reviews.map(review => <ReviewCard review={review} />) : null
        return (
            <div>
                <p>This is ReviewContainer</p>
                <h2>Reviews</h2>
                {reviewCard}
                <ReviewForm createReview={this.props.createReview} />
            </div>
        );
    }
}

export default ReviewContainer;
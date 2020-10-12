import React, { Component } from 'react';
import ReviewCard from "./ReviewCard"
import ReviewForm from "./ReviewForm"

class ReviewContainer extends Component {
    render() {
        return (
            <div>
                <p>This is ReviewContainer</p>
                <ReviewCard />
                <ReviewForm />
            </div>
        );
    }
}

export default ReviewContainer;
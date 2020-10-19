import React, { Component } from 'react';

class ReviewCard extends Component {
    render() {
        console.log(this.props.review.review)
        return (
            <div>
                <h3>Reviews</h3>
                <li>{this.props.review.review}</li>

            </div>
        );
    }
}

export default ReviewCard;
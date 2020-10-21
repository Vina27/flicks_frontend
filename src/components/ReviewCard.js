import React, { Component } from 'react';
import { Button, Comment, TableHeader  } from 'semantic-ui-react'
import ReviewForm from "./ReviewForm" 

class ReviewCard extends Component {

  state = {
    clicked: false, 
  }

    handleDeleteReview = () => {
        //console.log(this.props.review.review)
        this.props.deleteReview(this.props.review)
    }

    handleUpdateReview = () => {
      console.log(this.props.review)
    
        this.setState ({
          clicked: !this.state.clicked 
        })
    }


    render() {
        //console.log(this.props.review.review)
        //console.log(this.props)
        console.log(this.state.clicked)
        return (
           
            <Comment>
              <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
              <Comment.Content>
                <Comment.Author>Maysoon</Comment.Author>
                
                <Comment.Text>
                  
                  <p>
                   {this.props.review.review}
                  </p>
                </Comment.Text>
                {this.state.clicked ? <ReviewForm handleUpdatedReview={this.props.handleUpdatedReview} currentReview={this.props.review} /> : null }
                <Button basic color='red' onClick={this.handleDeleteReview}>
                    Delete
                </Button>
                <Button basic color='blue' onClick={this.handleUpdateReview}>
                    Update Review
                </Button> 
              </Comment.Content>
            </Comment>
           
        );
    }
}

export default ReviewCard;
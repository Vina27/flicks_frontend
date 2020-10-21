import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class ReviewForm extends Component {

    state = {
        review: "", 
    
    }

    handleInputChange = (evt) => {
        
        console.log(evt.target)
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }


    handleSubmit = (evt) => { 
        evt.preventDefault()
        //console.log("hi")
      
        if (this.props.currentReview) {
            return this.props.handleUpdatedReview(this.state.review, this.props.currentReview)
            
        } else {
            return this.props.createReview(this.state.review)
        }
    
}



    render() {
        //console.log("the review", this.state.review)
        //console.log(this.props.handleUpdatedReview)
        //console.log(this.props.currentReview)
        return (
            <div className="Reviews">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            placeholder= "Leave your comment"
                            name='review'
                            value={this.state.review }
                            onChange={this.handleInputChange}
                        />
                   
                    <Form.Button content='Submit' />
                    </Form.Group>
                 </Form>
            </div>
        );
    }
}

export default ReviewForm;
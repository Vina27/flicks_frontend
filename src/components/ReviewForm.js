import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class ReviewForm extends Component {

    state = {
        review: "", 
       
    }

    handleInputChange = (evt) => {
        //console.log(evt.target)
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    handleSubmit = (evt) => { 
        evt.preventDefault()
        //console.log("hi")
        this.props.createReview(this.state.review)
    //     fetch(`http://localhost:3000/reviews`, {
    //         method: "Post", 
    //         headers: {
    //             "Content-Type": "Application/json"
    //         }, 
    //         body: JSON.stringify({
    //             review: this.state.review
    //         })
    // })
}



    render() {
        //console.log("the review", this.state.review)
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            placeholder='Leave a Comment'
                            name='review'
                            value={this.state.review}
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
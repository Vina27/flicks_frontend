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

    // handleSubmit = (evt) => { 
    //     evt.preventDefault()
    //     fetch (`http://localhost:3000/reviews`)

    //         headers: {
    //             "Content-Type": "Application/json"
    //         }, 

    // }



    render() {
        console.log(this.props)
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
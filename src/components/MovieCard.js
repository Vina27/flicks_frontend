import React, { Component } from 'react';
import { Divider, Image, Grid } from 'semantic-ui-react';


class MovieCard extends Component {
    render() {
        
      console.log(this.props.movieObj)
        return (
            <div className="Movie-Posters">
       
     
              
               <Grid.Row columns={3}>
                   <Grid.Column>
                   
                <p> {this.props.movieObj.name} </p>
                <p>{/*this.props.movieObj.genre*/}</p>
               <Image src={this.props.movieObj.img_url} size='medium' />
                <p>{this.props.movieObj.summary}</p> 

               </Grid.Column>
               </Grid.Row>
               
               
            </div>
        );
    }
}

export default MovieCard;
import React, { Component } from 'react';
import { Divider, Image, Grid } from 'semantic-ui-react';


class MovieCard extends Component {
    render() {
        
      console.log(this.props.movieObj)
        return (
            <div className="Movie-Posters">
       
     
              
               <Grid.Row columns={3}>
                   <Grid.Column>
                   

               <Image src={this.props.movieObj.img_url} size='medium' />
               </Grid.Column>
               </Grid.Row>
               
               
            </div>
        );
    }
}

export default MovieCard;
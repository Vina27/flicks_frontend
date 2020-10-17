import React, { Component } from 'react';
import { Divider, Image } from 'semantic-ui-react';


class MovieCard extends Component {
    render() {
        
      console.log(this.props.movieObj)
        return (
            <div>

               <p>This is MovieCard</p> 
               
               <Image src={this.props.movieObj.img_url} size='medium' />

            </div>
        );
    }
}

export default MovieCard;
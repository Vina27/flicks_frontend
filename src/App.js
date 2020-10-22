import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import MovieContainer from "./components/MovieContainer"
import MovieShowContainer from "./components/MovieShowContainer"



import { Route, Switch, Link, NavLink } from 'react-router-dom'

class App extends Component {
  //class componenet use this keyword
  state = {
    movies: []
  }
//fetching data from backend 
  componentDidMount(){
    fetch(`http://localhost:3000/movies`)
    .then(resp => resp.json())
    .then(moviesArr => {
      //setting state to movies thats coming from backend 
      this.setState({
        movies: moviesArr
      })
      //console.log(moviesArr)
    })
  }


  render () {
    
    //we are checking if state is filled with movies  
    //console.log(this.state.movies)
  return (
    <div className="App">
      <Header />
       {/* <aside className="sidebar">
          <ul>
            <li>
              <Link to=>Home</Link>
            </li>
          </ul>

    </aside>*/}
     
    <Switch>
      {/* SPLASH/LANDING PAGE AT THE TOP */}
   
      <Route path="/" exact render={() =>  <MovieContainer movieArr={this.state.movies}/>} />
      <Route path="/:id" render={() => <MovieShowContainer movieArr={this.state.movies}/>} />

      {/* 404 PAGE AT THE BOTTOM */}
      {/*<Route component={NotFound} />*/}
    </Switch>


     </div>
  )};
}

export default App;

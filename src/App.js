import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import MovieContainer from "./components/MovieContainer"
import MovieShowContainer from "./components/MovieShowContainer"

class App extends Component {
  render () {
  return (
    <div className="App">
      <Header/>
      <MovieContainer/>
      <MovieShowContainer/>
    </div>
  )};
}

export default App;

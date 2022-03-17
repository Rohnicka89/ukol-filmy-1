import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './Header/header.jsx';
import Movies from './movies';
import MovieList from './MovieList/movieList.jsx';


const App = () => {
  return (
    <>
    <Header/>
    <MovieList className = "movie" movies = {Movies}/>
    </>
  )

};

render(<App />, document.querySelector('#app'));

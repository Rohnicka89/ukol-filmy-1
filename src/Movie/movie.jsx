import React from 'react';

import Movies, { movies } from '../movies';
import Actor from '../Actor/actor.jsx';



const Movie = ({title,poster,year,rating,director,genre,cast}) => {
    return (
        <div >
        <h2>{title}</h2>
        <hr/>
        <img src={'../assets/'+poster}/>
        <p>{year}</p>
        <p>{rating}</p>
        <p>{director}</p>
        <p>{genre}</p>
       {/*  <p>{cast.map(herec => <Actor name={herec.name} as={herec.as} key={herec.name}/>)}</p>  */}
        </div>
    )
};

export default Movie;
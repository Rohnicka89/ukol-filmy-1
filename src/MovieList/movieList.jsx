import React from 'react';

import Movie from '../Movie/movie.jsx';

const MovieList = ({movies}) => {
    return(
        <>
            {movies.map (film => 
                            <Movie title={film.title} 
                            poster={film.poster}
                            year={film.year} 
                            rating={film.rating} 
                            director={film.director}
                            genre={film.genre}
                            key={film.id}/>
                        )
            }
        </>
    )
};

export default MovieList;
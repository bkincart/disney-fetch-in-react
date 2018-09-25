import React from 'react';
import MovieTile from './MovieTile'

const MoviesIndex = props => {

  let movies = props.movies.map(movie => {
    return(
      <MovieTile
        key={movie.id}
        movie={movie}
      />
    )
  })
  return(
    <ul>
      {movies}
    </ul>
  );
}

export default MoviesIndex;

import React from 'react';

const MovieTile = props => {
  debugger;
  let runtime = props.movie.runtime + " minutes"
  let textArray = [props.movie.title, props.movie.release_year, runtime]
  let text = textArray.join(" - ")

  return(
    <li>{text}</li>
  )
}

export default MovieTile;

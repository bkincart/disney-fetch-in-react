import React, { Component } from 'react';
import MoviesIndex from '../components/MoviesIndex'

class MoviesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  render() {
    return(
      <div className="container">
        <h1>My Favorite Disney Movies</h1>
        <hr />
        <MoviesIndex
          movies={this.state.movies}
        />
      </div>
    )
  }

}

export default MoviesContainer;

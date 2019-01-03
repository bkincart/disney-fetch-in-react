import React, { Component } from 'react';
import MoviesIndex from '../components/MoviesIndex'
import FormContainer from './FormContainer'

class MoviesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }

    this.addMovie = this.addMovie.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/movies')
    .then(response => response.json())
    .then(body => {
      this.setState({ movies: body.movies })
    })
  }

  addMovie(formPayload) {
    fetch('/api/v1/movies', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(body => {
      let newMovies = this.state.movies.concat(body)
      this.setState({movies: newMovies})
    })
  }

  render() {
    return(
      <div className="container">
        <h1>My Favorite Disney Movies</h1>
        <hr />
        <MoviesIndex
          movies={this.state.movies}
        />
        <FormContainer
          addMovie={this.addMovie}
         />
      </div>
    )
  }

}

export default MoviesContainer;

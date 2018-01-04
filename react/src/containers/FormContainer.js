import React, { Component } from 'react';
import TextInputField from '../components/TextInputField'

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieTitle: '',
      movieReleaseYear: '',
      movieRuntime: ''
    }

    // this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this)
    // this.handleMovieReleaseYearChange = this.handleMovieReleaseYearChange.bind(this)
    // this.handleMovieRuntimeChange = this.handleMovieRuntimeChange.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleMovieTitleChange(event) {
  //   let value = event.target.value
  //   this.setState({ movieTitle: value })
  // }
  //
  // handleMovieReleaseYearChange(event) {
  //   let value = event.target.value
  //   this.setState({ movieReleaseYear: value })
  // }
  //
  // handleMovieRuntimeChange(event) {
  //   let value = event.target.value
  //   this.setState({ movieRuntime: value })
  // }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleClearForm() {
    this.setState({
      movieTitle: '',
      movieReleaseYear: '',
      movieRuntime: ''
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    // below has both options for changing strings to integers
    let formPayload = {
      title: this.state.movieTitle,
      release_year: +this.state.movieReleaseYear,
      runtime: parseInt(this.state.movieRuntime, 10)
    }
    this.props.addNewMovie(formPayload);
    this.handleClearForm();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <TextInputField
          label='Movie Title:'
          name='movieTitle'
          value={this.state.movieTitle}
          handleChange={this.handleChange}
        />
        <TextInputField
          label='Movie Release Year:'
          name='movieReleaseYear'
          value={this.state.movieReleaseYear}
          handleChange={this.handleChange}
        />
        <TextInputField
          label='Movie Runtime:'
          name='movieRuntime'
          value={this.state.movieRuntime}
          handleChange={this.handleChange}
        />

        <input className="button" type="submit" value="Submit" />
      </form>
    )
  }
};

export default FormContainer;

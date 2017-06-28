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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      movieTitle: '',
      movieReleaseYear: '',
      movieRuntime: ''
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      title: this.state.movieTitle,
      release_year: parseInt(this.state.movieReleaseYear, 10),
      runtime: parseInt(this.state.movieRuntime, 10)
    }
    this.props.addNewMovie(formPayload);
  }

  render() {
    return(
      <form className='callout' onSubmit={this.handleSubmit}>
        <TextInputField
          label='Movie Title:'
          name='movieTitle'
          content={this.state.movieTitle}
          handleChange={this.handleChange}
        />
        <TextInputField
          label='Movie Release Year:'
          name='movieReleaseYear'
          content={this.state.movieReleaseYear}
          handleChange={this.handleChange}
        />
        <TextInputField
          label='Movie Runtime:'
          name='movieRuntime'
          content={this.state.movieRuntime}
          handleChange={this.handleChange}
        />

        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
};

export default FormContainer;

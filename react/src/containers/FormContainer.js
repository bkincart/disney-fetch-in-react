import React, { Component } from 'react'
import InputField from '../components/InputField'

class FormContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movieTitle: '',
      movieRuntime: '',
      movieReleaseYear: ''
    }

    // this.handleTitleChange = this.handleTitleChange.bind(this)
    // this.handleRuntimeChange = this.handleRuntimeChange.bind(this)
    // this.handleReleaseYearChange = this.handleReleaseYearChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // handleTitleChange(event) {
  //   this.setState({ movieTitle: event.target.value })
  // }
  //
  // handleRuntimeChange(event) {
  //   this.setState({ movieRuntime: event.target.value })
  // }
  //
  // handleReleaseYearChange(event) {
  //   this.setState({ movieReleaseYear: event.target.value })
  // }

  // First, get it working with one handleChange PER input field (as shown above)
  // And `et submit`!
  // Then you can refactor if you choose :)
  handleChange(event) {
    let value = event.target.value
    let name = event.target.name

    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    // Two different ways of changing from string to number below :) 
    let formPayload = {
      title: this.state.movieTitle,
      release_year: parseInt(this.state.movieReleaseYear, 10),
      runtime: +this.state.movieRuntime
    }

    this.props.addMovie(formPayload)
    this.handleClear()
  }

  handleClear() {
    this.setState({
      movieTitle: '',
      movieReleaseYear: '',
      movieRuntime: ''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <InputField
          label='Movie Title'
          name='movieTitle'
          value={this.state.movieTitle}
          handleChange={this.handleChange}
        />
        <InputField
          label='Movie Runtime'
          name='movieRuntime'
          value={this.state.movieRuntime}
          handleChange={this.handleChange}
        />
        <InputField
          label='Movie Release Year'
          name='movieReleaseYear'
          value={this.state.movieReleaseYear}
          handleChange={this.handleChange}
        />
        <input type='submit' className='button' />
      </form>
    )
  }
}

export default FormContainer

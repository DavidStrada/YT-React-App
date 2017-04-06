import React, { Component } from 'react';

class SearchBar extends Component {
  constructor (props) {
    super(props);
    // this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {term: this.props.term}
  }

  onInputChange (term) {
    // console.log(term)
    this.setState({term})
    // console.log(this.state.term, 'state')
  }

  handleSubmit (evt) {
    evt.preventDefault()
    let term = this.state.term
    this.setState({term})
    this.props.onSearchTermChange(term)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          onChange={evt => this.onInputChange(evt.target.value)}
          value={this.state.term}/>
      </form>
    )
  }
}

export default SearchBar;

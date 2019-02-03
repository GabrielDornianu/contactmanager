import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Test extends Component {
  state = {
    title: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title
      }))
  }

  // componentWillMount() {
  //   console.log('Component will mount');
  // }
  //
  // componentWillUpdate() {
  //   console.log('Component will update');
  // }
  //
  // componentDidUpdate() {
  //   console.log('Component did update');
  // }
  //
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('Component will receive props');
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
}

export default Test;

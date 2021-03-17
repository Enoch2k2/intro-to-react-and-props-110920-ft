import React, { Component } from 'react'

class List extends Component {

  render() {
    return (
      <div>
        <p>Header's color is { this.props.color }</p>
      </div>
    )
  }
}

export default List

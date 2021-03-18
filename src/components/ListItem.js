import React, { Component } from 'react';

class ListItem extends Component {

  render() {
    return(
      <div>
        <h3>{ this.props.title }</h3>
        <p>{ this.props.content }</p>
      </div>
    )
  }
}

export default ListItem;
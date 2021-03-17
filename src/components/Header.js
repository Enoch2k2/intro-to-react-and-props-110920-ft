import React from 'react';

class Header extends React.Component {

  handleClick = (e) => {
    this.props.changeColor();
  }

  render() {
    console.log(this.props.color)
    return (
      <div>
        <h1 onClick={ this.handleClick } style={ { color: this.props.color } }>{ this.props.title }</h1>
      </div>
    )
  }
}

Header.defaultProps = {
  name: "Bob"
}

export default Header;
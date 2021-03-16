import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{ this.props.children }</h1>
      </div>
    )
  }
}

Header.defaultProps = {
  name: "Bob"
}

export default Header;
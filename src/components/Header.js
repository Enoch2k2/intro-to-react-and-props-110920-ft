import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {


  render() {

    return (
      <div>
        <Link to='/posts'> See all Posts</Link>
        <br>
        </br>
        <Link to='/posts/new'> Create a new Post</Link>
        <br>
        </br>
      </div>
    )
  }
}

export default Header;
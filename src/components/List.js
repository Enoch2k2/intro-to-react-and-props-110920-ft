import React, { Component } from 'react'
import ListItem from './ListItem';

class List extends Component {

  render() {
    const blogs = this.props.blogs.map( (blog, index) => <ListItem key={ index } title={ blog.title } content={ blog.content } />)
    return (
      <div>
        <h2>Blogs</h2>
        { blogs }
      </div>
    )
  }
}

export default List

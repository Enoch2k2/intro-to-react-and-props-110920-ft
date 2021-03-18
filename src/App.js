import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  state = {
    blogs: []
  }

  addBlog = blog => {
    this.setState({
      blogs: [...this.state.blogs, blog]
    })
  }

  render() {
    return (
      <div className="App">
        <Form addBlog={ this.addBlog } />
        <List blogs={ this.state.blogs } />
      </div>
    );
  }
}

export default App;

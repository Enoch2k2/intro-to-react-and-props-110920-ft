import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  state = {
    blogs: []
  }


  // "DOM COntent Loaded kinda feel"

  // Lifecycle methods ONLY WORK in CLass components. 

  // spelling matters

  componentDidMount() {
    this.getAllPost()
  }

  getAllPost = () => {
    fetch("http://localhost:3001/posts")
    .then(r => r.json())
    .then(data => {
       this.setState({blogs: data})
    })
  }

  addBlog = blog => {
    this.setState({
      blogs: [...this.state.blogs, blog]
    })
  }

  render() {
    return (
        <div className="App">
            <List blogs={ this.state.blogs } />
            <Form  addBlog={ this.addBlog } />
        </div>
    );
  }
}

export default App;

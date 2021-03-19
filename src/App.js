import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <Router>
        <div className="App">
          <Switch>
            <Route 
              exact path="/"
              render={props => <List { ...props } blogs={ this.state.blogs } />}
            />
            <Route 
              exact path="/blogs/new"
              render={props => <Form {...props} addBlog={ this.addBlog } />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

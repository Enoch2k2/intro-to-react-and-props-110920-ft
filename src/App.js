import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';

class App extends Component {
  state = {
    color: "black"
  }

  changeColor = () => {
    this.setState({
      color: this.state.color == "black" ? "blue" : "black"
    })
  }

  render() {
    return (
      <div className="App">
        <Header changeColor={ this.changeColor } color={this.state.color} title="Hello World" />
        <List color={ this.state.color } />
      </div>
    );
  }
}

export default App;

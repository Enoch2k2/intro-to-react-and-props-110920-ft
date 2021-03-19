import React, { Component } from 'react';

class Form extends Component {

  state = {
    title: "",
    content: ""
  }

  handleChange = e => {
    this.setState( prevState => {
      return {
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.addBlog(this.state)

    this.setState({
      title: "",
      content: ""
    })

    
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <h2>Create Blog</h2>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={this.state.title} onChange={ this.handleChange }  />
        </div>
        <br />
        <div>
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" value={ this.state.content } onChange={ this.handleChange }></textarea>
        </div>
        <br />
        <input type="submit" value="Create Blog" />
      </form>
    )
  }
}

export default Form;
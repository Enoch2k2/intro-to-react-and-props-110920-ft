import React, { useState, useEffect } from 'react';



const Form =  (props) => {
  const [title, setTitle] =  useState("")
  const [content, setContent] =  useState("")


  useEffect(() => {
    console.log("I've rerendered")
  },[title])

    // const  [values, setValues] =  useState({
    //   title: "",
    //   content: ""
    // })


    // const handleChange = e => {
    //   setValues({...values, [e.target.name]: e.target.value})
    //   }


    const handleSubmit = e => {
          e.preventDefault();
          let  values = {
            title: title, 
            content: content
          }

          props.addBlog(values)

        //  setValues({
        //    title: "",
        //    content: ""
        //  })
    }




     return (
          <form onSubmit={ handleSubmit }>
            <h2>Create Blog</h2>
            <div>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" value={title} onChange={ e => setTitle(e.target.value) }  />
            </div>
            <br />
            <div>
              <label htmlFor="content">Content</label>
              <textarea id="content" name="content" value={ content } onChange={ e => setContent(e.target.value) }></textarea>
            </div>
            <br />
            <input type="submit" value="Create Blog" />
          </form>
        )



}

// class Form extends Component {

//   state = {
//     title: "",
//     content: ""
//   }


//  // this particular function allows us for a more control flow state 

//  // THIS MUST RETURN A BOOLEAN 
//   // shouldComponentUpdate(nextProps, nextState) {
//   //    console.log(nextProps, "this is the next props");
//   //    console.log(nextState, "this is the nextState");
//   //    if(this.state.title !== nextState.title) {
//   //      return true
//   //    } else {
//   //      return false
//   //    }
//   // }


//   componentDidUpdate(prevProps, prevState) {
//     console.log("Updated");
//     console.log(prevProps, "this was the previous Props");
//     console.log(prevState, "this was the previous State")
//   }


//   handleChange = e => {
//     this.setState( prevState => {
//       return {
//         [e.target.name]: e.target.value
//       }
//     })
//   }

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.addBlog(this.state)

//     this.setState({
//       title: "",
//       content: ""
//     })

    
//   }

//   render() {
//     return (
//       <form onSubmit={ this.handleSubmit }>
//         <h2>Create Blog</h2>
//         <div>
//           <label htmlFor="title">Title</label>
//           <input type="text" id="title" name="title" value={this.state.title} onChange={ this.handleChange }  />
//         </div>
//         <br />
//         <div>
//           <label htmlFor="content">Content</label>
//           <textarea id="content" name="content" value={ this.state.content } onChange={ this.handleChange }></textarea>
//         </div>
//         <br />
//         <input type="submit" value="Create Blog" />
//       </form>
//     )
//   }
// }

export default Form;
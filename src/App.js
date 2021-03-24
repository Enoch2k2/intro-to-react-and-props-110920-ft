import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Form';
import List from './components/List';




const App = () => {
 // Use State ALWAYS returns an ARRAY with 2 elements 
  const [blogs, setBlogs ] = useState([])
  // const [id, setId] = useState(1)


  useEffect(() => {
    console.log("HI there you're in useEffect")
    getAllPost()
    // fetch(`http://localhost:3001/posts/${id}`)
    //       .then(r => r.json())
    //       .then(data => {
    //         setBlogs(data)
    //       })

    // WHen you return a function useEffect will treat this as componentWillUnmount
  },[])



// const changeId = () => {
//   setId(id + 1 )
// }


  const getAllPost = () => {
        fetch("http://localhost:3001/posts")
        .then(r => r.json())
        .then(data => {
          setBlogs(data)
        })
      }





  const addBlog = blog => {
    setBlogs( [...blogs, blog])
  }
 

  return (
        <div className="App">
            <List blogs={ blogs } />
            <Form  addBlog={ addBlog } />
        </div>
    );

}

// class App extends Component {
//   state = {
//     blogs: []
//   }


//   // "DOM COntent Loaded kinda feel"

//   // Lifecycle methods ONLY WORK in CLass components. 

//   // spelling matters

//   componentDidMount() {
//     this.getAllPost()
//   }

//   getAllPost = () => {
//     fetch("http://localhost:3001/posts")
//     .then(r => r.json())
//     .then(data => {
//        this.setState({blogs: data})
//     })
//   }

//   addBlog = blog => {
//     this.setState({
//       blogs: [...this.state.blogs, blog]
//     })
//   }

//   render() {
//     return (
//         <div className="App">
//             <List blogs={ this.state.blogs } />
//             <Form  addBlog={ this.addBlog } />
//         </div>
//     );
//   }
// }

export default App;
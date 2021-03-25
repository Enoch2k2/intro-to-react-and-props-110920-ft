import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Form from './components/Form';
import List from './components/List';
import Header from './components/Header';
import Testing from './components/Testing';



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
    <Router>
        <div className="App">
          <Header />
          <Switch>

              <Route exact path="/posts"> 
                <List blogs={ blogs } />
              </Route>

              <Route exact path="/posts/new"> 
                <Form  addBlog={ addBlog } />
              </Route>

              <Route path="/posts">
                <div> Oops nothing is availbale at this url</div>
              </Route>

              <Route  exact path="/testing/:id/" component={(routerProps) => {
                const findObj = blogs.find(el => el.id == routerProps.match.params.id)
                return  <Testing obj={findObj}/>
            }
             } />

          </Switch>


        </div>
     </Router>
  )
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
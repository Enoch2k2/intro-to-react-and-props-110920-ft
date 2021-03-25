import { Link } from "react-router-dom";

// class ListItem extends Component {

//   render() {
//     const { title, content } = this.props;
//     return(
//       <div>
//         <h3>{ title }</h3>
//         <p>{ content }</p>
//       </div>
//     )
//   }
// }

const ListItem = ({ id,  title, content }) => (
  <div>
    <div>
      <h3><Link to={`/testing/${id}`}>{ title }</Link></h3>
      <p>{ content }</p>
    </div>
  </div>
);

export default ListItem;
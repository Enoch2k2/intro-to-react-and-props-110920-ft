// import React from 'react';

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

const ListItem = ({ title, content }) => (
  <div>
    <div>
      <h3>{ title }</h3>
      <p>{ content }</p>
    </div>
  </div>
);

export default ListItem;
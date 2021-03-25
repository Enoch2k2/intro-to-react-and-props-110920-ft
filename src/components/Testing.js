import React from 'react';


class Testing extends React.Component {


  render() {
      console.log(this.props.obj)
    return (
        <div>
            { this.props.obj ?  
            <div>
                 <h3>{ this.props.obj.title }</h3>
                <p>{ this.props.obj.content }</p>
            </div> :
            <div> Nothing to display</div> 
            }

      </div>
    )
  }
}

export default Testing;
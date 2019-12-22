import React, { Component } from 'react';

class ButtonConvDel extends Component {

  render(){
    return (
      <div className='aeraButtons'>
        <button onClick = {this.props.delet}>Reset</button>
      </div>
    );
  }
}

export default ButtonConvDel;
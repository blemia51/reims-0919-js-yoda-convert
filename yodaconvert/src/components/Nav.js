import React from 'react';
import '../App.css';


function Nav(props) {
  return (
    <div>
    <div className = 'navbar'>
      <div >
        <h1><img src='logoMkdown.png' alt='logo' className='navbar_title'/></h1>
      </div>
    </div>
    <div style={{display:'flex', alignItems:'center'}}>
    <div className='search-field'>
      <input  type='text' onChange={props.searchField} value={props.input} id='searchField' placeholder ='Search Key word'/>
    </div>
    <div>
    <p style={{color:'yellow',paddingLeft:'15px'}}>Key words : {props.onSearch()}<span style={{paddingLeft:'15px'}}>  Words : {props.counter}</span><span style={{paddingLeft:'15px'}}> Char : 0 </span></p>
    </div>
    </div>
    </div>
  );
}

export default Nav;
import React from 'react';
import '../App.css';


function Nav(props) {
  return (
    <div className = 'navbar'>
      <div>
        <h1><img src='logoMkdown.png' alt='logo' className='navbar_title'/></h1>
      </div>
      <div className='search-field'>
        <input onChange={props.searchField} value={props.input} id='searchField' type ='text' placeholder ='Search a word'></input>
        
      </div>
      <div>
        <p style={{color:'yellow'}}>Key words : {props.onSearch()}</p>
      </div>
    </div>
  );
}

export default Nav;
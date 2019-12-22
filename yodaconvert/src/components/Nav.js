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
        <img src='search-svg.svg' className='search-button' alt='button_search' />
      </div>
      <div>
        <p>Nb occurrence : {props.onSearch()}</p>
      </div>
    </div>
  );
}

export default Nav;
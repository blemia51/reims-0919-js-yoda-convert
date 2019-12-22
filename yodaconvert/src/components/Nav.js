import React from 'react';
import '../App.css';


function Nav(props) {
  return (
    <div className = 'navbar_container'>
      <div>
        {/*<h1><img src='logo_markode.png' alt='logo' className='navbar_title'/></h1>*/}
      </div>
      <div className='search_container'>
        <input onChange={props.searchField} value={props.input} id='searchField' type ='text' placeholder ='Rechercher un mot ou chaîne'></input>
        <img src='icon_search.svg' className='navbar_search_btn' alt='button_search' />
      </div>
      <div>
        <p>Nb occurrence : {props.onSearch()}</p>
      </div>
    </div>
  );
}

export default Nav;
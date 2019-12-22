import React from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"; 
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
    
        <BrowserRouter>
          
          <Switch>
            <Route exact path="/" exact component={WelcomePage} />
            <Route path="/main" component={MainPage} />
          </Switch>
          
        </BrowserRouter> 

        

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Dashboard from './Containers/Dashboard/Dashboard';


class App extends Component {
  render (){
    return (
    <div className="App">
      <Dashboard>
        hi im sleepy
      </Dashboard>
    </div>
    );
  }
}

export default App;

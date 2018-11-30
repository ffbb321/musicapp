import React, { Component } from 'react';

import {BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom'
import './App.css';
import ranking from './pages/ranking/ranking';
import home from './pages/home/Home'
import Tab from './common/tab.jsx'
import Header from './common/header.jsx'

export default class App extends Component {
  render() {
    return (
     <Router>
       <div className="app">
         <Header/>
          <Switch>
            <Route path="/ranking" component={ranking}/>  
            <Route path="/" component={home}/>
          </Switch>
       <Tab/>
       </div>
     </Router>
    );
  }
 
}


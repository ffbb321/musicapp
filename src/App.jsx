import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink as Link, Redirect, Switch} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
                 <Switch>
                 <Route path="/one" />
                 </Switch>
                  <div className="App">
                  <h1>测试</h1>
                 </div>
      </Router>
    );
  }
}

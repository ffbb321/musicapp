import React, { Component } from 'react';

import {BrowserRouter as Router, Route, NavLink as Link, Redirect, Switch} from 'react-router-dom'
import './App.css';
import ranking from './pages/ranking/ranking.jsx';

class App extends Component {
  render() {
    return (
     <Router>
       <div className="app">
          <Switch>
            <Route path="/ranking" component={ranking}/>  
          </Switch>
       </div>
     </Router>
    );
  }
}

export default App;

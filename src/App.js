import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {List, Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import Login from './Components/login/loginPage.js';

function App() {
  return (
    <div id="fullPage">
    <Router>
        <Switch>
          <Route exact path="/potluck/login" component={Login}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;

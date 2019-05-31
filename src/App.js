import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {List, Image} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import Home from './Components/home/homePage.js';
import Groceries from './Components/groceries/groceriesPage.js'
import Navbar from './Components/navbar/navbar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      confirmLogin: null,
      navbar: (<Navbar user={null}/>),
      mainAPI: "https://grocery-potluck-app.herokuapp.com/api"
    };
    this.loginUser = this.loginUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  loginUser = (user) => {
    console.log(user);
    this.setState({user: user, navbar: (<Navbar user={user} logout={() => this.logoutUser()}/>)});
  }
  logoutUser = () => {
    this.setState({user: null, navbar:(<Navbar user={null}/>)})
  }

  render() {
      return (
        <div id="fullPage">
        <Router>
          {this.state.navbar}
            <Switch>
              <Route
                default
                path="/potluck/home"
                render = {(props) => 
                  <Home 
                    {...props} 
                    user={this.state.user}
                    login={(i) => this.loginUser(i)} 
                    logout={(i) => this.logoutUser(i)}
                    />
                }
              />
              <Route
                path="/potluck/groceries"
                render = {(props) => 
                  <Groceries
                    {...props} 
                    user={this.state.user}
                    />
                }
              />
            </Switch>
        </Router>
        </div>
      );
  }
}

export default App;

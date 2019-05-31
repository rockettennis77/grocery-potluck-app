import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment, Loader } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.scss';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "undefined",
      password: "undefined",
      error: "",
      auth: null
    };
  }

  onFormChange(event) {
    if(event.target.id == 'username'){
      this.setState({'username': event.target.value});
    }
    if(event.target.id == 'password'){
      this.setState({'password': event.target.value});

    }
  }
  checkLogin() {
    this.setState({error: (
      <Loader active/>
    )})
    let curr = this;
    var user = this.state.username;
    var pass = this.state.password;
    var url = "https://grocery-potluck-app.herokuapp.com/api/users?username="+user+"&password="+pass;
    console.log(url);
    if(user == "undefined" || pass == "undefined"){
      this.setState({error: "Must enter username and password"});
      return;
    }
    else{
      axios.get(url).then((res) => {
        console.log(res);
        var message = res.data.message;
        var data = res.data.data;
        if(data == {}){
          this.setState({error: message});
          return;
        }
        else{
          curr.props.login(res.data.data);
          this.setState({error: "", auth: "YES"});
        }
      }).catch((err) => {
        console.log(err);
        this.setState({error: "Username or password was incorrect"});
      });
    }
  }
  render() {
    var infoSpot = null;
    const Gainsboro = '#DAF2DA';
    const RussianGreen = '#629460';
    const DarkSeaGreen = '#8Db580';
    const CambridgeBlue = '#87C1B0';
    const KombuGreen = '#2E4230';
    const styles = {
      darkGreenLight: {
          'background-color': RussianGreen,
          'color': Gainsboro
      },
      darkGreen: {
          'background-color': RussianGreen,
      },
      light: {
          'color': Gainsboro
      },
      lightBackground: {
        'background-color': Gainsboro,
        'color': KombuGreen
      },
      blueButton: {
        'background-color': CambridgeBlue,
        'color': KombuGreen
      }
  }
  return (
    <div class="login_col">
      <Form size='large' onChange={this.onFormChange.bind(this)}>
      <Segment stacked>
        <Header as='h2'>
                  Sign in to see your pantry and recipes!
        </Header>
        <Form.Input id='username' icon='user' iconPosition='left' placeholder='Username' />
        <Form.Input id='password' placeholder='Password' type='password'/>
        <p class="error_message">
          {this.state.error}
        </p>
        <Button style={styles.blueButton} fluid size='medium' onClick={() => this.checkLogin()}>
          Login
        </Button>
        <Loader />
      </Segment>
    </Form>
  </div>);
  }
}

export default Login;
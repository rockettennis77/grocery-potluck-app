import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './login.scss';

class Login extends Component {
  render() {
    return (
    <div id="main" style={{'background-color': "#A5ED2A"}}>
      <div id="login_div">
        <Grid id='grid_wrap' textAlign='center' verticalAlign='middle'>
          <Grid.Column id='login_col'>
            <Header style={{color: "#F5FBEF"}} as='h1' textAlign='center'>
                Potluck
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input icon='user' iconPosition='left' placeholder='Username' />
                <Form.Input placeholder='Password' type='password'/>
                <Link to="/CS498RK_FINAL_PROJECT/home">
                  <Button fluid size='medium'>
                    Login
                  </Button>
                </Link>
              </Segment>
            </Form>
            <div id="sign_up">
                <Link to="/CS498RK_FINAL_PROJECT/signup/">
                    <Message>
                        Sign Up
                    </Message>
                </Link>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </div>
    );
  }
}

export default Login;
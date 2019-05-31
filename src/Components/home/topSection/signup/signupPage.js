import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './signupPage.scss';

class SignUp extends Component {
  render() {
    return (
    <div>
        <Form size='large'>
            <Segment stacked>
                <Header as='h2'>
                    Welcome to Potluck!
                </Header>
                <Form.Input icon='user' iconPosition='left' placeholder='Username' />
                <Form.Input placeholder='Full Name' />
                <Form.Input placeholder='Email' />
                <Form.Input placeholder='Password' type='password'/>
                <Button fluid size='medium'>
                    Sign Up
                </Button>
                <br/>
              </Segment>
            </Form>
    </div>
    );
  }
}

export default SignUp;
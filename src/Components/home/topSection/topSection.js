import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './topSection.scss';

import Login from './login/loginPage.js';
import SignUp from './signup/signupPage.js';
import MiniProfile from './miniProfile/miniProfile.js';

class TopSection extends Component {
    constructor() {
        super();
        this.state = {
          infoSpot: "login"
        };
      }
    
      switchToSignUp = () => {
        if(this.state.infoSpot == "login"){
          this.setState({infoSpot: "signup"});
        }
        else{
          this.setState({infoSpot: "login"});
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
        if(this.props.user != null){
            infoSpot = (
            <div class='profile_col'>
                <MiniProfile user={this.props.user}/>
            </div>);
        }
        else if(this.state.infoSpot == "login"){
          infoSpot = (
            <div class="signup_col">
                <Login 
                    login={(i) => this.props.login(i)} 
                    logout={(i) => this.props.logout(i)}
                />
                <div id="sign_up" onClick={() => this.switchToSignUp()}>
                    <Message style={styles.blueButton}> 
                        Sign Up
                    </Message>
                </div>
            </div>
          );
        }
        else{
          infoSpot = (
          <div class="signup_col">
            <SignUp/>
            <div id="sign_up" onClick={() => this.switchToSignUp()}>
                <Message style={styles.blueButton}> 
                    Already have an account? Log in!
                </Message>
            </div>
          </div>);
        }
        return (
        <div id='main' style={styles.lightBackground}>
          <div>
            <Grid columns='equal'>
              <Grid.Row>
              <Grid.Column>
                <div class='title_col' style={styles.lightBackground}>
                    <p class='title'>
                        Potluck
                    </p>
                    <p>
                        Manage your groceries with ease!
                    </p>
                </div>
              </Grid.Column>
              <Grid.Column >
                {infoSpot}
              </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
        );
      }
    }

export default TopSection;
import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Loader } from 'semantic-ui-react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAppleAlt, faUserSecret, faUser, faUserNinja, faBook, faShoppingBasket, faCarrot, faBreadSlice, faBacon, faCheese, faLemon, faDesktop, faEdit, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './userInfo.scss';

library.add(
  faUser, 
  faBook,
  faShoppingBasket,
  faCarrot,
  faBacon,
  faLemon,
  faDesktop,
  faEdit,
  faUserGraduate,
  faUserNinja,
  faUserSecret
  );
class UserInfo extends Component {
    constructor() {
        super();
        this.state = {};
      }

      render() {
        var infoSpot = null;
        const Gainsboro = '#DAF2DA';
        const RussianGreen = '#629460';
        const DarkSeaGreen = '#8Db580';
        const CambridgeBlue = '#87C1B0';
        const KombuGreen = '#2E4230';
        console.log(this.props.user);
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
          },
          darkBack: {
              'background-color': CambridgeBlue
          }
      }
        return (
          <Grid celled='internally' columns='equal'>
            <Grid.Row>
              <Grid.Column>
              <Link to="/potluck/groceries">  
                <div class="gridCell">
                  <h2>Grocery List</h2>
                  <FontAwesomeIcon icon="shopping-basket" size="6x" style={{color: RussianGreen, margin: '20px'}}/>
                  <p>{this.props.user.PantryList.length} Ingredients Available</p>
                </div>
                </Link>
              </Grid.Column>
              <Grid.Column>
              <Link to="/potluck/recipes">
                <div class="gridCell">
                  <h2>Find a Recipe</h2>
                  <FontAwesomeIcon icon="book" size="6x" style={{color: RussianGreen, margin: '20px'}}/>
                </div>
                </Link>
              </Grid.Column>
              <Grid.Column>
              <Link to="/potluck/friends">
                  <h2>My Friends</h2>
                  <FontAwesomeIcon 
                    icon="user-graduate"
                    size="4x" 
                    style={{color: RussianGreen, margin: '0px'}}/>
                  <FontAwesomeIcon 
                    icon="user" 
                    size="5x" 
                    style={{color: RussianGreen, margin: '0px', 'margin-left': '8px', 'margin-bottom': '5px'}}/>
                  <FontAwesomeIcon icon="user-ninja" size="4x" style={{color: RussianGreen, margin: '0px', 'margin-left': '8px'}}/>
                  <div class="gridCell3">
                  <p>{this.props.user.Friends.length} Friends</p>
                </div>
                </Link>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <div class="gridCell">
                <h2>My Potlucks</h2>
                <FontAwesomeIcon 
                    icon="user-graduate"
                    size="3x" 
                    style={{color: RussianGreen, margin: '0px'}}/>
                  <FontAwesomeIcon 
                    icon="user" 
                    size="5x" 
                    style={{color: RussianGreen, margin: '0px', 'margin-left': '8px', 'margin-bottom': '5px'}}/>
                  <FontAwesomeIcon icon="user-ninja" size="3x" style={{color: RussianGreen, margin: '0px', 'margin-left': '8px'}}/>
                  <br />
                  <FontAwesomeIcon 
                    icon="carrot" 
                    size="4x" 
                    style={{color: RussianGreen, margin: '0px'}}/>
                  <FontAwesomeIcon 
                    icon="lemon" 
                    size="4x" 
                    style={{color: RussianGreen, margin: '0px'}}/>
                  <FontAwesomeIcon icon="bacon" size="3x" style={{color: RussianGreen, margin: '0px', 'margin-left': '8px'}}/>
                  <p>0 Potlucks</p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div class="gridCell">
                  <h2>My Recipes</h2>
                  <FontAwesomeIcon icon="edit" size="6x" style={{color: RussianGreen, margin: '20px'}}/>
                  <p>6 Custom Recipes</p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div class="gridCell">
                  <h2>Github Link</h2>
                  <FontAwesomeIcon icon="desktop" size="6x" style={{color: RussianGreen, margin: '20px'}}/>
                </div>
              </Grid.Column>
            </Grid.Row>
        </Grid>
        );
      }
    }

export default UserInfo;
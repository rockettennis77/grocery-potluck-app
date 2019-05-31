import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Loader } from 'semantic-ui-react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAppleAlt, faUserSecret, faUser, faUserNinja, faBook, faShoppingBasket, faCarrot, faBreadSlice, faBacon, faCheese, faLemon, faDesktop, faEdit, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import './defaultInfo.scss';

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
class DefaultInfo extends Component {
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
                <div class="gridCell">
                  <FontAwesomeIcon icon="shopping-basket" size="6x" style={{color: RussianGreen, margin: '20px'}}/>
                  <p>Keep track of your ingredients to make your next grocery run easier!</p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div class="gridCell">
                  <FontAwesomeIcon icon="book" size="6x" style={{color: RussianGreen, margin: '20px'}}/>
                  <p>Search a database of recipes based on the ingredients that you have!</p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div class="gridCell">
                  <FontAwesomeIcon icon="user-secret" size="6x" style={{color: RussianGreen, margin: '20px'}}/>
                  <p>Only your friends can see your recipes and pantry!</p>
                </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <div class="gridCell2">
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
                </div>
                <p style={{'font-weight': 'bold', 'font-size': '16px', 'margin-top': '40px'}}>
                  Collaborate with your friends to have your own potlucks!
                </p>
              </Grid.Column>
              <Grid.Column>
                <div class="gridCell">
                  <FontAwesomeIcon icon="edit" size="6x" style={{color: RussianGreen, margin: '20px'}}/>
                  <p>Write down your own recipes for your friends and followers to see!</p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div class="gridCell">
                  <FontAwesomeIcon icon="desktop" size="6x" style={{color: RussianGreen, margin: '20px'}}/>
                  <p>This app is experimental and meant for my resume!</p>
                </div>
              </Grid.Column>
            </Grid.Row>
        </Grid>
        );
      }
    }

export default DefaultInfo;
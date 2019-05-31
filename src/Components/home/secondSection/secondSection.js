import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Loader } from 'semantic-ui-react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAppleAlt, faUserSecret, faUser, faUserNinja, faBook, faShoppingBasket, faCarrot, faBreadSlice, faBacon, faCheese, faLemon, faDesktop, faEdit, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import './secondSection.scss';

import DefaultInfo from './defaultPage/defaultInfo.js';
import UserInfo from './userInfo/userInfo.js';

class SecondSection extends Component {
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
      var grid = (<DefaultInfo />);
      if(this.props.user != null){
        grid = (<UserInfo user={this.props.user} />);
      }
        return (
        <div id='main'>
            {grid}
        </div>
        );
      }
    }

export default SecondSection;
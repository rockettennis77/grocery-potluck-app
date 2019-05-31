import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './homePage.scss';

import TopSection from './topSection/topSection.js';
import SecondSection from './secondSection/secondSection.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  
  render() {
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
      <div>
        <TopSection 
          user={this.props.user}
          login={(i) => this.props.login(i)} 
          logout={(i) => this.props.logout(i)}
        />
        <div class="blue_divider" style={{'background-color': CambridgeBlue}}></div>
        <div class="second_section">
          <SecondSection 
            user={this.props.user}
          />
        </div>
        <div class="green_divider" style={{'background-color': KombuGreen}}></div>
      </div>
    );
  }
}

export default Home;
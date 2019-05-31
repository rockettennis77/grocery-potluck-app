import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './miniProfile.scss';
import { fbind } from 'q';


class MiniProfile extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      picture: 'https://graph.facebook.com/100001320619073/picture?width=800'
    };
  }

  componentDidMount() {
      this.setState({user: this.props.user});
  }
  render() {
    var infoSpot = null;
    var user = this.props.user;
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
        <Image src={this.state.picture} size='medium' circular />
        <div>
            <p class="fullname">{user.fullName}</p>
            <p class="username">{user.username}</p>
        </div>
    </div>);
  }
}

export default MiniProfile;
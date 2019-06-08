import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
//import { Link } from 'react-router-dom';
//import axios from 'axios';
import './groceriesPage.scss';

import GroceryList from './groceryList/groceryList.js';
import PantryList from './pantryList/pantryList.js';


class Groceries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isRedirect: null
    };
  }
  
  componentDidMount () {
      this.setState({user: this.props.user});
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
        <Grid columns={2} divided> 
          <Grid.Row>
            <Grid.Column >
              <div class="gridColumn">
                <PantryList user={this.props.user} />
              </div>
            </Grid.Column>
            <Grid.Column class="gridColumn">
            <div class="gridColumn">
              <GroceryList user={this.props.user} />
            </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Groceries;
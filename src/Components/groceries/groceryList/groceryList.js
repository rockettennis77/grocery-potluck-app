import React, { Component } from 'react';
import { Button, Grid, Header, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './groceryList.scss';

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      groceries: null
    };
  }
  
  componentDidMount () {
    var groceryData = [];
    var grocURL = "https://grocery-potluck-app.herokuapp.com/api/ingredient"
    var promises = []
    var groceryIDs = this.props.user.ingredients;
    groceriesIDs.map((groceryID) => {
        
    });
    this.setState({
        user: this.props.user,
    });
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
    var groceries = this.state.groceries;
    var groceryList = groceries.map((gro) => {});
    return (
      <div>
        <List divided relaxed>

        </List>
      </div>
    );
  }
}

export default GroceryList;
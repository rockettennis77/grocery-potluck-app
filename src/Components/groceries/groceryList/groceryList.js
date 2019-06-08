import React, { Component } from 'react';
import {List, Loader, Header} from 'semantic-ui-react';
import { BrowserRouter as Redirect } from "react-router-dom";
import axios from 'axios';
import './groceryList.scss';

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      groceryData: [],
      groceryDiv: <Loader active />
    };
  }
  
  componentDidMount () {
    // var groceryData = [];
    // var userID = this.props.user._id;
    // var grocURL = "https://grocery-potluck-app.herokuapp.com/api/userIngredients?userID=" + userID;
    // axios.get(grocURL).then((res) => {
      var groceryData = [{Name: "Broccoli"},{Name: "Carrots"},{Name: "Peppers"}];
      var groceryList = groceryData.map((pan) => (
        <div class="groceryListItem">
          <List.Item>
              <List.Header>{pan.Name}</List.Header>
              <div class="groceryListSub">
                Subtitle Information
              </div>
          </List.Item>
        </div>
      ));
      this.setState({
        user: this.props.user,
        groceryData: groceryData,
        groceryDiv: groceryList

      });
    //});
    return groceryData;
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
    console.log(this.state.groceryData);
    return (
      <div class="main">
        <Header as='h2'>
          Grocery List
        </Header>
        <List size='massive'>
          <div class='groceryListContainer'>
            {this.state.groceryDiv}
          </div>
        </List>
      </div>
    );
  }
}

export default GroceryList;
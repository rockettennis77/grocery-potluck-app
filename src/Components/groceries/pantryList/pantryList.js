import React, { Component } from 'react';
import {List, Loader, Header} from 'semantic-ui-react';
import { BrowserRouter as Redirect } from "react-router-dom";
import axios from 'axios';
import './pantryList.scss';

class PantryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      pantryData: [],
      pantryDiv: <Loader active />
    };
  }
  
  componentDidMount () {
    // var groceryData = [];
    // var userID = this.props.user._id;
    // var grocURL = "https://grocery-potluck-app.herokuapp.com/api/userIngredients?userID=" + userID;
    // axios.get(grocURL).then((res) => {
      var pantryData = [{Name: "Salmon"}, {Name: "Chicken"},{Name: "Pork"}]//res.data.data;
      var pantryList = pantryData.map((pan) => (
          <div class="pantryListItem">
            <List.Item>
                <List.Header>{pan.Name}</List.Header>
                <div class="pantryListSub">
                  Subtitle Information
                </div>
            </List.Item>
          </div>
      ));
      console.log(pantryData);
      this.setState({
        user: this.props.user,
        pantryData: pantryData,
        pantryDiv: pantryList,
      });
    //});
    return pantryData;
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
      <div class="main">
        <Header as='h2' class="pantryTitle">
          My Pantry
        </Header>
        <List size='massive'>
          <div class='pantryListContainer'>
            {this.state.pantryDiv}
          </div>
        </List>
      </div>
    );
  }
}

export default PantryList;
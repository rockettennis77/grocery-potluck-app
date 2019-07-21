import React, { Component } from 'react';
import {List, Loader, Header, Popup, Button} from 'semantic-ui-react';
import { BrowserRouter as Redirect } from "react-router-dom";
import axios from 'axios';
import './groceryList.scss';

import GrocerySearch from "../grocerySearch/grocerySearch.js";


class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      groceryData: [],
      ingredients: [],
      groceryDiv: <Loader active />
    };
  }
  removeIngredient = (ingrID, ingrName, addToPantry) => {
    var desc;
    if(addToPantry){
      var newDate = new Date();
      var month = newDate.getMonth();
      var day = newDate.getDate();
      var year = newDate.getFullYear();
      var FullDate = month + "/"+ day + "/" + year;
      desc = "Added from grocery list on " + FullDate;
    }
    else{
      desc = "";
    }
    this.props.remove(ingrID, ingrName, desc, addToPantry);
  }
  compare(a,b) {
    const nameA = a.Name;
    const nameB = b.Name;
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  componentWillReceiveProps(newProps){
    var grocery = newProps.grocery.sort(this.compare);
      if(grocery != null){
        var groceryList = grocery.map((ingr) => (
              <div class="groceryListItem">
                <List.Item>
                <List.Header>{ingr.Name}</List.Header>
                  <div class="listContent">
                    <List.Content>
                      <div class="groceryListSub">
                        {ingr.Desc}
                      </div> 
                    </List.Content>
                    <Popup trigger={<Button>Remove</Button>} flowing hoverable>
                          <Header as='h4'>Add to Pantry?</Header>
                          <Button onClick={() => this.removeIngredient(ingr._id, ingr.Name, true)}>Yes</Button>
                          <Button onClick={() => this.removeIngredient(ingr._id, ingr.Name, false)}>No</Button>
                      </Popup>
                  </div>
                </List.Item>
              </div>
        ));
        this.setState({
          user: newProps.user,
          groceryData: grocery,
          groceryDiv: groceryList,
          ingredients: newProps.ingredients 
        });
      }
  }

  componentDidMount () {
      var grocery = this.props.grocery;
      if(grocery != null){
        var groceryList = grocery.map((ingr) => (
              <div class="groceryListItem">
                <List.Item>
                <List.Header>{ingr.Name}</List.Header>
                  <div class="listContent">
                    <List.Content>
                      <div class="groceryListSub">
                        {ingr.Desc}
                      </div> 
                    </List.Content>
                    <Popup trigger={<Button>Remove</Button>} flowing hoverable>
                          <Header as='h4'>Add to Pantry?</Header>
                          <Button onClick={() => this.removeIngredient(ingr._id, ingr.Name, true)}>Yes</Button>
                          <Button onClick={() => this.removeIngredient(ingr._id, ingr.Name, false)}>No</Button>
                      </Popup>
                  </div>
                </List.Item>
              </div>
        ));
        var ingredients = this.props.ingredients;
        this.setState({
          user: this.props.user,
          groceryData: grocery,
          groceryDiv: groceryList,
          ingredients: ingredients 
        });
      }
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
    var search = <GrocerySearch 
                    source={this.state.ingredients} 
                    listname="Groceries"
                    handler={(ingrID, ingrName, ingrDescription) => this.props.add(ingrID, ingrName, ingrDescription)}
                  />;
    return (
      <div class="main">
        <Header as='h2'>
          Grocery List
        </Header>
        <List size='huge'>
          <div class='groceryListContainer'>
            {this.state.groceryDiv}
          </div>
        </List>
        <div class="grocerySearch">
        {search}
        </div>
      </div>
    );
  }
}

export default GroceryList;
import React, { Component } from 'react';
import {List, Loader, Header, Button, Popup} from 'semantic-ui-react';
import { BrowserRouter as Redirect } from "react-router-dom";
import axios from 'axios';
import './pantryList.scss';

import GrocerySearch from "../grocerySearch/grocerySearch.js";


class PantryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      pantryData: [],
      pantryDiv: <Loader active />,
      ingredients: [],
    };
  }

  removeIngredient = (ingrID, ingrName, addToGrocery) => {
    var desc;
    if(addToGrocery){
      var newDate = new Date();
      var month = newDate.getMonth();
      var day = newDate.getDate();
      var year = newDate.getFullYear();
      var FullDate = month + "/"+ day + "/" + year;
      desc = "Ran out on " + FullDate;
    }
    else{
      desc = "";
    }
    this.props.remove(ingrID, ingrName, desc, addToGrocery);
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
    var pantry = newProps.pantry.sort(this.compare);
      if(pantry != null){
        var pantryList = pantry.map((ingr) => (
              <div class="pantryListItem">
                <List.Item>
                <List.Header>{ingr.Name}</List.Header>
                  <div class="listContent">
                    <List.Content>
                      <div class="pantryListSub">
                        {ingr.Desc}
                      </div> 
                    </List.Content>
                    <Popup trigger={<Button>Ran out</Button>} flowing hoverable>
                          <Header as='h4'>Add to Grocery List?</Header>
                          <Button onClick={() => this.removeIngredient(ingr._id, ingr.Name, true)}>Yes</Button>
                          <Button onClick={() => this.removeIngredient(ingr._id, ingr.Name, false)}>No</Button>
                      </Popup>
                  </div>
                </List.Item>
              </div>
        ));
        this.setState({
          user: newProps.user,
          pantryData: pantry,
          pantryDiv: pantryList,
          ingredients: newProps.ingredients 
        });
      }
  }
  componentDidMount () {
      var pantry = this.props.pantry;
      if(pantry != null){
        var pantryList = pantry.map((ingr) => (
              <div class="pantryListItem">
                <List.Item>
                <List.Header>{ingr.Name}</List.Header>
                  <div class="listContent">
                    <List.Content>
                      <div class="pantryListSub">
                        {ingr.Desc}
                      </div> 
                    </List.Content>
                    <Popup trigger={<Button>Ran out</Button>} flowing hoverable>
                          <Header as='h4'>Add to Grocery List?</Header>
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
          pantryData: pantry,
          pantryDiv: pantryList,
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
        <Header as='h2' class="pantryTitle">
          My Pantry
        </Header>
        <List size='huge'>
          <div class='pantryListContainer'>
            {this.state.pantryDiv}
          </div>
        </List>
        <div class="grocerySearch">
        {search}
        </div>
      </div>
    );
  }
}

export default PantryList;
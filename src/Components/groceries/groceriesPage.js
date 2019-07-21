import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import axios from 'axios';
import './groceriesPage.scss';

import GroceryList from './groceryList/groceryList.js';
import PantryList from './pantryList/pantryList.js';


class Groceries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      ingredients: null,
      pantry: null,
      grocery: null,
    };
  }

  addToPantry = (ingrID, ingrName, ingrDesc) => {
    var user = this.props.user;
    var data = {
      username: user.username,
      password: user.password,
      ingredientID: ingrID,
      ingredientDescription: ingrDesc
    }
    var addURL = "https://grocery-potluck-app.herokuapp.com/api/pantryList";
    axios({
      method: 'post',
      url: addURL,
      data: data
    }).then((addResponse) => {
      var pant = this.state.pantry;
      var newIngr = {
        _id: ingrID,
        Name: ingrName,
        Desc: ingrDesc
      }
      pant.push(newIngr)
      this.setState({
        pantry: pant
      })
    })
  }

  addToGrocery = (ingrID, ingrName, ingrDesc) => {
    var user = this.props.user;
    var data = {
      username: user.username,
      password: user.password,
      ingredientID: ingrID,
      ingredientDescription: ingrDesc
    }
    var addURL = "https://grocery-potluck-app.herokuapp.com/api/groceryList";
    axios({
      method: 'post',
      url: addURL,
      data: data
    }).then((addResponse) => {
      var groc = this.state.grocery;
      var newIngr = {
        _id: ingrID,
        Name: ingrName,
        Desc: ingrDesc
      }
      groc.push(newIngr)
      this.setState({
        grocery: groc
      })
    })
  }

  removeFromPantry = (ingrID, ingrName, ingrDesc, addToGroceries) => {
    var user = this.props.user;
    var data = {
      username: user.username,
      password: user.password,
      ingredientID: ingrID,
    }
    var removeURL = "https://grocery-potluck-app.herokuapp.com/api/pantryList";
    axios({
      method: 'delete',
      url: removeURL,
      data: data
    }).then((delResponse) => {
      var pant = this.state.pantry;
      var i;
      for(i = 0; i < pant.length; i++){
        if(pant[i]._id == ingrID){
          pant.splice(i, 1);
          break;
        }
      }
      this.setState({
        pantry: pant
      })
      if(addToGroceries){
        this.addToGrocery(ingrID, ingrName, ingrDesc)
      }
    })
  }

  removeFromGrocery = (ingrID, ingrName, ingrDesc, addToPantry) => {
    var user = this.props.user;
    var data = {
      username: user.username,
      password: user.password,
      ingredientID: ingrID,
    }
    var removeURL = "https://grocery-potluck-app.herokuapp.com/api/groceryList";
    axios({
      method: 'delete',
      url: removeURL,
      data: data
    }).then((delResponse) => {
      var groc = this.state.grocery;
      var i;
      for(i = 0; i < groc.length; i++){
        if(groc[i]._id == ingrID){
          groc.splice(i, 1);
          break;
        }
      }
      this.setState({
        grocery: groc
      })
      if(addToPantry){
        this.addToPantry(ingrID, ingrName, ingrDesc);
      }
    })
  }

  componentDidMount () {
      var groceryData = this.props.user.GroceryList;
      var pantryData = this.props.user.PantryList;
      var grocIDs = groceryData.GroceryIngredients;
      var pantIDs = pantryData.PantryIngredients;
      var pantDesc = {}
      var grocDesc = {}
      var j;
      for(j = 0; j < pantIDs.length; j++){
        pantDesc[pantIDs[j]] = pantryData.PantryDescriptions[j];
      }
      for(j = 0; j < grocIDs.length; j++){
        grocDesc[grocIDs[j]] = groceryData.GroceryDescriptions[j];
      }
      var ingrURL = "https://grocery-potluck-app.herokuapp.com/api/ingredient?_id=";
      var i;
      var pantryPromises = [];
      var groceryPromises = [];
      for(i=0; i < pantIDs.length; i++){
        pantryPromises.push(axios.get(ingrURL + pantIDs[i]))
      }
      for(i=0; i < grocIDs.length; i++){
        groceryPromises.push(axios.get(ingrURL + grocIDs[i]))
      }
      axios.all(pantryPromises).then((pantIngreds) => {
        var pantry = pantIngreds.map((ingr) => (
          {
          _id: ingr.data.data._id,
          Name: ingr.data.data.Name,
          Desc: pantDesc[ingr.data.data._id]
          }
        ));
        axios.all(groceryPromises).then((grocIngreds) => {
          var grocery = grocIngreds.map((ingr) => (
            {
            _id: ingr.data.data._id,
            Name: ingr.data.data.Name,
            Desc: grocDesc[ingr.data.data._id]
            }
          ))
          var ingrURL = "https://grocery-potluck-app.herokuapp.com/api/ingredient";
          axios.get(ingrURL).then((res) => {
            var ingredients = res.data.data;
            this.setState({
              user: this.props.user,
              ingredients: ingredients,
              grocery: grocery,
              pantry: pantry
            });
          });
        });
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
    var ingredients = this.state.ingredients;
    var pantry = this.state.pantry;
    var grocery = this.state.grocery; 
    return (
      <div>
        <Grid columns={2} divided> 
          <Grid.Row>
            <Grid.Column >
              <div class="gridColumn">
                <PantryList 
                  user={this.props.user} 
                  ingredients={ingredients} 
                  pantry={pantry} 
                  add = {(grocID, grocName, grocDesc) => this.addToPantry(grocID, grocName, grocDesc)}
                  remove={(grocID, grocName, grocDesc, addToGrocery) => this.removeFromPantry(grocID, grocName, grocDesc, addToGrocery)}
                />
              </div>
            </Grid.Column>
            <Grid.Column class="gridColumn">
            <div class="gridColumn">
              <GroceryList 
                user={this.props.user} 
                ingredients={ingredients} 
                grocery={grocery}
                add = {(grocID, grocName, grocDesc) => this.addToGrocery(grocID, grocName, grocDesc)}
                remove={(grocID, grocName, grocDesc, addToPantry) => this.removeFromGrocery(grocID, grocName, grocDesc, addToPantry)}
                />
            </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Groceries;
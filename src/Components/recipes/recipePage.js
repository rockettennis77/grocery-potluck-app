import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './recipePage.scss';

import RecipeList from './recipeList/recipeList.js';

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
        recipes: []
    };
  }
  
  componentDidMount() {
      var recipeURL = "https://grocery-potluck-app.herokuapp.com/api/recipe"
      axios.get(recipeURL).then((res) => {
        this.setState({
            recipes: res.data.data
        })
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
    return (
      <div class="body">
        <Header size='huge'> Recipe Search</Header>
        <RecipeList 
            user={this.props.user}
            recipes={this.state.recipes}
        />
      </div>
    );
  }
}

export default Recipes;
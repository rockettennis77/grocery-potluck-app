import React, { Component } from 'react';
import { Button, List, Header, Image, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './recipeList.scss';


class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        recipeListDiv: null
    };
  }
  
  componentDidMount() {
      var recipes = this.props.recipes;
      if(recipes != null){
        var recipeList = recipes.map((rec) => (
              <div class="pantryListItem">
                <List.Item>
                <Image src={rec.RecipePic} />
                  <div class="listContent">
                    <List.Content>
                      <List.Header>{rec.RecipeName}</List.Header> 
                    </List.Content>
                  </div>
                </List.Item>
              </div>
        ));
        this.setState({
            recipeListDiv: recipeList,
            recipes: recipes
        })
      }
  }

  componentWillReceiveProps(newProps) {
    var recipes = newProps.recipes;
    if(recipes != null){
        console.log(recipes);
        var recipeList = recipes.map((rec) => (
            <div class="recipeListItem">
              <List.Item>
                <div class="recipeContent">
                <Image rounded size='small' verticalAlign='top' src={rec.RecipePic} />
                <List.Content>
                    <div class="recipeDescription">
                    <List.Header as='h2'>{rec.RecipeName}</List.Header> 
                    </div>
                </List.Content>
                </div>
              </List.Item>
            </div>
      ));
      this.setState({
          recipeListDiv: recipeList,
          recipes: recipes
      })
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
    return (
      <div class="body">
        <List divided relaxed>
            {this.state.recipeListDiv}
        </List>
      </div>
    );
  }
}

export default RecipeList;
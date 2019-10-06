import React, { Component } from 'react';
import { Button, List, Header, Image, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import './recipeList.scss';


const HOSTNAME = "http://localhost:3000"

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        recipeListDiv: null
    };
  }
  
  componentDidMount() {
      var recipes = this.props.recipes;
      if(this.props.user == null){
        this.props.history.push('/potluck/home');
      }
      else{
        this.createRecipeList(recipes);
      }
      
  }

  componentWillReceiveProps(newProps) {
    var recipes = newProps.recipes;
    this.createRecipeList(recipes);
  }

  createRecipeList(recipes){
      if(recipes != null){
        var user = this.props.user;
        var pantryIngreds = user.PantryList.PantryIngredients;
        var i;
        console.log(recipes);
        for(i=0; i < recipes.length; i++){
          recipes[i]["ingredsMatch"] = recipes[i]["Ingreds"].filter(value => -1 !== pantryIngreds.indexOf(value));
        }
        console.log(recipes);
        var recipeList = recipes.map((rec) => (
            <div class="recipeListItem">
              <List.Item src={HOSTNAME + "/potluck/recipe?id=" + rec.id}>
                <div class="recipeContent">
                <Image rounded size='tiny' verticalAlign='top' src={rec.RecipePic} />
                <List.Content>
                    <div class="recipeDescription">
                    <List.Header as='h1'>{rec.RecipeName}</List.Header> 
                    <List.Description>{rec.ingredsMatch.length} matching ingredients</List.Description>
                    
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

export default withRouter(RecipeList);
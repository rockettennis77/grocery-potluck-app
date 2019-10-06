import React, { Component } from 'react';
import { Button, List, Header, Image, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import './recipeList.scss';


const HOSTNAME = "http://localhost:3000"
const APIURL = "https://grocery-potluck-app.herokuapp.com"


class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: this.props.user,
        recipeId: this.props.recipeId
    };
  }
  
  componentDidMount() {
      var recipeId = this.props.recipeId;
      if(this.props.user == null){
        this.props.history.push('/potluck/home');
      }
      else{
        this.getRecipeInfo(recipeId);
      }
      
  }

  componentWillReceiveProps(newProps) {
    this.createRecipeList(recipes);
  }

  getRecipeInfo(recipeId) {
      var recipeURL = APIURL + "/api/recipe?id=" + recipeId;
      axios.get(recipeURL).then((res) => {
        var recipeData = res.data.data;
        var ingredIds = recipeData.Ingreds;
        var promises = [];
        var i;
        for(i=0; i<ingredIds.length(); i++){
            var url = APIURL + "/api/ingredient?_id=" + ingredIds[i];
            promises.push(axios.get(url));
        }
        axios.all(promises).then((ingreds))
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
        <List divided relaxed>
            {this.state.recipeListDiv}
        </List>
      </div>
    );
  }
}

export default withRouter(Recipe);
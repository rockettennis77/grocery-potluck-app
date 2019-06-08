import React, { Component } from 'react';
import { Menu, Header } from 'semantic-ui-react';
//import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
//import axios from 'axios';
import './navbar.scss';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      SignedIn: false,
      activeItem: 'Home'
    };
  }
  handleItemClick = (e, {name}) => {
      if(name == "Logout"){
          this.props.logout();
      }
      else{
        this.setState({activeItem: name})
      }
  }

  componentDidMount() {
    if(this.props.user != null){
        this.setState({SignedIn: true})
    }
  }

  render() {
    const {activeItem} = this.state;
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
      }
  }
    if(this.props.user != null){
        return(
            <div class="main">
                <Menu style={styles.darkGreenLight} pointing secondary>
                    <div class="navbarTitle">
                        <Header style={styles.light} as='h2'>
                            Potluck
                        </Header>
                    </div>
                    <Link to="/potluck/home">
                        <Menu.Item 
                            name='Home' 
                            style={styles.light}
                            active={activeItem === 'Home'} 
                            onClick={this.handleItemClick} 
                        />
                    </Link>
                    <Link to="/potluck/groceries">
                        <Menu.Item
                            style={styles.light}
                            name='Groceries'
                            active={activeItem === 'My Recipes'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to="/potluck/friends">
                    <Menu.Item
                        style={styles.light}
                        name='Friends and Follows'
                        active={activeItem === 'Friends and Follows'}
                        onClick={this.handleItemClick}
                    />
                    </Link>
                    <Link to="/potluck/recipes">
                    <Menu.Item
                        style={styles.light}
                        name='Explore Recipes'
                        active={activeItem === 'Explore'}
                        onClick={this.handleItemClick}
                    />
                    </Link>
                    <Menu.Menu position='right'>
                        <Link to="/potluck/profile">
                        <Menu.Item
                            style={styles.light}
                            name='Profile'
                            active={activeItem === 'Profile'}
                            onClick={this.handleItemClick}
                        />
                        </Link>
                        <Link to="/potluck/logout">
                        <Menu.Item
                            style={styles.light}
                            name='Logout'
                            active={activeItem === 'Logout'}
                            onClick={this.handleItemClick}
                        />
                        </Link>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
    else {
        return(
            <div class="main">
                <Menu style={styles.darkGreenLight} pointing secondary>
                    <div class="navbarTitle">
                        <Header style={styles.light} as='h2'>
                            Potluck
                        </Header>
                    </div>
                    <Link to="/potluck/home">
                    <Menu.Item 
                        name='Home' 
                        style={styles.light}
                        active={activeItem === 'Home'} 
                        onClick={this.handleItemClick} 
                    />
                    </Link>
                    <Menu.Menu position='right'>
                    <Link to="/potluck/home">
                        <Menu.Item
                            name='Sign In'
                            style={styles.light}
                            active={activeItem === 'Sign In'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to="/potluck/home">
                        <Menu.Item
                            name='Sign Up'
                            style={styles.light}
                            active={activeItem === 'Sign Up'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    </Menu.Menu>
                </Menu>
            </div>
        ); 
    }
    
  }
}

export default Navbar;
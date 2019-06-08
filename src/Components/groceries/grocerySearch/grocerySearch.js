import React, { Component } from 'react'
import { Search, Button, List } from 'semantic-ui-react'
import axios from 'axios'

import './grocerySearch.scss';


export default class GrocerySearch extends Component {
  
    constructor() {
        super();
        this.state = {
            results: [],
            isLoading: false,
            value: '',
            source: []
        };
      }

  componentDidMount() {
    this.resetComponent();
    var sourceData = this.props.source;
    this.setState({
        source: source
    })
    
  }

  resetComponent = () => {
      this.setState({ 
          isLoading: false, 
          results: [], 
          value: '' 
        })
  }

  handleResultSelect = (e, { result }) => {
    
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()
      var finalRes = []
      var sourceData = this.state.source;
      var s = 0;
      for(s; s < sourceData.length; s++){
        if(sourceData[s].username.substring(0,value.length).includes(value)){
            finalRes.push({
                title: sourceData[s].username,
                id: sourceData[s]._id
            });
        }
      }

      this.setState({
        isLoading: false,
        results: finalRes
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state
        return (
            <div class="search">
                <Search
                    id="searchBar"
                    inline
                    fluid 
                    icon='search' 
                    placeholder='Add an ingredient...' 
                    loading={isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={this.handleSearchChange}
                    results={results}
                    value={value}
                    {...this.props}
                />
                <Button floated='right' onClick={this.handleAddFriend}>Add Friend</Button>
            </div>
        )
  }
}

export default GrocerySearch;
import React, { Component } from 'react'
import { Search, Button, List } from 'semantic-ui-react'

import './grocerySearch.scss';


class GrocerySearch extends Component {
  
    constructor() {
        super();
        this.state = {
            results: [],
            isLoading: false,
            value: '',
            valueID: '',
            source: []
        };
      }

  componentDidMount() {
    this.resetComponent();
  }

  componentWillReceiveProps(newProps){
    this.setState({
      source: newProps.source
    });
  }
  resetComponent = () => {
      this.setState({ 
          isLoading: false, 
          results: [], 
          value: '',
          valueID: '',
          source: this.props.source
        })
  }

  handleResultSelect = (e, { result }) => {
    this.setState({
      value: result.title,
      valueID: result.id  
    })
  };

  handleAddIngredient = () => {
      var valID = this.state.valueID;
      var valName = this.state.value;
      var newDate = new Date();
      var month = newDate.getMonth();
      var day = newDate.getDate();
      var year = newDate.getFullYear();
      var FullDate = month + "/"+ day + "/" + year;
      var valDesc = "Added manually on " + FullDate;
      this.props.handler(valID, valName, valDesc);
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()
      var finalRes = []
      var sourceData = this.props.source;
      var s = 0;
      for(s; s < sourceData.length; s++){
        if("Name" in sourceData[s]){
            if(sourceData[s].Name.substring(0,value.length).toUpperCase().includes(value.toUpperCase())){
                finalRes.push({
                    title: sourceData[s].Name,
                    id: sourceData[s]._id
                });
            }
        }
      }
      this.setState({
        isLoading: false,
        results: finalRes
      })
    }, 300)
  }

  render() {
    var listName = this.props.listname;
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
                <Button floated='right' onClick={this.handleAddIngredient}>Add Ingredient to {listName}</Button>
            </div>
        )
  }
}

export default GrocerySearch;
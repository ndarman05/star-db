import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component{
  
  state = {
    selectedPerson: null,
  }

  onItemSelected = (id) => {
    this.setState({
      selectedPerson: id,
    })
  }

  render() {
    return (
      <div className='app container'>
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onItemSelected}/>
          </div>
          <div className="col-md-6 card mt-3">
            <PersonDetails 
              personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
};
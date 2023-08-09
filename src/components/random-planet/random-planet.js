import React, { Component } from 'react';
import  SwapiService from '../../services/swapi-service.js';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService;

  state = {
    planet: {},
  };

  constructor(){
    super();
    this.updatePlanet();
  }

  onPlanedLoaded = (planet) => {
    this.setState({planet})
  };

  updatePlanet() {
    const id = Math.floor(Math.random()*25+2);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanedLoaded)
  }

  render() {
    const { planet: {id, name, population, rotationPeriod, diametr }} = this.state;
    console.log(id);
    return (
      <div className="random-planet jumbotron rounded" style={{ backgroundColor: '#303030'}}>
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{ population }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{ rotationPeriod }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{ diametr }</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}

import React, { Component } from 'react';
import  SwapiService from '../../services/swapi-service.js';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService;

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diametr: null,
  };

  constructor(){
    super();
    this.updatePlaner();
  }

  updatePlaner() {
    const id = Math.floor(Math.random()*25+2);
    this.swapiService
      .getPlanet(id)
      .then((planet) => {
        this.setState({
          id,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diametr: planet.diametr,
        })
      })

  }

  render() {
    const { id, name, population, rotationPeriod, diametr } = this.state;

    return (
      <div className="random-planet jumbotron rounded" style={{'background-color': "#303030"}}>
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

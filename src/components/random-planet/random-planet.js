import React, { Component } from 'react';
import  SwapiService from '../../services/swapi-service.js';

import './random-planet.css';
import Spinner from '../spinner/spinner.js';
import ErrorIndicator from '../error-indicator/error-indicator.js';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService;

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  constructor(){
    super();
    this.updatePlanet();
  }

  onPlanedLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    })
  };

  updatePlanet() {
    const id = Math.floor(Math.random()*25+2);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanedLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error} = this.state;
    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PlanetView planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded" style={{ backgroundColor: '#303030'}}>
        {errorMessage}
        {spinner}
        {content}
      </div>

);
}
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diametr } = planet;
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

import React, { Component } from 'react';
import { DateTime } from 'luxon';

import './App.css';

const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '75787c308f283527b34dff6f9ed6f9b8';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      weather: null,
      isLoading: false,
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  sendRequest = () => {
    const { searchQuery } = this.state;

    fetch(`${API_URL}weather?q=${searchQuery}&appid=${API_KEY}&units=metric`)
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          weather: response,
          isLoading: false,
        })
      );
  };

  handleSearchSubmit = (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    this.setState(
      {
        isLoading: true,
      },
      this.sendRequest
    );
  };

  componentDidMount() {}

  render() {
    const { searchQuery, weather, isLoading } = this.state;

    return (
      <div
        className={
          weather && weather.main && weather.main.temp < 0
            ? 'container cold'
            : 'container'
        }
      >
        <input
          type="text"
          placeholder="Search..."
          className={
            weather && weather.cod === '404'
              ? 'search-input error'
              : 'search-input'
          }
          value={searchQuery}
          onChange={this.handleSearchChange}
          onKeyDown={this.handleSearchSubmit}
        />

        {isLoading ? <div className="loader"></div> : null}

        {weather && weather.cod === 200 ? (
          <div>
            <div className="location-wrapper">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>

              <div className="date">
                {DateTime.fromSeconds(weather.dt).toLocaleString(
                  DateTime.DATE_HUGE
                )}
              </div>
            </div>
            <div className="weather-wrapper">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : null}

        {weather && weather.cod === '404' ? (
          <div className="error-message">Неправильный ввод</div>
        ) : null}
      </div>
    );
  }
}

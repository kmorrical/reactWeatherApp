import React, { Component } from 'react';
import './App.css';


class WeatherBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changedCity: ''
        };
    };

    onInputChange = (event) => {
        this.setState({ changedCity: event.target.value });
    }

    temp = (temper) => {
        var newTemp = Math.round((temper - 273.15) * 9 / 5 + 32);
        return newTemp;
    }

    render() {
        const { city, lowTemp, highTemp, currentTemp, humidity, conditions } = this.props;
        return (
            <div className="container">
      <div className="blueWeatherBox">
      <br/>
      <div className="weathertext">{city}</div>
      <br/>
      <div className="weathertext">{conditions}</div>
      <br/>
      <div className="weathertext currentTemp">{this.temp(currentTemp)}</div>
      <br/>
      <div className="weathertext">High Temperature: {this.temp(highTemp)}</div>
      <br/>
      <div className="weathertext"> Low Temperature: {this.temp(lowTemp)}</div>
      <br/>
      <div className="weathertext">Humidity: {humidity}</div>

      </div>
    </div>
        );
    }
}
export default WeatherBox;
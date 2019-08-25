import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './searchBar.js'
import WeatherBox from './WeatherBox.js'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weeatherData: [],
            city: 'London,uk',
            defaultCity: 'London,uk',
            deafultPath: 'london%2Cuk',
            path: 'london%2Cuk',
            conditions: '',
            lowTemp: 0,
            highTemp: 0,
            humidity: 0,
            currentTemp: 0,
        };
        this.fetchCityWeather = this.fetchCityWeather.bind(this);
    };


    formatCity = (city) => {
        const cityCopy = city.slice();
        for (var i = 0; i < cityCopy; i++) {
            if (cityCopy[i] === " ") {
                cityCopy[i] = "%20";
            }
            if (cityCopy[i] === ",") {
                cityCopy[i] = "%2";
            }
        }
        this.setState({ path: cityCopy });
        return cityCopy;
    };

    componentDidMount() {
        this.fetchCityWeather(this.state.defaultCity);
    }

    fetchCityWeather(city) {
        let path;
        // path = this.formatCity(city);
        const cityCopy = city.slice();
        for (var i = 0; i < cityCopy; i++) {
            if (cityCopy[i] === " ") {
                cityCopy[i] = "%20";
            }
            if (cityCopy[i] === ",") {
                cityCopy[i] = "%2";
            }
        }
        path = cityCopy;
        fetch("https://community-open-weather-map.p.rapidapi.com/forecast?q=" + path, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                    "x-rapidapi-key": "CsnQC0v2Z8mshebeRSE12ssavaRvp1gSSQOjsnpCBe80cTfCI1"
                },
                "type": "JSON"
            })
            .then(response => {
                return response.text();
            })
            .then(res => {
                const json = JSON.parse(res);
                this.setState({
                    conditions: json.list[0].weather[0].main,
                    lowTemp: json.list[0].main.temp_min,
                    highTemp: json.list[0].main.temp_max,
                    currentTemp: json.list[0].main.temp,
                    humidity: json.list[0].main.humidity,
                    city: city
                });

                // this.setState({weather: })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="App">
    Please enter a city to see results
    <SearchBar defaultCity={this.state.city} fetchCityData={this.fetchCityWeather}/>
    <WeatherBox city={this.state.city} lowTemp={this.state.lowTemp} highTemp={this.state.highTemp} humidity={this.state.humidity}
    currentTemp={this.state.currentTemp} conditions={this.state.conditions}/>
    </div>
        );
    }
}

export default App;



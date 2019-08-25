import React, { Component } from 'react';
import './App.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changedCity: ''
        };
    };

    onInputChange = (event) => {
        this.setState({ changedCity: event.target.value });
    }

    getCity = () => {
        this.props.fetchCityData(this.state.changedCity);
    }

    render() {
        const { defaultCity } = this.props;
        return (
            <div>
    <input type="text" placeholder={defaultCity} onChange={this.onInputChange}/>
    <br/>
    <button onClick={this.getCity}>Enter</button>
    </div>
        );
    }
}
export default SearchBar;
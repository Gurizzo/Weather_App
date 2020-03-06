import React, { Component } from 'react';
import Location from './Location';
import getUrlWeatherByCity from './../../Services/getUrlWeatherByCity';
import CircularProgress from '@material-ui/core/CircularProgress';
import WeatherData from './WeatherData';
import { PropTypes } from 'prop-types';
import transformWeather from '../../Services/transformWeather';

import './styles.css';



class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }




    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {

            return resolve.json();

        }).then(data => {
            const newWeather = transformWeather(data);

            this.setState({
                data: newWeather
            })
        });


    };
    render() {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick} >
                <Location city={city}></Location>
                {data ?
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress></CircularProgress>
                }



            </div>
        );
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation
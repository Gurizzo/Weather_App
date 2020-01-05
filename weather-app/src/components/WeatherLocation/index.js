import React ,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData'
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../constants/weather';
const data={
    temperature: 5,
    weatherState: SUN,
    humidity:5,
    wind: '15 m/s'
}

const data2={
    temperature: 32,
    weatherState: RAIN,
    humidity:55,
    wind: '15 m/s'
}
class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city: 'Nuevo Leon',
            data: data,
        };
    }

    handleUpdateClick = () =>{
        console.log("Actualizado");
        this.setState({
            city: 'Montevideo',
            data: data2
        });
    };
    render(){
        const {city,data} = this.state;
        return(
            <div className="weatherLocationCont">
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
    </div>
        );
    }
};

export default WeatherLocation
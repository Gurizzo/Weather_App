import React ,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import convert from 'convert-units';
import './styles.css';
import {

    SUN,

} from './../../constants/weather';

const location = "Montevideo,uy";
const api_key= "5aa90f40f12b6ff7d877c0e62abcf35a";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;


const data={
    temperature: 5,
    weatherState: SUN,
    humidity:5,
    wind: '15 m/s'
}


class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city: 'Montevideo',
            data: data,
        };
    }
    getTemp = kelvin =>{
        return convert(kelvin).from("K").to("C").toFixed(2);
    }
    getWeatherState = weather_data =>{
        return SUN;    
    }

    getData= weather_data => {
        const{humidity,temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp);

        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
        }
        return data;
    }

    handleUpdateClick = () =>{
        fetch(api_weather).then(resolve =>{
            
            return resolve.json();

        }).then(data =>{
            const newWeather = this.getData(data);
            console.log(data);
            debugger;
            this.setState({
                data:newWeather
            })
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
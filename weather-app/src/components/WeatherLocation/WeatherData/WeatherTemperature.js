import React from 'react';
import WeatherIcons from 'react-weathericons';
import propTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../../../constants/weather';
import './styles.css';

const icons={
    [CLOUD]: "cloud",
    [SUN]:'day-sunny',
    [RAIN]:"rain",
    [SNOW]:"snow",
    [THUNDER]: "day-thunderstore",
    [DRIZZLE]: "day-showers",
    

};//Diccionario de iconos
const getWeatherIcon = weatherState =>{

const icon = icons[weatherState];
const sizeicon= "4x"

if(icon){
    return <WeatherIcons className="wicon" name={icon} size={sizeicon}/>
}


else{
    return <WeatherIcons className="wicon" name="day-sunny" size={sizeicon}/>
}

    
}//validacion de que icono, asociacion con icono por defecto.
const WeatherTemperature = ({temperature,weatherState}) =>(
   
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        
        <span className="temperature">{`${temperature} `}</span>
        <span className="temperatureType">{`Cº`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: propTypes.string.isRequired,
       
    weatherState: propTypes.string.isRequired,

};

export default WeatherTemperature;
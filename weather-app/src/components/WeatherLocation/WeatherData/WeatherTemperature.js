import React from 'react';
import WeatherIcons from 'react-weathericons';
import propTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weather';

const icons={
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]:'day-sunny',
    [RAIN]:"rain",
    [SNOW]:"snow",
    [WINDY]:"windy",
    

};//Diccionario de iconos
const getWeatherIcon = weatherState =>{

const icon = icons[weatherState];


if(icon){
    return <WeatherIcons name={icon} size="2x"/>
}


else{
    return <WeatherIcons name="day-sunny" size="2x"/>
}

    
}//validacion de que icono, asociacion con icono por defecto.
const WeatherTemperature = ({temperature,weatherState}) =>(
   
    <div>
        {getWeatherIcon(weatherState)}
        
        <span>{`${temperature} Cº`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: propTypes.number.isRequired,
       
    weatherState: propTypes.string.isRequired,

};

export default WeatherTemperature;
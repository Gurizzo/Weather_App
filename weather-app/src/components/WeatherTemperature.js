import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons={

    sunny: "day-sunny",
    fog: "day-fog",

};//Diccionario de iconos
const getWeatherIcon = weatherState =>{

const icon = icons[weatherState];

if(icon){
    return <WeatherIcons name="day-sunny" size="2x"/>
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
)

export default WeatherTemperature;
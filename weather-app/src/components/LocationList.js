import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types'

const strToComponent =cities =>(
    cities.map(city => <WeatherLocation key={city} city={city}></WeatherLocation>)
    );  

    const LocationList=({cities}) =>{
    console.log(cities);
    return(
    
    <div>
        {strToComponent(cities)}
       </div>);
}

LocationList.propType={
    cities:PropTypes.array.isRequired,
}

export default LocationList;
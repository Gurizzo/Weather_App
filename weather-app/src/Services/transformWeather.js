import convert from 'convert-units';
import {
    CLOUD,

    CLOUDY,
  
    SUN,
  
    RAIN,
  
    SNOW,
  
    WINDY,
}from "./../Constants/weather";


const gettemp=kelvin=>{
    return Number(convert(kelvin).from("K").to("C").toFixed(2))
}

const getWeatherState=weather_data=>{
    return SUN;
}

const getCity=weather_data=>{
   console.log(weather_data.name)
    
   
    return weather_data.name
}

const transformWeather=weather_data =>{
    const{humidity,temp}=weather_data.main;
    const{speed}=weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = gettemp(temp);
    
    const data={
        humidity,
        temperature,
        weatherState,
        wind:`${speed} m/s`,
    }
    return data;
}
export default transformWeather;
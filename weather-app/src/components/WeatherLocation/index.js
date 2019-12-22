import React,{Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import getUrlWeatherByCity from './../../Services/getUrlWeatherByCity'
import transformWeather from './../../Services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';





class WeatherLocation extends Component{

    constructor(props){
        super(props);
        const{city}=props;
        
        this.state={
            city,
            data:null,
        }
    }

        componentDidMount() {
           this.handleUpdateClick();
        }
        componentDidUpdate(prevProps, prevState) {
            
        }
        
        
    

    handleUpdateClick=() =>{
        const api_weather=getUrlWeatherByCity(this.state.city);
        
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data =>{
            const newWeather=transformWeather(data);
            
            console.log(data)
            this.setState({
                
                data:newWeather
            })
          

        })
        
    
    }


    render(){
        const {cd,data} = this.state;
        return (
    <div className="weatherLocationCont">
        <Location city={city}></Location>
        
        {data ?
        <WeatherData data={data}></WeatherData> : <CircularProgress></CircularProgress>
            
   
    
  }
  
           
       
    </div>
    
        )
    }
    
}
WeatherLocation.propTypes={
    city:PropTypes.string.isRequired,
}
export default WeatherLocation;
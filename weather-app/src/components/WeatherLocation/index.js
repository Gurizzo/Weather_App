import React ,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../Services/transformWeather';
import {api_weather} from '../../constants/api_url';
import './styles.css';









class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city: 'Montevideo',
            data: null,
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }
 
    


    handleUpdateClick = () =>{
        fetch(api_weather).then(resolve =>{
            
            return resolve.json();

        }).then(data =>{
            const newWeather = transformWeather(data);
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
        {data ?
         <WeatherData data={data}></WeatherData> :
         "Cargando..."}
       
    </div>
        );
    }
};

export default WeatherLocation
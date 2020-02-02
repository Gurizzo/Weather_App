import React, {Component} from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

const cities=[

  'Montevideo,uy',
  'Washington,us',
  'Bogota,col',
  'Ciudad de mexico, mx',
  'Madrid, es',
  'Lima, pe',
  'Tokio, jpn'
];

class App extends Component {

  handleSelectionLocation = city => {

    console.log("handleSelectionLocation")

  }

  render() {

    return (

      <div className="App">

        <LocationList cities = {cities} onSelectedLocation = {this.handleSelectionLocation} >       

        </LocationList>

      </div>

    );

  }

}

export default App;

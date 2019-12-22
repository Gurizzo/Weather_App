import React from 'react';
import WeatherLocation from './components/WeatherLocation'
import './App.css';
import LocationList from './components/LocationList';

const cities=[
  
  'Florencia,co',
  'Montevideo,uy',
  'Mendoza,ar'
]
function App() {
  return (
    <div className="App">
    
      <LocationList cities={cities} ></LocationList>
    </div>
  );
}

export default App;

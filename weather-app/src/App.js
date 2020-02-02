import React from 'react';
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

function App() {
  return (
    <div className="App">
     
      <LocationList cities={cities}/>
    </div>
  );
}

export default App;

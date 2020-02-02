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
  
  const handleSelectedLocation = city => {
    console.log(`handleSelectedLocation`); 
  }
 
  return (
    <div className="App">
        <LocationList 
              cities={cities} 
              onSelectedLocation={handleSelectedLocation}
        
        />
    </div>

 
  );
  
}

export default App;

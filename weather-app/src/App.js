import React, { Component } from 'react';
import './App.css';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/WeatherLocation/LocationList';

const cities = [

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

      <Grid>
        <Row>
          Titulo
        </Row>
        <Row>

          <Col xs={12} md={6}>

            <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation} />

          </Col>

          <Col xs={12} md={6}>
            <div className="details"></div>
          </Col>

        </Row>


      </Grid>

    );

  }

}

export default App;

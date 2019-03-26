import React from 'react';
import WeatherProject from './src/Weather/WeatherProject';
//import ListProject from './src/NYT/ListProject';
//import ButtonApp from './src/Touch/ButtonApp'; 
//import MondrianLayout from './src/Mondrian/MondrianLayout';

export default class App extends React.Component {
  render() {
    return (
      <WeatherProject/>
      //<ListProject/>
      //<ButtonApp/>
      //<MondrianLayout/>
    );
  }
}
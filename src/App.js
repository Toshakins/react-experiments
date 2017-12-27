import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Menu items={data}/>
      </div>
    );
  }
}

let data = {
  'Agricultural Drought': {},
  'Avalanche': {},
  'Bolide Impact': {},
  'Coastal flood': {},
  'Convective Storm': {},
  'Cyber': {},
  'Cyclone': ['Coastal flood',
    'Flash Flood',
    'Landslide',
    'River flood (fluvial)',
    'Storm Surge',
    'Surface water flood (pluvia)'],
  'Earthquake': ['Earthquake fire following',
    'Landslide',
    'Liquefaction',
    'Tsunami'],
  'Extratropical Cyclone': ['Coastal flood',
    'River flood (fluvial)',
    'Storm Surge',
    'Surface water flood (pluvia'],
  'Extreme Temperature': {},
  'Fog': {},
  'Glacial Lake Outburst': {},
  'Hail': {},
  'Hurricane': {},
  'Hydrological Drought': {},
  'Insect Infestation': {},
  'Landslide': {},
  'Mass Movement': {},
  'Meteorological Drought': {},
  'Pandemic': {},
  'River flood (fluvial)': {},
  'Space Weather': {},
  'Subsidence': {},
  'Surface water flood (pluvial)': {},
  'Terrorism (CBRN and conventional)': {},
  'Tornado': {},
  'Tsunami': {},
  'Typhoon': {},
  'Volcano': ['Ashfall',
    'Lahar',
    'Lava',
    'Pyroclastic Density Current',
    'Toxic Agases',
    'Tsunami'],
  'Wildfire (Bushfire)': {},
  'Winterstorm': ['Ice', 'Snowfall', 'Temperature']
};

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
};

const Menu = (props) => {
  const items = props.items;
  const itemRenders = Object.entries(items).map(([key, val]) => {
    const elem = <li>{key}</li>;

    if (isEmpty(val)) {
      return (<li>{key}</li>)
    }
    return (
          <li>
            {key}
            <SubMenu items={val}/>
          </li>
    )
  });

  return (
    <ul>{itemRenders}</ul>
  );
};

class SubMenu extends Component {
  render() {
    return (
      <ul>
        <li>Text 1</li>
        <li>Text 2</li>
        <li>Text 3</li>
      </ul>
    );
  }
}

export default App;

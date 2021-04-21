import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import ArtistPanel from './components/ArtistPanel';
import ArtistPage from './components/ArtistPage';
import Services from './components/Services'

import ericProfPic from './img/eric-prof-pic.jpg'
import wastelandProfPic from './img/wasteland-prof-pic.png'
import { useState, useEffect } from 'react';

let artists = [
  {
    name: 'Wasteland Doctor',
    bgColor: '#09132D',
    bgImg: wastelandProfPic
  },
  {
    name: 'Eric Biggs the Lyricist',
    bgColor: '#2F642E',
    bgImg: ericProfPic
  },
  {
    name: 'Brain Chemist',
    bgColor: '#781818',
    bgImg: null
  }
]

function App() {

  return (
    <div className='App'>
      <Navigation />

      <Switch>
        <Route path='/services' component={Services} />
        <Route path='/artist/:name' component={ArtistPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

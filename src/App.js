import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import ArtistPage from './components/ArtistPage';
import Services from './components/Services'
import Merch from './components/Merch'
import Shows from './components/Shows'
// import { useState, useEffect } from 'react';

function App() {

  return (
    <div className='App'>
      <Navigation />

      <Switch>
        <Route path='/shows' component={Shows} />
        <Route path='/merch' component={Merch} />
        <Route path='/services' component={Services} />
        <Route path={`/artist/:url`} component={ArtistPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

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
import { useState, useEffect } from 'react';

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

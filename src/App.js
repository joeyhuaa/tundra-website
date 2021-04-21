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
      <Route exact path='/' component={HomePage} />
      <Route exact path='/services' component={Services} />
      <Route path='/artist' component={ArtistPage} />

      {/* <Switch>
        <Route path="/artist">
          <ArtistPage />
        </Route>
        <Route path="/">
          <HomePage
            artists={artists}
          />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;

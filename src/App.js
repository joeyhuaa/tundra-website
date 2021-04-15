import './App.css';
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import ericProfPic from './img/eric-prof-pic.jpg'

let artists = [
  {
    name: 'Wasteland Doctor',
    bgColor: '#09132D',
    bgImg: null
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
      <HomePage
        artists={artists}
      />
    </div>
  );
}

export default App;

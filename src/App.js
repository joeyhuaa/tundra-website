import './App.css';
import HomePage from './components/HomePage'

let artists = [
  {
    name: 'Wasteland Doctor',
    bgColor: '#09132D',
    bgImg: null
  },
  {
    name: 'Eric Biggs the Lyricist',
    bgColor: '#2F642E',
    bgImg: null
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
      <HomePage
        artists={artists}
      />
    </div>
  );
}

export default App;

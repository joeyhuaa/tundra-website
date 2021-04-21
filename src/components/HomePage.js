import React, {useState, useEffect} from 'react';
import '../styles/HomePage.css'
import ArtistPanel from './ArtistPanel'
import ArtistPage from './ArtistPage';
import ericProfPic from '../img/eric-prof-pic.jpg'
import wastelandProfPic from '../img/wasteland-prof-pic.png'

// use firebase or something? to manage data like
// artists
// releases

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

export default function HomePage({
  // artists
}) {
  let [state, setState] = useState({
  })

  let artistPanelClicked = () => {
    setState({
      ...state, 
      currPage: 'artist'
    })
  }

  return (
    <div id='container'>
      {
        artists.map(artist => (
          <ArtistPanel
            key={artist.name}
            name={artist.name}
            bgColor={artist.bgColor}
            bgImg={artist.bgImg}
            panelClicked={artistPanelClicked}
          />
        ))
      }
    </div>
  )
}
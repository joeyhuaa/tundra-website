import React, {useState, useEffect} from 'react';
import '../styles/HomePage.css'
import ArtistPanel from './ArtistPanel'

import egPanel from '../img/eg-panel.jpg'
import wdPanel from '../img/wd-panel.jpg'

// use firebase or something? to manage data like
// artists
// releases

let artists = [
  {
    name: 'Wasteland Doctor',
    bgColor: '#09132D',
    bgImg: wdPanel
  },
  {
    name: 'Eric Biggs the Lyricist',
    bgColor: '#2F642E',
    bgImg: egPanel
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
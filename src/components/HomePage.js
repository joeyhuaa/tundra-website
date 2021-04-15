import React, {useState, useEffect} from 'react';
import '../styles/HomePage.css'
import ArtistPanel from './ArtistPanel'
import ArtistPage from './ArtistPage';

// use firebase or something? to manage data like
// artists
// releases

export default function HomePage({
  artists
}) {
  let [state, setState] = useState({
    currPage: 'home',
    artist: 'Eric Biggs the Lyricist'
  })

  let artistPanelClicked = () => {
    setState({
      ...state, 
      currPage: 'artist'
    })
  }

  return (
    <div id='container'>
      {state.currPage === 'home' &&
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
      {state.currPage === 'artist' && 
        <ArtistPage
          name={state.artist}
        />
      }
    </div>
  )
}
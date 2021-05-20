import React from 'react';
// import {useState, useEffect} from 'react';
import '../styles/HomePage.css'
import ArtistPanel from './ArtistPanel'
import artistData from './artistData'

export default function HomePage() {

  let artistPanelClicked = () => {
  }

  return (
    <div id='container'>
      {
        artistData.map(artist => (
          <ArtistPanel
            key={artist.name}
            name={artist.name}
            url={artist.url}
            bgColor={artist.bgColor}
            bgImg={artist.bgImg}
            panelClicked={artistPanelClicked}
          />
        ))
      }
    </div>
  )
}
import React, {useState, useEffect} from 'react';
import Navigation from './Navigation'
import ArtistPanel from './ArtistPanel'
import '../styles/HomePage.css'

export default function HomePage({
  artists
}) {
  return (
    <div id='container'>
      <Navigation />
      {artists.map(artist => (
        <ArtistPanel
          name={artist.name}
          bgColor={artist.bgColor}
          bgImg={artist.bgImg}
        />
      ))}
    </div>
  )
}
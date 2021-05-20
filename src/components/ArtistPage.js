import React from 'react';
// import {useState, useEffect} from 'react';

import artistData from './artistData'
import '../styles/ArtistPage.css';

export default function ArtistPage(props) {
  let url = props.match.params.url
  console.log(url)
  let artist = artistData.find(a => a.url=== url)

  return (
    <div id='container'>
      <div 
        className='info'
        style={{
          backgroundImage: `url(${artist.bgImg})`
        }}
      >
        <h1 className='title' style={{color: 'white'}}>{artist.name}</h1>
        <p className='blurb'>{artist.blurb}</p>
      </div>
      <div className='releases'>
        <h1 className='title'>Releases</h1>
      </div>
    </div>
  )
}
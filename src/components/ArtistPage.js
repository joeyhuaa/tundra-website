import React, {useState, useEffect} from 'react';
import '../styles/ArtistPage.css';


// imgs 
import egArtist from '../img/eg-artist.jpg'
import egArtist2 from '../img/eg-artist-2.jpg'
import egArtist3 from '../img/eg-artist-3.jpg'

import wdArtist from '../img/wd-artist.jpg'
import wdArtist2 from '../img/wd-artist-2.jpg'
import wdArtist3 from '../img/wd-artist-3.jpg'

import jpArtist from '../img/jp-artist.jpg'
import jpArtist2 from '../img/jp-artist-2.jpg'

let artists = [
  {
    name: 'Wasteland Doctor',
    bgColor: '#09132D',
    bgImg: wdArtist, // make this an array
    blurb: "The doctor himself. He's legally obligated to tell you that he's not a real doctor."
  },
  {
    name: 'Eric Biggs the Lyricist',
    bgColor: '#2F642E',
    bgImg: egArtist,
    blurb: "He will murder you with his multisyllabics. A real lyrical assassin."
  },
  {
    name: 'Brain Chemist',
    bgColor: '#781818',
    bgImg: jpArtist,
    blurb: "He loves mixing chemical substances inside his cranium. Turns thought patterns into sound waves."
  }
]

export default function ArtistPage(props) {
  let name = props.match.params.name
  let artist = artists.find(a => a.name === name)
  return (
    <div id='container'>
      <div 
        className='info'
        style={{
          backgroundImage: `url(${artist.bgImg})`
        }}
      >
        <h1 className='title' style={{color: 'white'}}>{name}</h1>
        <p className='blurb'>{artist.blurb}</p>
      </div>
      <div className='releases'>
        <h1 className='title'>Releases</h1>
      </div>
    </div>
  )
}
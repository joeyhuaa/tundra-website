import React, {useState, useEffect} from 'react';
import '../styles/ArtistPage.css';
import ericProfPic from '../img/eric-prof-pic.jpg'
import wastelandProfPic from '../img/wasteland-prof-pic.png'

let artists = [
  {
    name: 'Wasteland Doctor',
    bgColor: '#09132D',
    bgImg: wastelandProfPic,
    blurb: "The doctor himself. He's legally obligated to tell you that he's not a real doctor."
  },
  {
    name: 'Eric Biggs the Lyricist',
    bgColor: '#2F642E',
    bgImg: ericProfPic,
    blurb: "He will murder you with his multisyllabics. A real lyrical assassin."
  },
  {
    name: 'Brain Chemist',
    bgColor: '#781818',
    bgImg: null,
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
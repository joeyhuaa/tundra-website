import React from 'react';
// import {useState, useEffect} from 'react';

import {
  FaSpotify, 
  FaSoundcloud, 
  FaYoutube, 
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa'

import artistData from './artistData'
import '../styles/ArtistPage.css';

const icons = {
  ig: <FaInstagram color='white' size={20} />,
  spotify: <FaSpotify color='white' size={20} />,
  sc: <FaSoundcloud color='white' size={20} />,
  yt: <FaYoutube color='white' size={20} />,
  fb: <FaFacebook color='white' size={20} />,
  twitter: <FaTwitter color='white' size={20} />,
}

export default function ArtistPage(props) {
  let url = props.match.params.url
  let artist = artistData.find(a => a.url === url)

  return (
    <div id='container'>
      <div 
        className='info'
        style={{
          backgroundImage: `url(${artist.bgImg})`
        }}
      >
        <h1 className='title' style={{color: 'white'}}>{artist.name}</h1>
        <div className='media-links'>
          {Object.keys(icons).map(key => {
            if (artist.links[key]) {
              return (
                <a href={artist.links[key]} target='_blank'>
                  {icons[key]}
                </a>
              )
            }
          })}
        </div>
        <p className='bio'>{artist.bio}</p>
      </div>
    </div>
  )
}
import React, {useState, useEffect} from 'react';
import '../styles/ArtistPage.css';

export default function ArtistPage({

}) {

  return (
    <div id='container'>
      <div className='info'>
        <div className='sub-div'>
          <h1>Artist Name</h1>
        </div>
      </div>
      <div className='releases'>
        <div className='sub-div'>
          <h1>Releases</h1>
        </div>
      </div>
    </div>
  )
}
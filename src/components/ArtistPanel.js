import React, {useState, useEffect} from 'react';
import '../styles/ArtistPanel.css'

export default function ArtistPanel({
  name,
  bgColor,
  bgImg,
}) {
  console.log(name)
  return (
    <div style={{
      backgroundColor: bgColor,
      backgroundImage: bgImg,
      flex: '33%',
      padding: '20px'
    }}>
      <p className='name'>{name.toUpperCase()}</p>
    </div>
  )
}
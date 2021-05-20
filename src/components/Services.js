import React from 'react'
import '../styles/Services.css';

export default function Services() {

  return (
    <div id='services-container'>
      <h1 style={{color:'white'}}>
        Services
      </h1>
      <p style={{color:'white'}}>
        Tundra Records aims to be a one-stop shop for musicians. 
        Currently, we offer recording, mixing, mastering, graphic design, video editing (lyric videos).
        Photography and videography will be coming soon.
        Please DM 
        <a style={{color: 'skyblue'}} href='https://www.instagram.com/tundra.records/' target='_blank' rel="noreferrer"> @tundrarecords </a> 
        on Instagram for all inquiries.
      </p>
    </div>
  )
}
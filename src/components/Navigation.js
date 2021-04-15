import React, {useState, useEffect} from 'react';
import '../styles/Nav.css'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Navigation() {
  return (
    <div id='nav'>
      <h1 id='title'>TUNDRA RECORDS</h1>
      <ul id='options'>
        <li>MUSIC</li>
        <li>SERVICES</li>
        <li>MERCH</li>
        <li>TOURS</li>
      </ul>
      <div id='hamburger'>
        <GiHamburgerMenu size='2em' />
      </div>
    </div>
  )
}


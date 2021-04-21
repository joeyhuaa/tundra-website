import React, {useState, useEffect} from 'react';
import '../styles/Nav.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function Navigation() {
  return (
    <div id='nav'>
      <Router forceRefresh={true}>
        <h1 id='title'>
          <Link to='/'>TUNDRA RECORDS</Link>
        </h1>
        <ul id='options'>
          <Link to='/services'>SERVICES</Link>
          <Link to='/merch'>MERCH</Link>
          <Link to='/tours'>TOURS</Link>
        </ul>
      </Router>
      <div id='hamburger'>
        <GiHamburgerMenu size='2em' />
      </div>
    </div>
  )
}


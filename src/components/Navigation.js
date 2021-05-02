import React, {useState, useEffect} from 'react'
import '../styles/Nav.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"

let showSliderStyles = {
  padding:'20px',
  width:'200px',
  height:'100vh',
  position:'absolute',
  top:0,
  right:0,
  backgroundColor:'#000',
  color:'#fff',
  transition:'0.4s ease',
}

let hiddenSliderStyles = {
  ...showSliderStyles,
  right:-250
}

export default function Navigation() {
  let [hamburgerClicked, setHamburgerClicked] = useState(false)

  let handleHamburgerClick = () => {
    setHamburgerClicked(true)
  }

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

      <div>
        <GiHamburgerMenu size='2em' id='hamburger' onClick={() => setHamburgerClicked(true)} />
      </div>

      <div 
        id='nav-slider' 
        style={hamburgerClicked ? showSliderStyles : hiddenSliderStyles}
      >
        <span 
          style={{float:'right'}} 
          onClick={() => setHamburgerClicked(false)}
        >
          &#10005;
        </span>
        <ul id='options-slider'>
          <Link to='/services'>SERVICES</Link>
          <Link to='/merch'>MERCH</Link>
          <Link to='/tours'>TOURS</Link>
        </ul>
      </div>
    </div>
  )
}


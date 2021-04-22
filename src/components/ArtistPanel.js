import React, {useState, useEffect} from 'react'
import {useMediaQuery} from 'react-responsive'
import '../styles/ArtistPanel.css'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function ArtistPanel({
  name,
  bgColor,
  bgImg,
  panelClicked
}) {
  let [hover, setHover] = useState(false)
  let isLaptop = useMediaQuery({query: '(min-width: 992px)'})

  let laptopHoverStyles = (identifier) => {
    // styles to be used
    let styles = {
      'name-container': {
        backgroundColor: 'white',
        animation: 'fadein 1.5s forwards',
        webkitAnimation: 'fadein 1.5s forwards',
      },
      'name': {
        color: 'black'
      }
    }

    // logic
    if (isLaptop) {
      if (hover) return styles[identifier]
      else return null
    } else return null
  }

  return (
    <Router forceRefresh={true}>
      <Link 
        to={`/artist/${name}`}
        className='artist-panel' 
        onClick={panelClicked}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className='bg-img' style={{backgroundImage: `url(${bgImg})`}} />
        <div 
          className='name-container'
          style={laptopHoverStyles('name-container')}
        >
          <p 
            className='name' 
            style={laptopHoverStyles('name')}
          >{name.toUpperCase()}</p>
        </div>
      </Link>
    </Router>
  )
}
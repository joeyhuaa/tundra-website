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

  let laptopStyles = () => {
    if (hover) {
      return {
        backgroundImage: `url(${bgImg})`
      }
    } else {
      return {

      }
    }
  }

  return (
    <Router>
      <Link 
        className='artist-panel' to={`/artist/${name}`}
        style={ isLaptop ? laptopStyles() : {
          backgroundImage: `url(${bgImg})`,
        }}
        onClick={panelClicked}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className='name-container'>
          <p className='name'>{name.toUpperCase()}</p>
        </div>
      </Link>
    </Router>
  )
}
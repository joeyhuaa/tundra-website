import React, {useState, useEffect} from 'react'
import {useMediaQuery} from 'react-responsive'
import '../styles/ArtistPanel.css'

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
    <div 
      className='artist-panel'
      style={ isLaptop ? laptopStyles() : {
        backgroundImage: `url(${bgImg})`,
      }}
      onClick={panelClicked}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p className='name'>{name.toUpperCase()}</p>
    </div>
  )
}
import React from 'react'
import "./DivContainerStyled.css"
import CurrentTrack from './CurrentTrack'
import PlayerControls from './PlayerControls'
function Footer() {
  return (
    <div className='footer'>
      <CurrentTrack/>
      <PlayerControls/>
    </div>
  )
}

export default Footer

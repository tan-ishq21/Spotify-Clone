import React from 'react'
import "./DivContainerStyled.css"
import { IoLibrary } from 'react-icons/io5'
import { MdHomeFilled ,MdSearch } from "react-icons/md"
import Playlists from './Playlists'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top-links">
        <div className="logo">
            <img className='sidebar-image' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White-768x230.png" alt="Spotify" />
        </div>
        <ul>
            <li>
                <MdHomeFilled/>
                <span>Home</span>
            </li>
            <li>
                <MdSearch/>
                <span>Search</span>
            </li>
            <li>
                <IoLibrary/>
                <span>Your Library</span>
            </li>
        </ul>
      </div>
      <Playlists/>
    </div>
  )
}

export default Sidebar

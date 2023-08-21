import React, {useEffect , useRef, useState} from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'
import "./DivContainerStyled.css"
import { useStateProvider } from '../utils/StateProvider'
import axios from 'axios'
import { reducerCases } from '../utils/Constants'

function Spotify() {
  const [{token},dispatch] = useStateProvider();
  const bodyRef = useRef();
  const [navBackground,setnavbackground] = useState(false);
  const [headerBackground,setheaderBackground] = useState(false);
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30 ? setnavbackground(true) : setnavbackground(false);
    bodyRef.current.scrollTop >= 268 ? setheaderBackground(true) : setheaderBackground(false);
  };
  useEffect(() => {
    const getUserInfo = async() => {
      const {data} = await axios.get("https://api.spotify.com/v1/me",{
        headers:{
          Authorization: "Bearer "+ token,
          "Content-Type": "application/json",
       },
     });
      // console.log({data});
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
      };
      
      dispatch({type: reducerCases.SET_USER,userInfo})
    };
    getUserInfo();
  },[dispatch,token])
  return (
    <div className='container'>
      <div className='spotify_body'>
        <Sidebar/>
        <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
          <Navbar navBackground= {navBackground}/>
          <div className="body_contents">
            <Body headerBackground = {headerBackground}/>
          </div>
        </div>

      </div>
      <div className="spotify_footer">
        <Footer/>
      </div>
    </div>
  )
}

export default Spotify


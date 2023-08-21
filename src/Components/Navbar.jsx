import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { useStateProvider } from '../utils/StateProvider'
import styled from "styled-components"
function Navbar({navBackground}) {
  const [{userInfo}] = useStateProvider();

  return (
    <Container navBackground = {navBackground}>
      <div className="search_bar">
        <FaSearch />
        <input type="text" placeholder='Artist, Songs Or PodCasts' />
      </div>
      <div className="avatar">
        <a href="#">
          <CgProfile />
          <span>
            {userInfo?.userName}
          </span>
        </a>
      </div>
    </Container>
  )
}
const Container = styled.div`
  background-color: ${({navBackground}) => navBackground ? "rgba(0,0,0,0.7)" : "none"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 15vh;
  position: sticky;
  top: 0;
  transition: 0.3s ease-in-out;
  
`;

export default Navbar

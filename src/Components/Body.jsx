import React , {useEffect} from 'react'
import { AiFillClockCircle } from 'react-icons/ai'
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';
import styled from "styled-components"
function Body({headerBackground}) {
  const [{token, selectedPlaylistId, selectedPlaylist },dispatch] = useStateProvider();
  useEffect(() => {
    const getInitialPlaylist = async() => {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
      {
        headers:{
          Authorization: "Bearer "+ token,
          "Content-Type": "application/json",
       },
      });
      const selectedPlaylist = {
        name: response.data.name,
        id: response.data.id,
        description: response.data.description.startsWith("<a") ? "" : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({track}) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      }
      // console.log(selectedPlaylist)
      dispatch({type: reducerCases.SET_PLAYLIST,selectedPlaylist})
    }
    getInitialPlaylist();
  },[token,dispatch,selectedPlaylistId]);

  const msToMinutes = (ms) => {
    const minutes = Math.floor(ms/60000);
    const seconds = ((ms%60000)/1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  return (
    <Container headerBackground = {headerBackground}>
    {/* <div className='body-div'> */}
      {
        selectedPlaylist && (
          <>
            <div className="playlist">
              <div className="playlist-image">
                <img src={selectedPlaylist.image} alt="selectedPlaylist" />
              </div>
              <div className="details">
                <span className='type'>PLAYLIST</span>
                <h1 className='title'>{selectedPlaylist.name}</h1>
                <p className='description'> {selectedPlaylist.description} </p>
              </div>
            </div>
            <div className="list">
              <div className="header_row">
                <div className="col"> 
                <span>#</span> 
                </div>
                <div className="col"> 
                <span>TITLE</span> 
                </div>
                <div className="col"> 
                <span>ALBUM</span> 
                </div>
                <div className="col"> 
                <span>
                  <AiFillClockCircle/>
                </span> 
                </div>
              </div>
              <div className="tracks">
                {
                  selectedPlaylist.tracks.map(({
                    id,
                    name,
                    artists,
                    image,
                    duration,
                    album,
                    context_uri,
                    track_number,
                  },index) => {
                    return (
                          <div className="row" key={id}>
                            <div className="col">
                              <span>{index+1}</span>
                            </div>
                            <div className="col detail">
                              <div className="playlist-image-data">
                              <img src={image} alt="track" />
                              </div>
                            <div className="info">
                              <span className='name'>{name}</span>
                              <span>{artists}</span>
                            </div>
                            </div>
                            <div className="col">
                              <span> {album} </span>
                            </div>
                            <div className="col">
                              <span>{msToMinutes(duration) }</span>
                            </div>
                          </div>
                    )
                  })
                }
              </div>
            </div>
          </>
        )
      }
    {/* </div> */}
    </Container>
  )
}
const Container = styled.div`
  .header_row{
    display: grid;
    grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
    color: #dddcdc;
    margin: 1rem 0 0 0;
    position: sticky;
    top: 15vh;
    padding: 1rem 3rem;
    transition: 0.3s ease-in-out;
    background-color: ${({headerBackground}) => headerBackground ? "#000000dc" : "none"};
  }
`;

export default Body

import React from 'react'
import "./index.css"
const Login = ()=> {
  const handleclick = () => {
    const clientId = "86d0f1be8dc547cf896f2dfdcb3e10b1";
    const redirectUrl = "http://localhost:5173/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
      "app-remote-control",
      "streaming"
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
      )}&response_type=token&show_daialog=true`;
  };
  return (
    <div className="login-image" >
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black-768x230.png" alt="Spotify Icon" />
      <button onClick={handleclick}>Connect Spotify</button>
    </div>
  )
}
export default Login



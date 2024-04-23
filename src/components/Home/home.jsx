import "./home.scss";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { getPlaylists, getToken } from "../fetchData";
import { All } from "../links";

const Home = () => {
  const [data, setData] = useState([]);
  const tokenURl = "https://accounts.spotify.com/api/token";

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getToken(tokenURl);
        const playlists = await getPlaylists(All);
        setData(playlists?.playlists.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="playlist">
      <div className="top">
        <div className="arrows">
          <IoIosArrowBack className="IoIosArrowBack" />
          <IoIosArrowForward className="IoIosArrowForward" />
        </div>
        <h2>Good afternoon</h2>
        <div className="top-playlists">
          {data.slice(14, 20).map((playlist, index) => (
            <Link
              to={`/playlist/${playlist.id}?type=All`}
              key={index}
              className="top_playlist-card"
            >
              <img src={playlist.images[0].url} alt={playlist.name} />
              <h3>{playlist.name}</h3>
            </Link>
          ))}
        </div>
      </div>
      <div className="padding">
        <div className="playlists-title">
          <h2>Your top mixes</h2>
          <p>SEE ALL</p>
        </div>
        <div className="playlist-container">
          {data.slice(5, 9).map((playlist, index) => (
            <Link
              to={`/playlist/${playlist.id}?type=All`}
              key={index}
              className="playlist-card"
            >
              <div className="card-content">
                <img src={playlist.images[0].url} alt={playlist.name} />
                <h4>{playlist.name}</h4>
                <h5>{playlist.description}</h5>
              </div>
            </Link>
          ))}
        </div>
        <div className="playlists-title">
          <h2>Made for you</h2>
          <p>SEE ALL</p>
        </div>
        <div className="playlist-container">
          {data.slice(9, 13).map((playlist, index) => (
            <Link
              to={`/playlist/${playlist.id}?type=All`}
              key={index}
              className="playlist-card"
            >
              <div className="card-content">
                <img src={playlist.images[0].url} alt={playlist.name} />
                <h4>{playlist.name.slice(0, 12)}</h4>
                <h5>{playlist.description.slice(0, 50)}</h5>
              </div>
            </Link>
          ))}
        </div>
        <div className="playlists-title">
          <h2>Recently played</h2>
          <p>SEE ALL</p>
        </div>
        <div className="playlist-container">
          {data.slice(13, 17).map((playlist, index) => (
            <Link
              to={`/playlist/${playlist.id}?type=All`}
              key={index}
              className="playlist-card"
            >
              <div className="card-content">
                <img src={playlist.images[0].url} alt={playlist.name} />
                <h4>{playlist.name.slice(0, 12)}</h4>
                <h5>{playlist.description.slice(0, 50)}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

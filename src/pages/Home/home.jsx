import "./home.scss";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { getPlaylists, getToken } from "../../components/fetchData";
import { All } from "../../components/links";
import Your_Top_mixes from "../../components/playlist/Your_Top_mixes";
import Made_for_you from "../../components/playlist/Made_for_you";
import Recently from "../../components/playlist/Recently played";
import Jump from "../../components/playlist/Jump";
import Uniquely from "../../components/playlist/Uniquely";

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
      <div>
        <Your_Top_mixes />
        <Made_for_you />
        <Recently />
        <Jump />
        <Uniquely />
      </div>
      {/* <Recently /> */}
      <div className="padding">
        {/* <div className="playlists-title">
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
        </div> */}

        {/* <div className="playlist-container">
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
        </div> */}
      </div>
    </div>
  );
};

export default Home;

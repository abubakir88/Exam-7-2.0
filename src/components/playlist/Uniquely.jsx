import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPlaylists, getToken } from "../fetchData";
import { Uniquely } from "../links";
import "../style.scss";

const Uniquely = () => {
  const tokenURl = "https://accounts.spotify.com/api/token";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getToken(tokenURl);
        const playlists = await getPlaylists(Uniquely);
        setData(playlists?.playlists.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      <div className="padding">
        <div className="playlists-title">
          <h2>Uniquely yours</h2>
          <p>SEE ALL</p>
        </div>
        <div className="playlist-container">
          {data.slice(0, 4).map((playlist, index) => (
            <Link
              to={`/playlist/${playlist.id}?type=Uniquely`}
              key={index}
              className="playlist-card"
            >
              <div className="card-content">
                <img src={playlist.images[0].url} alt={playlist.name} />
                <h4>{playlist.name}</h4>
                <h5>{playlist.description.slice(0, 22)}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Uniquely;

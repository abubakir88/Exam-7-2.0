import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { All } from "../../components/links";
import { getPlaylists, getToken } from "../../components/fetchData";
import "./playlist.scss";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
} from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { CiSaveDown1 } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";

const Details = () => {
  const { id } = useParams();
  const api = window.location.href;
  const apiUrl = api.toString().split("?type=")[1];
  const tokenURl = "https://accounts.spotify.com/api/token";

  const [data, setData] = useState(null);
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getToken(tokenURl);
        const playlists = await getPlaylists(All);
        const album = await getPlaylists(
          "https://api.spotify.com/v1/playlists/37i9dQZF1DWWY64wDtewQt/tracks"
        );
        console.log(album);
        setData(playlists?.playlists.items);
        setAlbum(album);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [api, apiUrl, id]);

  return (
    <div className="playlist-content">
      <div>
        {data?.map((el, i) => {
          // console.log(el);
          if (el?.id === id) {
            return (
              <div key={i}>
                <div className="playlist-top">
                  <div className="arrows">
                    <IoIosArrowBack className="IoIosArrowBack" />
                    <IoIosArrowForward className="IoIosArrowForward" />
                  </div>
                  <div className="playlist_top-texts">
                    <img src={el?.images[0].url} alt={el?.name} />
                    <div className="texts">
                      <h6>PUBLIC PLAYLIST</h6>
                      <h1>{el?.name}</h1>
                      <p>
                        Julia Wolf, ayokay, Khalid <span>and more</span>
                      </p>
                      <p>
                        <span>ade for </span>davedirect3
                        <span>34 songs, 2hr 01 min</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="padding">
                  <div className="actions">
                    <div className="buttons">
                      <FaCirclePlay className="FaCirclePlay" />
                      <FcLike className="FcLike" />
                      <CiSaveDown1 className="CiSaveDown1" />
                      <BsThreeDots className="BsThreeDots" />
                    </div>
                    <div className="search">
                      <IoSearchOutline className="IoSearchOutline" />
                      <p>Custom order</p>
                      <IoIosArrowDown className="IoIosArrowDown" />
                      <p></p>
                    </div>
                  </div>
                  <table className="table table-dark table-hover ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">ALBUM</th>
                        <th scope="col">DATE ADDED</th>
                        <th scope="col">
                          <MdOutlineWatchLater />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {album.items.slice(0, 20).map((items, i) => (
                        <tr className="playlist" key={i}>
                          <th>{i + 1}</th>
                          <td>
                            <img src={items.track.album.images[2].url} alt="" />
                          </td>
                          <td>
                            <audio
                              controls
                              src={items.track.preview_url}
                            ></audio>
                          </td>
                          <td>@mdo</td>
                          <td>time</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Details;

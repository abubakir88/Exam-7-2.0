import "./left.scss";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { LuLibrary } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
const Left = () => {
  return (
    <div className="left">
      <div className="all">
        <div className="three">
          <Link to="/" className="home">
            <IoMdHome className="IoMdHome" />
            <h3>Home</h3>
          </Link>
          <div className="search">
            <FaSearch className="FaSearch" />
            <h3>Search</h3>
          </div>
          <div className="library">
            <LuLibrary className="LuLibrary" />
            <h3>Search</h3>
          </div>
        </div>
        <div className="two">
          <div className="create">
            <FiPlus className="FiPlus" />
            <h3>Create Playlist</h3>
          </div>
          <Link to="like" className="like">
            <FcLike className="FcLike" />
            <h3>Liked Songs</h3>
          </Link>
          <hr className="hr" />
        </div>
        <div className="texts">
          <p>Chill Mix</p>
          <p>Insta Hits</p>
          <p>Your Top Songs 2021</p>
          <p>Mellow Songs</p>
          <p>Anime Lofi & Chillhop Music</p>
          <p>BG Afro “Select” Vibes</p>
          <p>Afro “Select” Vibes</p>
          <p>Happy Hits!</p>
          <p>Deep Focus</p>
          <p>Instrumental Study</p>
          <p>OST Compilations</p>
          <p>Nostalgia for old souled mill...</p>
          <p>Mixed Feelings</p>
        </div>
      </div>
    </div>
  );
};

export default Left;

import "./right.scss";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import rightImg from "/right_image.png";

const Right = () => {
  return (
    <div className="right">
      <div className="all">
        <div className="top-title">
          <h3>Friend Activity</h3>
          <div className="top-icons">
            <AiOutlineUserAdd className="AiOutlineUserAdd" />
            <IoMdClose className="IoMdClose" />
          </div>
        </div>
        <p>
          Let friends and followers on Spotify see what you’re listening to.
        </p>
        <div className="users">
          <img src={rightImg} alt="" />
          <img src={rightImg} alt="" />
          <img src={rightImg} alt="" />
        </div>
        <h6>
          Go to Settings Social and enable “Share my listening activity on
          Spotify.’ You can turn this off at any time.
        </h6>
        <button>SETTINGS</button>
      </div>
    </div>
  );
};

export default Right;

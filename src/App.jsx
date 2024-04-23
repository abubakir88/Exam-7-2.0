import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Like from "./components/Like/like";
import Playlist from "./components/Playlist/playlist";
// import NotFound from "./components/NotFound/notFound";
import Right from "./components/fixed/right";
import Left from "./components/fixed/left";

const App = () => {
  return (
    <Router>
      <div className="body">
        <Left />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/like" element={<Like />} />
          <Route path="/playlist/:id" element={<Playlist />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Right />
      </div>
    </Router>
  );
};

export default App;

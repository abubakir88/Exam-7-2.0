import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Like from "./pages/Like/like";
import Playlist from "./pages/Playlist/playlist";
import NotFound from "./pages/NotFound/notFound";
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Right />
      </div>
    </Router>
  );
};

export default App;

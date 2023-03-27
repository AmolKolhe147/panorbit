import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContextApi from "./api/ContextApi";
import LeftSideBar from "./common/LeftSideBar";
import UserDetails from "./pages/UserDetails";
import HomePage from "./pages/HomePage";
import HomeProfile from "./common/HomeProfile";
import Posts from "./pages/Posts";
import Gallery from "./pages/Gallery";
import Todo from "./pages/Todo";

function App() {
  return (
    <ContextApi>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="homepage/:id" element={<HomePage />} />
        <Route path="post" element={<Posts />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </ContextApi>
  );
}

export default App;

import "./App.css";
import Home from "./Pages/Home";
import CoursePage from "./Pages/ScoreBoard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scoreboard/:groupName" element={<CoursePage />} />
        <Route path="/404" element={console.log("404 Not found")} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

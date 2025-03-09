import "./App.css";
import Home from "./Pages/Home";
import CoursePage from "./Pages/ScoreBoard";
import NotFound from "./Pages/NotFound";
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

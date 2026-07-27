import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArenaPage from "./pages/ArenaPage";
import AboutUs from "./pages/AbouUspage";
import CommunityPage from "./pages/CommunityPage";
import DownloadPage from "./pages/DownloadPage";
import NavBar from "./components/NavBar";
import PlayChess from "./pages/PlayChess";

function App() {
  const [totalVisits, setTotalVisits] = useState(0);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);




  useEffect(() => {
    fetch('https://api.counterapi.dev/v2/spaces-team-3846/forked/up')
    fetch('https://api.counterapi.dev/v2/spaces-team-3846/forked')

      .then(res => res.json())

      .then(data => {
        setTotalVisits(data.data.up_count-data.data.down_count)
        console.log("Upcount",data.data.up_count);
        console.log("downCount",data.data.down_count);
        console.log("Total Count",data.data.up_count-data.data.down_count)
      });

  }, []);




  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>

        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<HomePage totalVisits={totalVisits}/>} />
          <Route path="/arena" element={<ArenaPage totalVisits={totalVisits} />} />
          <Route path="/about" element={<AboutUs  totalVisits={totalVisits} />} />
          <Route path="/community" element={<CommunityPage totalVisits={totalVisits} />} />
          <Route path="/download" element={<DownloadPage totalVisits={totalVisits} />} />
          <Route path="/play" element={<PlayChess />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArenaPage from "./pages/ArenaPage";
import AboutUs from "./pages/AbouUspage";
import CommunityPage from "./pages/CommunityPage";
import DownloadPage from "./pages/DownloadPage";
import NavBar from "./components/NavBar";

function App() {

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
  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>

        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/arena" element={<ArenaPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
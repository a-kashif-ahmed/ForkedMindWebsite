
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArenaPage from "./pages/ArenaPage";
import AboutUs from "./pages/AbouUspage";
import CommunityPage from "./pages/CommunityPage";

function App() {

  return (
    <BrowserRouter>
      


        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/arena" element={<ArenaPage />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/community" element={<CommunityPage/>}/>
        </Routes>

      
    </BrowserRouter>
  );
}

export default App;
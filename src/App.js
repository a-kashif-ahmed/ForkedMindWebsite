
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArenaPage from "./pages/ArenaPage";
import AboutUs from "./pages/AbouUspage";

function App() {

  return (
    <BrowserRouter>
      


        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/arena" element={<ArenaPage />} />
          <Route path="/about" element={<AboutUs/>}/>
        </Routes>

      
    </BrowserRouter>
  );
}

export default App;
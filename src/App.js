
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArenaPage from "./pages/ArenaPage";

function App() {

  return (
    <BrowserRouter>
      


        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/arena" element={<ArenaPage />} />
        </Routes>

      
    </BrowserRouter>
  );
}

export default App;
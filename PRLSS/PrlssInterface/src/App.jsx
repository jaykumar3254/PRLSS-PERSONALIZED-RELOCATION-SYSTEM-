import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import Home from "./Components/Home.jsx";
import Map from "./Components/Map.jsx";
import RecommendationPage from "./pages/recommandationpage.jsx";
import Help from "./Components/Help.jsx";
import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/RecommendationPage" element={<RecommendationPage />} />
      </Routes>
      <Footer />
    </> 
  );
}

export default App;

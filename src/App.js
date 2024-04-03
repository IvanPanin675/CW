import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Fullstack } from "./pages/Fullstack";
import { TechnicalSupport } from "./pages/TechnicalSupport";
import { Telecommunications } from "./pages/Telecommunications";
import { SeoContentManager } from "./pages/SeoContentManager";
import { AboutMe } from "./pages/AboutMe";
import { StyleLink } from "./components/StyleLink";
import { useState } from "react";

const App = () => {
  const [touchCoordinates, setTouchCoordinates] = useState({ x: null, y: null });

  const handleTouchStart = (event) => {
    const { clientX, clientY } = event.touches[0];
    setTouchCoordinates({ x: clientX, y: clientY });
  };
  return (
    <div className="App" onTouchStart={handleTouchStart}>
      {touchCoordinates.x && touchCoordinates.y && (
        <img src="./finger.png" alt="finger"
          className="fingerPrint"
          style={{
            display: 'block',
            position: 'absolute',
            left: touchCoordinates.x - 25, // ви можете налаштувати положення відбитку пальця
            top: touchCoordinates.y - 25, // ви можете налаштувати положення відбитку пальця
            width: '50px',
            height: '50px',
            opacity: '0.5',
          }}
        />
      )}
      <header>
        <nav className="Nav-link">
          <StyleLink background='linear-gradient(180deg, #385ced, black)' to="/">AboutMe</StyleLink>
          <StyleLink background='linear-gradient(180deg, green, black)' to="/fullstack">Fullstack</StyleLink>
          <StyleLink background='linear-gradient(180deg, #273fdc, #ffffff)' to="/technicalSupport">Technical</StyleLink>
          <StyleLink background='linear-gradient(180deg, #1701a8, #1c90ce)' to="/telecommunications">Telecommunications</StyleLink>
          <StyleLink to="/seo-content">Content</StyleLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/technicalSupport" element={<TechnicalSupport />} />
        <Route path="/telecommunications" element={<Telecommunications />} />
        <Route path="/seo-content" element={<SeoContentManager />} />
      </Routes>
    </div>
  );
}

export default App;

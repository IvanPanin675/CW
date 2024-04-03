import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Fullstack } from "./pages/Fullstack";
import { TechnicalSupport } from "./pages/TechnicalSupport";
import { Telecommunications } from "./pages/Telecommunications";
import { SeoContentManager } from "./pages/SeoContentManager";
import { AboutMe } from "./pages/AboutMe";
import { StyleLink } from "./components/StyleLink";

function App ()  {
  return (
    <div className="App">
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

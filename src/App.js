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
          <StyleLink background='linear-gradient(180deg, #385ced, black)' backgactive='linear-gradient(180deg, black, #385ced)' to="/">AboutMe</StyleLink>
          <StyleLink to="/fullstack">Fullstack</StyleLink>
          <StyleLink to="/technicalSupport">Technical</StyleLink>
          <StyleLink to="/telecommunications">Telecommunications</StyleLink>
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

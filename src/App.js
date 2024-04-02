import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Fullstack } from "./pages/Fullstack";
import { TechnicalSupport } from "./pages/TechnicalSupport";
import { Telecommunications } from "./pages/Telecommunications";
import { SeoContentManager } from "./pages/SeoContentManager";
import { FsLink } from "./components/FsLink";
import { AboutMe } from "./pages/AboutMe";
import { AMLink } from "./components/AMLink";
import { SEOLink } from "./components/SEOLink";
import { TSLink } from "./components/TSLink";
import { TelLink } from "./components/TelLink";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="Nav-link">
          <AMLink to="/cw/">About me</AMLink>
          <FsLink to="/cw/fullstack">Fullstack</FsLink>
          <TSLink to="/cw/technicalSupport">Technical</TSLink>
          <TelLink to="/cw/telecommunications">Telecommunications</TelLink>
          <SEOLink to="/cw/seo-content">Content</SEOLink>
        </nav>
      </header>
      <Routes>
        <Route path="/cw/" element={<AboutMe />} />
        <Route path="/cw/fullstack" element={<Fullstack />} />
        <Route path="/cw/technicalSupport" element={<TechnicalSupport />} />
        <Route path="/cw/telecommunications" element={<Telecommunications />} />
        <Route path="/cw/seo-content" element={<SeoContentManager />} />
      </Routes>
    </div>
  );
}

export default App;

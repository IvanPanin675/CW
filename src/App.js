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
          <AMLink to="/">About me</AMLink>
          <FsLink to="/fullstack">Fullstack</FsLink>
          <TSLink to="/technicalSupport">Technical</TSLink>
          <TelLink to="/telecommunications">Telecommunications</TelLink>
          <SEOLink to="/seo-content">Content</SEOLink>
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


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Portfolio from "./Portfolio";
import "./app.css";
import CakesPage from "./CakesPage";
import CatalogCategoryPage from "./CatalogCategoryPage";

function Home() {
  return (
    <main className="home-page">
      <header className="home-header">
        <Link to="/" className="home-logo">
          SASHARITY
        </Link>
        <span className="home-tagline">
          CREATIVITY. TECHNOLOGY. LIFESTYLE.
        </span>
      </header>

      <section className="home-hero">
        <p className="eyebrow">A WORLD OF SASHARITY</p>
        <h1>
          Made with purpose.
          <br />
          <span>Designed to inspire.</span>
        </h1>
        <p className="hero-description">
          Discover considered celebrations, thoughtful digital
          solutions, and experiences that bring people together.
        </p>
      </section>

      <section className="brand-grid" aria-label="Explore Sasharity">
        <Link to="/sasharitycakes" className="brand-card">
          <div className="brand-card-image">
            <img
                src="/images/sasharity-cakes.jpg"
                alt="Elegant celebration cake"
            />
            <span className="image-overlay">
                Explore SASHARITY CAKES
            </span>
            </div>
          <div className="brand-card-content">
            <p className="card-label">CELEBRATIONS</p>
            <h2>Sasharity Cakes</h2>
            <p>Cakes, gifts and memorable occasions.</p>
            <span className="card-link">Discover the collection</span>
          </div>
        </Link>

        <Link to="/sasharitech" className="brand-card">
          <img
            src="/images/sasharitech.jpg"
            alt="Minimalist creative technology workspace"
          />
          <span className="image-overlay">
                Explore SASHARITECH
            </span>
          <div className="brand-card-content">
            <p className="card-label">TECHNOLOGY</p>
            <h2>Sasharitech</h2>
            <p>Digital experiences built with intention.</p>
            <span className="card-link">Explore digital solutions</span>
          </div>
        </Link>

        <Link
          to="/danceandfitwithsasharity"
          className="brand-card"
        >
          <img
            src="/images/danceandfit.jpg"
            alt="Woman dancing in a light-filled studio"
          />
          <span className="image-overlay">
                Explore DANCE WITH SASHARITY 
            </span>
          <div className="brand-card-content">
            <p className="card-label">LIFESTYLE</p>
            <h2>Dance &amp; Fitness</h2>
            <p>Movement, wellbeing and shared experiences.</p>
            <span className="card-link">Explore the experience</span>
          </div>
        </Link>
      </section>

      <footer className="home-footer">
        <span>SASHARITY</span>
        <span>
          © {new Date().getFullYear()} Sasharity. All rights reserved.
        </span>
      </footer>
    </main>
  );
}


function Tech() {
  return (
    <main className="simple-page">
      <p className="eyebrow">SASHARITECH</p>
      <h1>Digital solutions for ambitious ideas.</h1>
      <p>Web design, website development and custom applications.</p>
      <Link to="/sasharitech/portfolio">Explore My Portfolio</Link>
      <br />
      <br />
      <Link to="/">Back to Sasharity</Link>
    </main>
  );
}

function Dance() {
  return (
    <main className="simple-page">
      <p className="eyebrow">DANCEANDFITWITHSASHARITY</p>
      <h1>Move. Nourish. Connect.</h1>
      <p>Private dance classes, social dance, fitness and healthy food.</p>
      <Link to="/">Back to Sasharity</Link>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path="/sasharitycakes" element={<CakesPage />} />

        <Route
        path="/sasharitycakes/:categoryId"
        element={<CatalogCategoryPage />}
        />

        <Route
        path="/sasharitycakes/:categoryId/:subcategoryId"
        element={<CatalogCategoryPage />}
        />

        <Route path="/sasharitech" element={<Tech />} />

        <Route
        path="/sasharitech/portfolio"
        element={<Portfolio />}
        />

        <Route
        path="/danceandfitwithsasharity"
        element={<Dance />}
        />

      </Routes>
    </BrowserRouter>
  );
}

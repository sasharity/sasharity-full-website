
import { Link } from "react-router-dom";
import { catalogCategories } from "./data/catalog";
import "./CakesPage.css";

export default function CakesPage() {
  return (
    <main className="cakes-page">
      <header className="cakes-header">
        <Link className="cakes-logo" to="/">
          SASHARITY
        </Link>
        <a className="cakes-nav-link" href="#catalogue">
          Explore the catalogue
        </a>
      </header>

      <section className="cakes-hero">
        <p className="cakes-eyebrow">SASHARITY CAKES AND SURPRISES</p>
        <h1>
          Thoughtful details.
          <br />
          <span>Memorable moments.</span>
        </h1>
        <p className="cakes-intro">
          From beautifully crafted cakes to thoughtful gifts and
          celebration styling, discover something special for every
          occasion.
        </p>
        <a
          className="cakes-button"
          href="https://wa.me/2347036842318?text=Hello%20Sasharity%2C%20I%20would%20like%20to%20make%20an%20enquiry."
          target="_blank"
          rel="noreferrer"
        >
          Enquire on WhatsApp
        </a>
      </section>

      <section className="cakes-services" id="catalogue">
        <div className="cakes-section-heading">
          <p className="cakes-eyebrow">THE COLLECTIONS</p>
          <h2>Find something lovely.</h2>
          <p>
            Explore each collection to discover products, prices and
            options for your occasion.
          </p>
        </div>

        <div className="catalog-category-grid">
          {catalogCategories.map((category) => (
            <Link
              className="catalog-category-card"
              to={category.path}
              key={category.id}
            >
              <img
                src={category.image}
                alt={category.title}
                loading="lazy"
              />
              <div className="category-card-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <span>Explore collection ↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="cakes-custom">
        <p className="cakes-eyebrow">LET'S CREATE SOMETHING SPECIAL</p>
        <h2>Have a particular idea in mind?</h2>
        <p>
          Tell us what you are planning, and we'll help you explore
          the options.
        </p>
        <a
          className="cakes-button"
          href="https://wa.me/2347036842318?text=Hello%20Sasharity%2C%20I%20would%20like%20to%20discuss%20a%20custom%20order."
          target="_blank"
          rel="noreferrer"
        >
          Discuss your order
        </a>
      </section>

      <footer className="cakes-footer">
        <Link className="cakes-logo" to="/">
          SASHARITY
        </Link>
        <span>Cakes, gifts and thoughtful celebrations.</span>
        <Link to="/">Back to the main website</Link>
      </footer>
    </main>
  );
}

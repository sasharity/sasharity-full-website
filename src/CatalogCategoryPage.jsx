
import { Link, useParams } from "react-router-dom";
import {
  catalogCategories,
  cakeSubcategories,
  catalogProducts,
} from "./data/catalog";
import ProductGallery from "./components/ProductGallery";
import "./CatalogCategoryPage.css";

function formatPrice(price) {
  return price == null ? "Price on request" : `₦${price.toLocaleString("en-NG")}`;
}

export default function CatalogCategoryPage() {
  const { categoryId, subcategoryId } = useParams();

  const category = catalogCategories.find(
    (item) => item.id === categoryId
  );

  if (!category) {
    return (
      <main className="catalog-not-found">
        <h1>Collection not found</h1>
        <Link to="/sasharitycakes">Return to the catalogue</Link>
      </main>
    );
  }

  if (categoryId === "cakes" && !subcategoryId) {
    return (
      <main className="subcategory-page">
        <header className="subcategory-header">
          <Link to="/sasharitycakes" className="catalog-logo">
            SASHARITY
          </Link>
          <Link to="/sasharitycakes" className="catalog-back">
            Back to catalogue
          </Link>
        </header>

        <section className="subcategory-intro">
          <p className="catalog-eyebrow">THE CAKE COLLECTION</p>
          <h1>Cakes for every occasion.</h1>
          <p>
            Browse ready-to-go designs, children's cakes, statement
            cakes and bespoke creations.
          </p>
        </section>

        <section className="subcategory-grid">
          {cakeSubcategories.map((item) => (
            <Link
              to={`/sasharitycakes/cakes/${item.id}`}
              className="subcategory-card"
              key={item.id}
            >
              <div className="subcategory-card-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <strong>{formatPrice(item.startingPrice)}</strong>

                {item.deliveryNote && (
                  <span className="delivery-note">
                    {item.deliveryNote}
                  </span>
                )}

                <span className="subcategory-link">
                  View designs ↗
                </span>
              </div>
            </Link>
          ))}
        </section>
      </main>
    );
  }

  const subcategory = subcategoryId
    ? cakeSubcategories.find((item) => item.id === subcategoryId)
    : null;

  if (categoryId === "cakes" && !subcategory) {
    return (
      <main className="catalog-not-found">
        <h1>Cake collection not found</h1>
        <Link to="/sasharitycakes/cakes">Browse cake categories</Link>
      </main>
    );
  }

  const productsKey = subcategoryId || categoryId;
  const products = catalogProducts[productsKey] || [];

  return (
    <ProductGallery
      title={subcategory?.title || category.title}
      description={subcategory?.description || category.description}
      products={products}
      startingPrice={subcategory?.startingPrice}
      deliveryNote={subcategory?.deliveryNote}
      backTo={
        categoryId === "cakes"
          ? "/sasharitycakes/cakes"
          : "/sasharitycakes"
      }
    />
  );
}

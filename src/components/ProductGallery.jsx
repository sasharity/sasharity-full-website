
import { Link } from "react-router-dom";
import "./ProductGallery.css";

const whatsappNumber = "2347036842318";

function formatPrice(price) {
  if (price == null) return "Price on request";

  return `₦${price.toLocaleString("en-NG")}`;
}
function getWhatsAppLink(productName) {
  const message =
    `Hello Sasharity Cakes and Surprises! I'm interested in ${productName}`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function ProductGallery({
  title,
  description,
  products = [],
  startingPrice,
  deliveryNote,
  backTo = "/sasharitycakes",
}) {
  return (
    <main className="catalog-page">
      <header className="catalog-header">
        <Link to="/sasharitycakes" className="catalog-logo">
          SASHARITY
        </Link>

        <Link to={backTo} className="catalog-back">
          Back to catalogue
        </Link>
      </header>

      <section className="catalog-intro">
        <p className="catalog-eyebrow">SASHARITY CAKES AND SURPRISES</p>
        <h1>{title}</h1>
        <p>{description}</p>

        {startingPrice != null && (
          <p className="catalog-starting-price">
            From {formatPrice(startingPrice)}
          </p>
        )}

        {deliveryNote && (
          <p className="catalog-delivery">{deliveryNote}</p>
        )}
      </section>

      <section className="product-grid" aria-label={`${title} products`}>
        {products.length > 0 ? (
          products.map((product) => (
            <article className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
              />

              <div className="product-card-content">
                <h2>{product.name}</h2>
                {product.description && <p>{product.description}</p>}
                {product.deliveryNote && (
                    <p className="product-delivery-note">
                        {product.deliveryNote}
                    </p>
                    )}
                <div className="product-card-footer">
                  <strong>{formatPrice(product.price)}</strong>

                  <a
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enquire ↗
                  </a>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className="catalog-empty">
            Our collection is being prepared. Please enquire on WhatsApp
            for available options.
          </p>
        )}
      </section>

      <section className="catalog-contact">
        <h2>Looking for something personal?</h2>
        <p>Tell us what you have in mind and let's discuss your order.</p>
        <a
          href={getWhatsAppLink(title)}
          target="_blank"
          rel="noreferrer"
        >
          Enquire on WhatsApp
        </a>
      </section>
    </main>
  );
}

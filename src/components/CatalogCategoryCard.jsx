
import { Link } from "react-router-dom";

export default function CatalogCategoryCard({ category }) {
  return (
    <Link to={category.path} className="catalog-category-card">
      <img
        src={category.image}
        alt=""
        loading="lazy"
      />

      <div className="category-card-content">
        <h2>{category.title}</h2>
        <p>{category.description}</p>
        <span>Explore collection ↗</span>
      </div>
    </Link>
  );
}

import react, { useState } from "react";
import { offers } from "../data/offers.js";
import categories from "../data/categories.js";

function CategoryCard({ category, selected, onClick }) {
  return (
    <button
      type="button"
      className={`category-card ${selected ? "active" : ""}`}
      onClick={onClick}
    >
      <img src={category.image} alt={category.name} />
      <span>{category.name}</span>
    </button>
  );
}

export default function Categories({ value, onChange }) {
  return (
    <div className="categories">
      {categories.map((c) => (
        <CategoryCard
          key={c.id}
          category={c}
          selected={value === c.id}
          onClick={() => onChange(c.id)}
        />
      ))}
    </div>
  );
}
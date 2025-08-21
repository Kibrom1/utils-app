import React from 'react';

export default function Categories({ categories, active, onSelect }) {
  return (
    <div className="categories">
      {categories.map(cat => (
        <button
          key={cat.id}
          className={`category-btn ${active === cat.id ? 'active' : ''}`}
          data-category={cat.id}
          onClick={() => onSelect(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

import React from 'react';

export default function UtilCard({ util, onOpen }) {
  const handleClick = (e) => {
    e.stopPropagation();
    if (typeof onOpen === 'function') onOpen(util.id);
  };

  return (
    <button
      type="button"
      className={`util-card ${util.category}`}
      data-category={util.category}
      data-util={util.id}
      onClick={handleClick}
      aria-label={`Open ${util.title}`}
    >
      <div className="util-icon">{util.icon}</div>
      <h3>{util.title}</h3>
      <p>{util.description}</p>
      <ul className="util-features">
        {util.features && util.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <div className="util-tags">
        {util.tags && util.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </button>
  );
}

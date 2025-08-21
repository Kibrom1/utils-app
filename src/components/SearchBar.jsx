import React from 'react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        id="searchInput"
        className="search-input"
        placeholder="Search utilities..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <span className="search-icon">🔍</span>
    </div>
  );
}

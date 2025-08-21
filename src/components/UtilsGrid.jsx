import React from 'react';
import UtilCard from './UtilCard';

export default function UtilsGrid({ utils, searchTerm, activeCategory, onOpen }) {
  const normalized = (s='') => s.toLowerCase();

  const filtered = utils.filter(u => {
    const title = normalized(u.title);
    const desc = normalized(u.description);
    const tags = (u.tags || []).join(' ').toLowerCase();
    const matchesSearch = title.includes(normalized(searchTerm)) || desc.includes(normalized(searchTerm)) || tags.includes(normalized(searchTerm));
    const matchesCategory = activeCategory === 'all' || (u.category || '').includes(activeCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="utils-grid" id="utilsGrid">
      {filtered.map(u => <UtilCard key={u.id} util={u} onOpen={onOpen} />)}
    </div>
  );
}

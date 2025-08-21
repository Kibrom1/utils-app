import React from 'react';

export function PageContainer({ selected, onBack, pages }) {
  if (!selected) return null;
  const page = pages[selected];
  if (!page) return null;

  return (
    <div id={selected} className={`page-content active`}>
      <button className="back-btn" onClick={onBack}>← Back to Utils</button>
      <div dangerouslySetInnerHTML={{ __html: page }} />
    </div>
  );
}

export default PageContainer;

import React from 'react';

export function PageContainer({ selected, onBack, pages }) {
  if (!selected) return null;
  const page = pages[selected];
  if (!page) {
    // Fallback UI when no HTML content exists for the selected page
    const title = selected ? selected.replace(/-/g, ' ') : 'Details';
    return (
      <div id={selected} className={`page-content active`}>
        <button className="back-btn" onClick={onBack}>← Back to Utils</button>
        <h1>{title}</h1>
        <p>No detailed content available yet. Showing a summary placeholder:</p>
        <div className="command-section">
          <pre><code>{title}</code></pre>
        </div>
      </div>
    );
  }

  return (
    <div id={selected} className={`page-content active`}>
      <button className="back-btn" onClick={onBack}>← Back to Utils</button>
      <div dangerouslySetInnerHTML={{ __html: page }} />
    </div>
  );
}

export default PageContainer;

import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import UtilsGrid from './components/UtilsGrid';
import PageContainer from './components/Pages';
import './styles/utils.css';

const utilsData = [
  { id: 'git-commands', category: 'git', title: 'Git Commands Cheat Sheet', description: 'Complete reference for Git version control commands, from basic to advanced operations.', tags: ['Git','Version Control','CLI'], icon: '🔀', features:['Branch management','Merge & rebase workflows','Remote operations','Troubleshooting guide'] },
  { id: 'docker-commands', category: 'docker', title: 'Docker Reference Guide', description: 'Essential Docker commands for containerization, image management, and orchestration.', tags: ['Docker','Containers','DevOps'], icon: '🐳', features:['Container lifecycle','Image operations','Docker Compose','Networking & volumes'] },
  { id: 'python-snippets', category: 'python', title: 'Python Code Snippets', description: 'Useful Python code snippets, one-liners, and common patterns for everyday development.', tags: ['Python','Snippets','Quick Reference'], icon: '🐍', features:['Data structures','File operations','List comprehensions','Error handling'] },
  { id: 'js-utilities', category: 'javascript', title: 'JavaScript Utilities', description: 'Modern JavaScript utility functions, array methods, and ES6+ features reference.', tags: ['JavaScript','ES6+','Frontend'], icon: '⚡', features:['ES6+ features','Array methods','Async/await patterns','DOM manipulation'] },
  { id: 'css-tricks', category: 'css', title: 'CSS Tricks & Snippets', description: 'CSS tricks, flexbox guides, grid layouts, and modern CSS features for better styling.', tags: ['CSS','Styling','Frontend'], icon: '🎨', features:['Flexbox & Grid','Animations','Responsive design','Modern CSS features'] },
  { id: 'linux-commands', category: 'linux', title: 'Linux Commands Guide', description: 'Essential Linux/Unix commands for file operations, system administration, and shell scripting.', tags: ['Linux','Terminal','System Admin'], icon: '🐧', features:['File operations','Process management','Network commands','Shell scripting'] },
  { id: 'regex-patterns', category: 'regex', title: 'Regex Patterns Library', description: 'Common regular expression patterns for validation, parsing, and text manipulation.', tags: ['Regex','Validation','Text Processing'], icon: '🔍', features:['Email validation','Phone numbers','URL patterns','Text extraction'] },
  { id: 'sql-queries', category: 'devops', title: 'SQL Query Reference', description: 'Common SQL queries, database operations, and optimization techniques for developers.', tags: ['SQL','Database','Queries'], icon: '🗃️', features:['CRUD operations','Joins & subqueries','Performance tips','Database design'] },
  { id: 'api-testing', category: 'api', title: 'API Testing Tools', description: 'Tools and techniques for API testing, debugging, and documentation with various methods.', tags: ['API','Testing','HTTP'], icon: '🔌', features:['HTTP methods','Status codes','Authentication','Testing tools'] },
  { id: 'kubernetes-guide', category: 'devops', title: 'Kubernetes Quick Guide', description: 'Kubernetes commands, YAML configurations, and cluster management essentials.', tags: ['Kubernetes','DevOps','Orchestration'], icon: '☸️', features:['kubectl commands','Pod management','Services & ingress','YAML configs'] },
  { id: 'vscode-shortcuts', category: 'all', title: 'VS Code Shortcuts', description: 'Essential Visual Studio Code keyboard shortcuts and productivity tips for faster development.', tags: ['VS Code','Shortcuts','Productivity'], icon: '⌨️', features:['Navigation shortcuts','Editing commands','Multi-cursor tricks','Extension tips'] },
  { id: 'react-hooks', category: 'javascript', title: 'React Hooks Guide', description: 'Complete guide to React Hooks with examples, patterns, and best practices.', tags: ['React','Hooks','Frontend'], icon: '⚛️', features:['Built-in hooks','Custom hooks','Performance tips','Common patterns'] }
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'git', label: 'Git' },
  { id: 'docker', label: 'Docker' },
  { id: 'python', label: 'Python' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'css', label: 'CSS' },
  { id: 'linux', label: 'Linux' },
  { id: 'devops', label: 'DevOps' }
];

// Simple pages map with HTML snippets (kept small); can be expanded
const pages = {
  'git-commands': `<h1>🔀 Git Commands Cheat Sheet</h1><div class="command-section"><h4>Basic Git Commands</h4><pre><code># Initialize repository\ngit init\n\n# Clone repository\ngit clone &lt;repository-url&gt;\n\n# Check status\ngit status</code></pre></div>`,
  'docker-commands': `<h1>🐳 Docker Reference Guide</h1><div class="command-section"><h4>Container Operations</h4><pre><code># Run container\ndocker run -it ubuntu bash</code></pre></div>`,
  'python-snippets': `<h1>🐍 Python Code Snippets</h1><div class="command-section"><h4>List Operations</h4><pre><code>squares = [x**2 for x in range(10)]</code></pre></div>`
};

export default function UtilsSite() {
  const [search, setSearch] = useState('');
  const [active, setActive] = useState('all');
  const [selectedPage, setSelectedPage] = useState(null);

  return (
    <div className="container">
      <div className="header">
        <h1>🛠️ Developer Utils Hub</h1>
        <p>Your one-stop collection of essential development tools, cheat sheets, and quick references</p>

        <SearchBar value={search} onChange={setSearch} />
        <Categories categories={categories} active={active} onSelect={setActive} />
      </div>

      <div id="homePage">
        <UtilsGrid utils={utilsData} searchTerm={search} activeCategory={active} onOpen={setSelectedPage} />
      </div>

      <PageContainer selected={selectedPage} onBack={() => setSelectedPage(null)} pages={{...pages, ...Object.fromEntries(utilsData.map(u=>[u.id, `<h1>${u.title}</h1><div class=\"command-section\"><pre><code>${u.description}</code></pre></div>`]))}} />

      <div className="footer">
        <p>💻 Developer Utils Hub - Your productivity toolkit</p>
        <p>Built with ❤️ for developers, by developers</p>
      </div>
    </div>
  );
}

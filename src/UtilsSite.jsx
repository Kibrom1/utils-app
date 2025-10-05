import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import UtilsGrid from './components/UtilsGrid';
import { PageContainer } from './components/Pages';
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
  'python-snippets': `
    <h1>🐍 Python Code Snippets</h1>
    <div class="command-section">
      <h4>List Operations</h4>
      <pre><code># List comprehensions
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]

# Flatten nested lists
nested = [[1, 2], [3, 4], [5, 6]]
flattened = [item for sublist in nested for item in sublist]

# Remove duplicates (preserve order)
def remove_duplicates(lst):
    return list(dict.fromkeys(lst))

# Find common elements
list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]
common = list(set(list1) & set(list2))</code></pre>
    </div>

    <div class="command-section">
      <h4>Dictionary Operations</h4>
      <pre><code># Dictionary comprehension
squares_dict = {x: x**2 for x in range(5)}

# Merge dictionaries (Python 3.9+)
dict1 = {'a': 1, 'b': 2}
dict2 = {'c': 3, 'd': 4}
merged = dict1 | dict2

# Get value with default
value = my_dict.get('key', 'default_value')

# Invert dictionary
inverted = {v: k for k, v in original_dict.items()}

# Sort dictionary by value
sorted_dict = dict(sorted(my_dict.items(), key=lambda x: x[1]))</code></pre>
    </div>

    <div class="command-section">
      <h4>File Operations</h4>
      <pre><code># Read file content
with open('file.txt', 'r') as f:
    content = f.read()

# Read lines into list
with open('file.txt', 'r') as f:
    lines = f.readlines()

# Write to file
with open('output.txt', 'w') as f:
    f.write('Hello World\\n')

# JSON operations
import json

# Read JSON
with open('data.json', 'r') as f:
    data = json.load(f)

# Write JSON
with open('data.json', 'w') as f:
    json.dump(data, f, indent=2)</code></pre>
    </div>

    <div class="command-section">
      <h4>String Operations</h4>
      <pre><code># String formatting
name = "John"
age = 30
formatted = f"Name: {name}, Age: {age}"

# Split and join
words = text.split(' ')
joined = '-'.join(words)

# Remove whitespace
cleaned = text.strip()

# Replace text
new_text = text.replace('old', 'new')

# Check string properties
text.isdigit()   # all digits
text.isalpha()   # all letters
text.startswith('prefix')
text.endswith('suffix')</code></pre>
    </div>
  `,
  'js-utilities': `<h1>⚡ JavaScript Utilities</h1><div class="command-section"><h4>ES6+ Features</h4><pre><code>// Arrow functions
const add = (a, b) => a + b;

// Destructuring
const { name, age } = person;
const [first, second] = array;

// Template literals
const message = \`Hello \${name}, you are \${age} years old\`;

// Spread operator
const newArray = [...oldArray, newItem];
const newObject = {...oldObject, newProp: value};

// Array methods
const doubled = numbers.map(x => x * 2);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);</code></pre></div>`,
  'css-tricks': `<h1>🎨 CSS Tricks & Snippets</h1><div class="command-section"><h4>Flexbox Layout</h4><pre><code>/* Flexbox container */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* Flexbox items */
.item {
  flex: 1;
  align-self: stretch;
}</code></pre></div><div class="command-section"><h4>Grid Layout</h4><pre><code>/* CSS Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}</code></pre></div>`,
  'linux-commands': `<h1>🐧 Linux Commands Guide</h1><div class="command-section"><h4>File Operations</h4><pre><code># List files
ls -la

# Copy files
cp source.txt destination.txt

# Move/rename files
mv oldname.txt newname.txt

# Find files
find /path -name "*.txt"

# Search in files
grep "pattern" file.txt</code></pre></div>`
};

export default function UtilsSite() {
  const [search, setSearch] = useState('');
  const [active, setActive] = useState('all');
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    if (selectedPage) {
      // scroll to top when a page is opened
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedPage]);

  const allPages = React.useMemo(() => {
    const fallbackPages = Object.fromEntries(
      utilsData
        .filter(u => !pages[u.id]) // Only create fallbacks for pages that don't exist
        .map(u => [u.id, `<h1>${u.title}</h1><div class="command-section"><pre><code>${u.description}</code></pre></div>`])
    );
    return {...pages, ...fallbackPages};
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>🛠️ Developer Utils Hub</h1>
        <p>Your one-stop collection of essential development tools, cheat sheets, and quick references</p>

        <SearchBar value={search} onChange={setSearch} />
        <Categories categories={categories} active={active} onSelect={setActive} />
      </div>

      {/* show home grid only when no page selected */}
      {!selectedPage && (
        <div id="homePage">
          <UtilsGrid utils={utilsData} searchTerm={search} activeCategory={active} onOpen={(id) => setSelectedPage(id)} />
        </div>
      )}


      <PageContainer selected={selectedPage} onBack={() => setSelectedPage(null)} pages={allPages} />

      <div className="footer">
        <p>💻 Developer Utils Hub - Your productivity toolkit</p>
        <p>Built with ❤️ for developers, by developers</p>
      </div>
    </div>
  );
}

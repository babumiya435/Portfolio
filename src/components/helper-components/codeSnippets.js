const codeSnippet = `// App.js

import React from 'react';
import './App.css'; // Import styles

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to My React App</h1>
        <p>This is a simple React.js example.</p>
      </header>
    </div>
  );
}

export default App;
`

codeSnippet.trim().replaceAll(/"/g, "'");
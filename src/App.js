// App.js
import React from 'react';
import './App.css';
import MarkdownEditor from './MarkdownEditor';

function App() {
  return (
    <div className="App">
      <h1>Markdown Editor</h1>
      <div className="editor-container">
        <MarkdownEditor />
      </div>
    </div>
  );
}

export default App;

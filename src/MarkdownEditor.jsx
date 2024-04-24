// MarkdownEditor.js
import React, { useState } from 'react';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const MarkdownEditor = () => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [htmlContent, setHtmlContent] = useState('');

  const handleInputChange = (event) => {
    const inputContent = event.target.value;
    setMarkdownContent(inputContent);
    const parsedHtmlContent = md.render(inputContent);
    setHtmlContent(parsedHtmlContent);
  };

  return (
    <div className="markdown-editor">
      <textarea
        className="markdown-input"
        placeholder="Enter Markdown content..."
        value={markdownContent}
        onChange={handleInputChange}
      ></textarea>
      <div
        className="markdown-preview"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>
    </div>
  );
};

export default MarkdownEditor;

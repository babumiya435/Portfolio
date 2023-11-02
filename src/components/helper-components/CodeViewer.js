import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // Choose a code style (e.g., docco)


function CodeViewer() {
  const code = `
  function greet(name) {
    console.log(\`Hello, \${name}!\`);
  }
  greet("John");
  `;

  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {code}
    </SyntaxHighlighter>
  );
}

export default CodeViewer;

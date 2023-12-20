import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // Choose a code style (e.g., docco)


function CodeViewer(props) {
  const code = `
  function greet(name) {
    console.log(\`Hello, \${name}!\`);
  }
  greet("John");
  `;

  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {props.contentRelatedCode}
    </SyntaxHighlighter>
  );
}

export default CodeViewer;

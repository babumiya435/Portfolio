import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // Choose a code style (e.g., docco)
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";


function CodeViewer(props) {

  const calcMinLineNumberWidth = (code) => {
    const lines = [...code].reduce((prev, current) => prev + (current === '\n' ? 1 : 0), 1);
    if (lines > 99) {
        return "50px";
    } else if (lines > 9) {
        return "40px";
    } else {
        return null;
    }
}

const highlightLine = (lineNumber, markLines, color = "#FFDB81") => {

    // only works when showLineNumbers and wrapLines are both enabled
    const style = { display: "block", width: "fit-content" };
    if (markLines.includes(lineNumber)) {
        style.backgroundColor = color;
    }
    return { style };
}

  return (
    <div className="container">
      <SyntaxHighlighter language="javascript"
        style={atomDark}
        className={"syntax-highlighter"}
        useInlineStyles={false}
        showLineNumbers={true}
        lineNumberStyle={{ minWidth: calcMinLineNumberWidth(props.contentRelatedCode) }}
        wrapLines={true}
        // lineProps={(line) => highlightLine(line, props.highlightLines, props.highlightColor)}
      >
        {props.contentRelatedCode}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeViewer;

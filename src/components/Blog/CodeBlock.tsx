import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type Props = {};

export default function CodeBlock({ }: Props) {
    const code = `// This library won't stay because it has some weird bugs with the theme imports
// I guess I'll just code my own library for syntax highlighting
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// This line just breaks everything for some weird reason
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const Component = () => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};`;

    const language = "javascript";

    return (
        <SyntaxHighlighter language={language}>
            {code}
        </SyntaxHighlighter>
    );
}

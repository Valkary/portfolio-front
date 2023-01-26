import { Prism } from "@astrojs/prism";
type Props = {};

const code = `import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const Component = () => {
const codeString = '(num) => num + 1';
return (
<SyntaxHighlighter language="javascript" style={dark}>
{codeString}
</SyntaxHighlighter>
);
};`;

export default function CodeBlock({ }: Props) {
    return (
        <Prism lang="js" code={code} />
    );
}

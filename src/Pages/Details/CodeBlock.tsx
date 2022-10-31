import React from "react";
import { CodeProps } from "react-markdown/lib/ast-to-react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

const CodeBlock = ({ className, children, ...props }: CodeProps) => {
  const match = /language-(\w+)/.exec(className || "");
  return (
    <SyntaxHighlighter
      {...props}
      PreTag="div"
      style={dracula}
      language={match ? match[1] : "language-shell"}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

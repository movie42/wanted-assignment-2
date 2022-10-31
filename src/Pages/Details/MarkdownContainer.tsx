import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";
import CodeBlock from "./CodeBlock";
import {
  BlockQuote,
  Table,
  ContainsTaskList,
  A,
  MarkdownStyle
} from "./styles";

interface IMarkdownContainerProps {
  markdown: string;
}

const MarkdownContainer = ({ markdown }: IMarkdownContainerProps) => {
  return (
    <MarkdownWrapper>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: (props) => <CodeBlock {...props} />,
          tr({ children }) {
            return <tr>{children}</tr>;
          },
          blockquote({ children }) {
            return <BlockQuote>{children}</BlockQuote>;
          },
          table({ children }) {
            return <Table>{children}</Table>;
          },
          ul({ children, className }) {
            return className?.includes("contains-task-list") ? (
              <ContainsTaskList>{children}</ContainsTaskList>
            ) : (
              <ul className={className}>{children}</ul>
            );
          },
          a({ children, href }) {
            return (
              <A href={href} rel="noreferrer" target="_blank">
                {children}
              </A>
            );
          }
        }}
      >
        {markdown}
      </Markdown>
    </MarkdownWrapper>
  );
};

export default MarkdownContainer;

const MarkdownWrapper = styled.div`
  ${MarkdownStyle}
`;

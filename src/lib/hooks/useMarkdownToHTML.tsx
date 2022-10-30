import { useState } from "react";
import { remark } from "remark";
import remarkHtml from "remark-html";

const useMarkdownToHTML = () => {
  const [html, setHtml] = useState("");

  const markdownToHtml = async (markdown: string) => {
    const result = await remark().use(remarkHtml).process(markdown);
    setHtml(result.toString());
  };

  return { markdownToHtml, html };
};

export default useMarkdownToHTML;

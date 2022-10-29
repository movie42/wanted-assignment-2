import { useEffect, useState } from "react";
import { remark } from "remark";
import remarkHtml from "remark-html";

const useMarkdownToHTML = (markdown: string) => {
  const [html, setHtml] = useState("");

  const markdownToHtml = async () => {
    const result = await remark().use(remarkHtml).process(markdown);
    setHtml(result.toString());
  };

  useEffect(() => {
    markdownToHtml();
  }, [markdown]);

  return { markdownToHtml, html };
};

export default useMarkdownToHTML;

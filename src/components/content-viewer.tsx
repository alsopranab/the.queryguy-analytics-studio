"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ContentViewerProps {
  content: string;
  filename: string;
}

const languageMap: Record<string, string> = {
  sql: "sql",
  py: "python",
  js: "javascript",
  ts: "typescript",
  jsx: "jsx",
  tsx: "tsx",
  json: "json",
  yaml: "yaml",
  yml: "yaml",
  md: "markdown",
  sh: "bash",
  bash: "bash",
  css: "css",
  html: "html",
  r: "r",
};

export function ContentViewer({ content, filename }: ContentViewerProps) {
  const isMarkdown = filename.toLowerCase().endsWith(".md");
  const extension = filename.split(".").pop()?.toLowerCase() || "text";
  const language = languageMap[extension] || extension;

  if (isMarkdown) {
    return (
      <div className="prose prose-neutral max-w-none prose-headings:tracking-tight prose-headings:font-semibold prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground prose-code:text-sm prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[#282c34] prose-pre:border prose-pre:border-border/50">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              const inline = !match;
              return inline ? (
                <code className={className} {...props}>
                  {children}
                </code>
              ) : (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    margin: 0,
                    padding: "1rem",
                    fontSize: "0.8125rem",
                    lineHeight: "1.6",
                    borderRadius: "0.5rem",
                  }}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden border border-border bg-[#282c34]">
      <div className="bg-[#21252b] px-4 py-2.5 border-b border-[#181a1f] flex justify-between items-center">
        <span className="text-xs font-mono text-[#9da5b4]">{filename}</span>
        <span className="text-[10px] font-mono text-[#636d83] uppercase tracking-wide">{extension}</span>
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "1.25rem",
          fontSize: "0.8125rem",
          lineHeight: "1.65",
          background: "transparent",
        }}
        showLineNumbers={content.split("\n").length > 10}
        lineNumberStyle={{
          minWidth: "2.5em",
          paddingRight: "1em",
          color: "#4b5263",
          userSelect: "none",
        }}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}

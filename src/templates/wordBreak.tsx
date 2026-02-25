import type { PropertyTemplate } from "../types";

export const wordBreakTemplate: PropertyTemplate = {
  name: "Word Break",
  controls: [],
  values: ["normal", "break-all", "keep-all", "break-word"],
  preview: (style) => {
    return (
      <div
        style={{
          ...style,
          width: "200px",
          padding: "16px",
          background: "#1a2332",
          border: "2px solid #38bdf8",
          borderRadius: "8px",
          color: "#f8fafc",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        Superlongwordwithoutspaces AAAAAABBBBBCCCCCDDDDDEEEEE
      </div>
    );
  },
  generate: (v) => ({
    wordBreak: v as any,
  }),
  prefix: "word-break: ",
  parentClass: "p",
};

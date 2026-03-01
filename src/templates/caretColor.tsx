import type { PropertyTemplate } from "../types";

export const caretColorTemplate: PropertyTemplate = {
  name: "Caret Color",
  controls: [],
  values: ["auto", "#38bdf8", "#facc15", "#ec4899", "#34d399", "transparent"],
  preview: (style) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <input
        type="text"
        defaultValue="Click to type..."
        style={{
          caretColor: style.caretColor as string,
          width: "240px",
          padding: "12px 16px",
          background: "#1a2332",
          border: "2px solid #38bdf8",
          borderRadius: "8px",
          color: "#f8fafc",
          fontSize: "16px",
          outline: "none",
        }}
      />
      <span style={{ color: "#94a3b8", fontSize: "13px" }}>
        フィールドをクリックしてカーソル色を確認
      </span>
    </div>
  ),
  generate: (v) => ({ caretColor: v as any }),
  prefix: "caret-color: ",
  parentClass: "input",
};

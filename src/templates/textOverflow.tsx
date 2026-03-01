import type { PropertyTemplate } from "../types";

export const textOverflowTemplate: PropertyTemplate = {
  name: "Text Overflow",
  controls: [],
  values: ["clip", "ellipsis"],
  preview: (style) => (
    <div
      style={{
        textOverflow: style.textOverflow as any,
        whiteSpace: "nowrap",
        overflow: "hidden",
        width: "220px",
        padding: "16px 20px",
        background: "#1a2332",
        border: "2px solid #38bdf8",
        borderRadius: "8px",
        color: "#facc15",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      Very long text that overflows the container boundary
    </div>
  ),
  generate: (v) => ({
    textOverflow: v as any,
    whiteSpace: "nowrap",
    overflow: "hidden",
  }),
  prefix: "text-overflow: ",
  parentClass: ".box",
};

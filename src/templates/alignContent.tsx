import type { PropertyTemplate } from "../types";

export const alignContentTemplate: PropertyTemplate = {
  name: "Align Content",
  controls: [],
  values: ["flex-start", "flex-end", "center", "space-between", "space-around", "stretch"],
  preview: (style) => (
    <div
      className="flex-container"
      style={{ flexWrap: "wrap", alignContent: style.alignContent as any, height: "220px", width: "280px" }}
    >
      {["A", "B", "C", "D", "E", "F"].map((l) => (
        <div key={l} className="flex-item" style={{ width: "70px", flexShrink: 0 }}>{l}</div>
      ))}
    </div>
  ),
  generate: (v) => ({ alignContent: v as any }),
  prefix: "align-content: ",
  parentClass: ".flex-container",
};

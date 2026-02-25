import type { PropertyTemplate } from "../types";

export const visibilityTemplate: PropertyTemplate = {
  name: "Visibility",
  controls: [],
  values: ["visible", "hidden", "collapse"],
  preview: (style) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
      <div className="box" style={{ visibility: style.visibility as any }} />
      <span style={{ color: "#94a3b8", fontSize: "13px" }}>
        visibility: {style.visibility as string}
        {style.visibility !== "visible" && " (スペースは保持されます)"}
      </span>
    </div>
  ),
  generate: (v) => ({ visibility: v as any }),
  prefix: "visibility: ",
  parentClass: ".box",
};

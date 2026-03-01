import type { PropertyTemplate } from "../types";

export const accentColorTemplate: PropertyTemplate = {
  name: "Accent Color",
  controls: [],
  values: ["auto", "#38bdf8", "#ec4899", "#facc15", "#34d399", "#8b5cf6", "#f97316"],
  preview: (style) => (
    <div
      style={{
        accentColor: style.accentColor as string,
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "20px",
        background: "#1a2332",
        border: "2px solid #38bdf8",
        borderRadius: "8px",
        width: "220px",
      }}
    >
      <label style={{ display: "flex", alignItems: "center", gap: "10px", color: "#f8fafc", fontSize: "15px" }}>
        <input type="checkbox" defaultChecked style={{ width: "20px", height: "20px" }} />
        Checkbox
      </label>
      <label style={{ display: "flex", alignItems: "center", gap: "10px", color: "#f8fafc", fontSize: "15px" }}>
        <input type="radio" defaultChecked style={{ width: "20px", height: "20px" }} />
        Radio
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: "6px", color: "#f8fafc", fontSize: "15px" }}>
        Range
        <input type="range" defaultValue={70} style={{ width: "100%" }} />
      </label>
    </div>
  ),
  generate: (v) => ({ accentColor: v as any }),
  prefix: "accent-color: ",
  parentClass: "input, select",
};

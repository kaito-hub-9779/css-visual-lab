import type { PropertyTemplate } from "../types";

export const orderTemplate: PropertyTemplate = {
  name: "Order",
  controls: [
    { key: "order", label: "Order", min: -3, max: 5, unit: "", default: 0 },
  ],
  values: ["-2", "-1", "0", "1", "2", "3"],
  preview: (style) => (
    <div className="flex-container" style={{ justifyContent: "flex-start", width: "320px" }}>
      {[
        { label: "A", order: 1, color: "linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%)" },
        { label: "B ★", order: parseInt(style.order as string) || 0, color: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)" },
        { label: "C", order: 3, color: "linear-gradient(135deg, #34d399 0%, #0ea5e9 100%)" },
        { label: "D", order: 2, color: "linear-gradient(135deg, #facc15 0%, #f97316 100%)" },
      ].map(({ label, order, color }) => (
        <div key={label} className="flex-item" style={{ order, background: color, fontSize: "13px" }}>
          {label}
        </div>
      ))}
    </div>
  ),
  generate: (v) => ({ order: parseInt(v) as any }),
  prefix: "order: ",
  parentClass: ".flex-item",
};

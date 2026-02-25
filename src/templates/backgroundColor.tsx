import type { PropertyTemplate } from "../types";

export const backgroundColorTemplate: PropertyTemplate = {
  name: "Background Color",
  controls: [],
  values: [
    "#0ea5e9",
    "#ec4899",
    "#facc15",
    "#34d399",
    "#8b5cf6",
    "#f97316",
    "rgba(56, 189, 248, 0.3)",
    "transparent",
  ],
  preview: (style) => (
    <div className="box" style={{ background: style.backgroundColor }} />
  ),
  generate: (v) => ({ backgroundColor: v }),
  prefix: "background-color: ",
  parentClass: ".box",
};

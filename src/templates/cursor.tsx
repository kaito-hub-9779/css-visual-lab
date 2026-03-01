import type { PropertyTemplate } from "../types";

export const cursorTemplate: PropertyTemplate = {
  name: "Cursor",
  controls: [],
  values: [
    "default",
    "pointer",
    "crosshair",
    "move",
    "text",
    "wait",
    "not-allowed",
    "grab",
    "zoom-in",
    "zoom-out",
  ],
  preview: (style) => {
    return (
      <div
        className="box"
        style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "#f8fafc", fontWeight: "bold" }}
      >
        Hover me
      </div>
    );
  },
  generate: (v) => ({
    cursor: v as any,
  }),
  prefix: "cursor: ",
  parentClass: ".box",
};

import type { PropertyTemplate } from "../types";

export const transitionTemplate: PropertyTemplate = {
  name: "Transition",
  controls: [
    {
      key: "duration",
      label: "Duration",
      min: 100,
      max: 3000,
      unit: "ms",
      default: 300,
    },
  ],
  values: [
    "all 0.1s ease",
    "all 0.3s ease",
    "all 0.5s ease-in",
    "all 0.5s ease-out",
    "all 0.5s ease-in-out",
    "all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
    "all 0.3s linear",
  ],
  preview: (style) => {
    return (
      <div
        className="box"
        style={{ ...style, cursor: "pointer" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.2) rotate(15deg)";
          (e.currentTarget as HTMLElement).style.borderRadius = "50%";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1) rotate(0deg)";
          (e.currentTarget as HTMLElement).style.borderRadius = "0%";
        }}
      />
    );
  },
  generate: (v) => ({
    transition: v,
  }),
  prefix: "transition: ",
  parentClass: ".box",
};

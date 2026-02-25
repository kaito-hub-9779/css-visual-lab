import type { PropertyTemplate } from "../types";

export const objectPositionTemplate: PropertyTemplate = {
  name: "Object Position",
  controls: [],
  values: [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top left",
    "bottom right",
    "20% 80%",
  ],
  preview: (style) => (
    <div
      style={{
        width: "200px",
        height: "160px",
        border: "3px solid #facc15",
        borderRadius: "8px",
        overflow: "hidden",
        background: "#111827",
      }}
    >
      <img
        src="https://picsum.photos/seed/nature/400/600"
        alt="object-position demo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "none",
          objectPosition: style.objectPosition as string,
        }}
      />
    </div>
  ),
  generate: (v) => ({ objectPosition: v }),
  prefix: "object-position: ",
  parentClass: "img",
};

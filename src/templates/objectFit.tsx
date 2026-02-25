import type { PropertyTemplate } from "../types";

export const objectFitTemplate: PropertyTemplate = {
  name: "Object Fit",
  controls: [],
  values: ["fill", "contain", "cover", "none", "scale-down"],
  preview: (style) => {
    return (
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "3px solid #facc15",
          borderRadius: "8px",
          overflow: "hidden",
          background: "#111827",
        }}
      >
        <img
          src="https://picsum.photos/seed/css/300/180"
          alt="object-fit demo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: style.objectFit as any,
          }}
        />
      </div>
    );
  },
  generate: (v) => ({
    objectFit: v as any,
  }),
  prefix: "object-fit: ",
  parentClass: "img",
};

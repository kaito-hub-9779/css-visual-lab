import type { PropertyTemplate } from "../types";

export const transformOriginTemplate: PropertyTemplate = {
  name: "Transform Origin",
  controls: [],
  values: [
    "center",
    "top left",
    "top right",
    "bottom left",
    "bottom right",
    "center top",
    "50% 0%",
    "0% 50%",
  ],
  preview: (style) => (
    <div style={{ position: "relative", width: "220px", height: "220px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: "140px",
          height: "140px",
          background: "linear-gradient(135deg, #38bdf8 0%, #8b5cf6 100%)",
          border: "3px solid #facc15",
          borderRadius: "8px",
          transform: "rotate(30deg)",
          transformOrigin: style.transformOrigin as string,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "12px",
          position: "relative",
        }}
      >
        {style.transformOrigin as string}
        <div
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#facc15",
            top: style.transformOrigin?.toString().includes("top") ? "-5px" : style.transformOrigin?.toString().includes("bottom") ? "calc(100% - 5px)" : "calc(50% - 5px)",
            left: style.transformOrigin?.toString().includes("left") ? "-5px" : style.transformOrigin?.toString().includes("right") ? "calc(100% - 5px)" : "calc(50% - 5px)",
          }}
        />
      </div>
    </div>
  ),
  generate: (v) => ({ transformOrigin: v }),
  prefix: "transform-origin: ",
  parentClass: ".box",
};

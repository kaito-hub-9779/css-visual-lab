import type { PropertyTemplate } from "../types";

export const overflowTemplate: PropertyTemplate = {
  name: "Overflow",
  controls: [],
  values: ["visible", "hidden", "scroll", "auto", "clip"],
  preview: (style) => {
    return (
      <div
        className="box"
        style={{ ...style, padding: "12px", boxSizing: "border-box" }}
      >
        <div
          style={{
            width: "300px",
            height: "300px",
            background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          Overflow Content
        </div>
      </div>
    );
  },
  generate: (v) => ({
    overflow: v as any,
  }),
  prefix: "overflow: ",
  parentClass: ".box",
};

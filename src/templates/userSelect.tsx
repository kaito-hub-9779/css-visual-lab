import type { PropertyTemplate } from "../types";

export const userSelectTemplate: PropertyTemplate = {
  name: "User Select",
  controls: [],
  values: ["auto", "none", "text", "all"],
  preview: (style) => {
    return (
      <div
        style={{
          ...style,
          width: "240px",
          padding: "24px",
          background: "#1a2332",
          border: "2px solid #38bdf8",
          borderRadius: "8px",
          color: "#f8fafc",
          fontSize: "16px",
          lineHeight: "1.6",
          textAlign: "center",
        }}
      >
        Try to select this text!<br />
        <span style={{ color: "#facc15", fontSize: "13px" }}>
          user-select: {style.userSelect as string}
        </span>
      </div>
    );
  },
  generate: (v) => ({
    userSelect: v as any,
  }),
  prefix: "user-select: ",
  parentClass: "p",
};

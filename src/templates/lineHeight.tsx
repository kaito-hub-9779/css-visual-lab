import type { PropertyTemplate } from "../types";

export const lineHeightTemplate: PropertyTemplate = {
  name: "Line Height",
  controls: [
    {
      key: "lineHeight",
      label: "Line Height",
      min: 1,
      max: 4,
      unit: "",
      default: 1.5,
    },
  ],
  values: ["1", "1.2", "1.5", "1.8", "2", "2.5", "3"],
  preview: (style) => {
    return (
      <div
        style={{
          ...style,
          width: "280px",
          padding: "16px",
          background: "#1a2332",
          border: "2px solid #38bdf8",
          borderRadius: "8px",
          color: "#f8fafc",
          fontSize: "16px",
        }}
      >
        CSSの行間はline-heightプロパティで制御します。値が大きいほど行間が広くなり、読みやすさが向上します。
      </div>
    );
  },
  generate: (v) => ({
    lineHeight: v,
  }),
  prefix: "line-height: ",
  parentClass: "p",
};

import type { PropertyTemplate } from "../types";

export const columnCountTemplate: PropertyTemplate = {
  name: "Column Count",
  controls: [
    {
      key: "columns",
      label: "Columns",
      min: 1,
      max: 5,
      unit: "",
      default: 2,
    },
  ],
  values: ["1", "2", "3", "4", "5"],
  preview: (style) => {
    return (
      <div
        style={{
          ...style,
          columnGap: "20px",
          width: "360px",
          padding: "16px",
          background: "#1a2332",
          border: "2px solid #38bdf8",
          borderRadius: "8px",
          color: "#f8fafc",
          fontSize: "14px",
          lineHeight: "1.6",
        }}
      >
        CSS Columns allows you to layout content in multiple columns, similar to
        a newspaper or magazine. This property controls how many columns the
        content is split into. Great for text-heavy layouts!
      </div>
    );
  },
  generate: (v) => ({
    columnCount: parseInt(v) as any,
  }),
  prefix: "column-count: ",
  parentClass: ".column-container",
};

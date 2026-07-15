import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "grid", // Essential for justify-items to work with grid layout
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))", // Creates 3 equal columns
  gap: "10px", // Adds spacing between grid items
  alignItems: "center", // Vertically centers items within their cells for better visual balance
};

const demoItemStyles: React.CSSProperties = {
  background: "#38bdf8",
  padding: "10px",
  borderRadius: "4px",
  color: "#1a2332",
  fontSize: "14px",
  fontWeight: "bold",
  textAlign: "center", // Centers text within the item
  minHeight: "50px", // Ensures items have a visible height
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const justifyItemsTemplate: PropertyTemplate = {
  name: "Justify Items",
  controls: [],
  values: ["start", "end", "center", "stretch"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      {/* demo content that clearly illustrates the property */}
      <div style={{ ...demoItemStyles, width: "70%" }}>Item 1</div>
      <div style={{ ...demoItemStyles, width: "50%" }}>Item 2</div>
      <div style={{ ...demoItemStyles, width: "90%" }}>Item 3</div>
      <div style={{ ...demoItemStyles, width: "60%" }}>Item 4</div>
      <div style={{ ...demoItemStyles, width: "80%" }}>Item 5</div>
      <div style={{ ...demoItemStyles, width: "40%" }}>Item 6</div>
    </div>
  ),
  generate: (v) => ({ justifyItems: v as any }),
  prefix: "justify-items: ",
  parentClass: "container",
};
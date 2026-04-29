import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "280px", // Increased height to better demonstrate column flow
  color: "#f8fafc",
};

export const columnSpanTemplate: PropertyTemplate = {
  name: "Column Span",
  controls: [],
  values: ["none", "all"],
  preview: (style) => (
    <div
      style={{
        ...demoContainerStyles,
        columnCount: 3, // Defines a three-column layout for the content
        columnGap: "25px", // Space between columns
        lineHeight: "1.7",
        fontSize: "0.95em",
        color: "#cbd5e1",
      }}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h3
        style={{
          ...style, // The columnSpan property will be applied here
          margin: "20px 0",
          padding: "12px 15px",
          background: "#38bdf8",
          color: "#1a2332",
          borderRadius: "4px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.2em",
          // Ensuring the element is a block for column-span to apply
          display: "block",
        }}
      >
        This Heading Spans All Columns!
      </h3>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
        sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </p>
    </div>
  ),
  generate: (v) => ({ columnSpan: v as "none" | "all" }),
  prefix: "column-span: ",
  parentClass: "block",
};
import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const columnWidthTemplate: PropertyTemplate = {
  name: "Column Width",
  controls: [
    {
      key: "columnWidth",
      label: "Width",
      min: 50,
      max: 300,
      unit: "px",
      default: 150,
    },
  ],
  values: ["auto", "100px", "150px", "200px", "250px"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div
         style={{
           padding: '20px',
           border: '2px solid #38bdf8',
           borderRadius: '4px',
           maxWidth: '600px', // Limiting width to better observe column creation
           minWidth: '300px', // Minimum width for the multi-column container
           height: '180px', // Fixed height to demonstrate text flow into columns
           backgroundColor: '#2d3748',
           overflow: 'hidden', // Ensures text wraps within the specified height
           columnGap: '20px', // Adds a gap between columns for readability
           ...style, // Applies the columnWidth property here
         }}
       >
          <p style={{ margin: 0, fontSize: '0.9em', lineHeight: '1.6' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p style={{ marginTop: '10px', fontSize: '0.9em', lineHeight: '1.6' }}>
            Curabitur pretium tincidunt lacus. Nulla facilisi. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Maecenas convallis arcu et dolor.
          </p>
       </div>
    </div>
  ),
  generate: (v) => ({ columnWidth: v as any }),
  prefix: "column-width: ",
  parentClass: "block",
};
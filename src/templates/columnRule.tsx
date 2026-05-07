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
  boxSizing: "border-box",
};

export const columnRuleTemplate: PropertyTemplate = {
  name: "Column Rule",
  controls: [],
  values: [
    "none",
    "1px solid #94a3b8",
    "3px dotted #38bdf8",
    "5px double #f472b6",
    "2px ridge #facc15",
    "4px dashed #ef4444",
    "6px groove #10b981",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={{
           ...style, // columnRule will be applied here
           columnCount: 3,
           columnGap: '30px',
           width: '100%',
           maxWidth: '650px',
           padding: '25px',
           backgroundColor: '#2d3748',
           borderRadius: '6px',
           boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
           fontSize: '14px',
           lineHeight: '1.7',
           textAlign: 'justify',
           overflow: 'hidden', // Ensures content stays within bounds
       }}>
          <p style={{ margin: '0 0 15px 0' }}>
            This text is meticulously arranged into multiple columns, providing a clear demonstration of the `column-rule` CSS property. This property defines the style, width, and color of the line drawn between columns in a multi-column layout. It's a powerful shorthand for `column-rule-width`, `column-rule-style`, and `column-rule-color`.
          </p>
          <p style={{ margin: '0' }}>
            By selecting different values, you can instantly observe how the visual separator between these text blocks transforms. Experiment with various styles like `solid`, `dotted`, `dashed`, `double`, `groove`, `ridge`, `inset`, and `outset` to truly grasp the flexibility and impact of `column-rule` on content presentation. This interactive preview allows for immediate visual feedback, enhancing your understanding of multi-column layouts.
          </p>
       </div>
    </div>
  ),
  generate: (v) => ({ columnRule: v as any }),
  prefix: "column-rule: ",
  parentClass: "block",
};
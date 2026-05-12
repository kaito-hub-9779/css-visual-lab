import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
};

const columnContentStyles: React.CSSProperties = {
  columnCount: 3, // This is crucial for column-rule to have an effect
  columnGap: "30px", // A bit more gap to clearly see the rule
  padding: "20px",
  backgroundColor: "#0f172a",
  borderRadius: "6px",
  minHeight: "180px", // Ensure a minimum height for the demo
  width: "100%",
  maxWidth: "700px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  lineHeight: "1.6",
  textAlign: "justify",
  fontSize: "15px",
};

export const columnRuleTemplate: PropertyTemplate = {
  name: "Column Rule",
  controls: [],
  values: [
    "none",
    "1px solid #38bdf8",
    "3px dashed #facc15",
    "5px double #ef4444",
    "8px ridge #a78bfa",
    "2px outset #2dd4bf",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={{ ...columnContentStyles, ...style }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            <br/><br/>
            Curabitur pretium tincidunt lacus. Nulla facilisi. Proin volutpat mollis arcu. Sed vitae nisi. Nulla tristique commodo turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus metus vitae pharetra auctor.
          </p>
       </div>
    </div>
  ),
  generate: (v) => ({ columnRule: v as any }),
  prefix: "column-rule: ",
  parentClass: "block",
};
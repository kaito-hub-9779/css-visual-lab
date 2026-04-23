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
};

export const whiteSpaceTemplate: PropertyTemplate = {
  name: "White Space",
  controls: [],
  values: ["normal", "nowrap", "pre", "pre-wrap", "pre-line", "break-spaces"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={{
           padding: '20px',
           border: '2px solid #38bdf8',
           borderRadius: '4px',
           width: '280px', // Constrain width to clearly show wrapping and overflow
           background: '#0d141e',
           fontSize: '14px',
           lineHeight: '1.4',
           overflow: 'auto', // Allow scrolling for nowrap/pre cases
           ...style // The whiteSpace property will be applied here
         }}>
          This text demonstrates     how white space and line breaks are handled.
          It contains           multiple spaces and a
          manual line break. Also, a very_long_unbreakable_word_to_test_wrapping_and_overflow_behaviors_with_different_settings.
       </div>
    </div>
  ),
  generate: (v) => ({ whiteSpace: v as any }),
  prefix: "white-space: ",
  parentClass: "block",
};
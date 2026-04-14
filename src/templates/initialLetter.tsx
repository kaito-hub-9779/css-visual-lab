import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px',
  lineHeight: '1.6',
  fontFamily: 'Arial, sans-serif',
};

const textBlockStyles: React.CSSProperties = {
  maxWidth: '400px',
  background: '#2c3e50',
  padding: '25px 30px',
  borderRadius: '8px',
  boxShadow: '0 6px 15px rgba(0,0,0,0.4)',
  color: '#e0e7ff',
};

const firstLetterStyle: React.CSSProperties = {
  fontFamily: 'Georgia, serif',
  fontWeight: 'bold',
  color: '#8b5cf6', // A vibrant color for the initial letter
  fontSize: 'inherit', // Ensure it scales correctly with initial-letter
  lineHeight: '1',
  marginRight: '0.1em', // Small margin for visual separation
};

export const initialLetterTemplate: PropertyTemplate = {
  name: "Initial Letter",
  controls: [],
  values: ["normal", "2", "3", "3 2", "4", "4 2", "5", "5 3", "drop", "sink"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={textBlockStyles}>
          <p style={{ margin: 0, padding: 0 }}>
            <span style={{ ...firstLetterStyle, ...style }}>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
       </div>
    </div>
  ),
  generate: (v) => ({ initialLetter: v as any }),
  prefix: "initial-letter: ",
  parentClass: "block",
};
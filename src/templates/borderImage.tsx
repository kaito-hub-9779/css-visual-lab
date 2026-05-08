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

export const borderImageTemplate: PropertyTemplate = {
  name: "Border Image",
  controls: [],
  values: [
    "linear-gradient(to right, #ff00cc, #3333ff) 30 round",
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Crect x='0' y='0' width='16' height='16' fill='none' stroke='%23f44336' stroke-width='2'/%3E%3Crect x='4' y='4' width='8' height='8' fill='%23f44336'/%3E%3C/svg%3E\") 8 round",
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Crect x='0' y='0' width='10' height='10' fill='%23673ab7'/%3E%3Crect x='2' y='2' width='6' height='6' fill='none' stroke='%23ede7f6' stroke-width='1'/%3E%3C/svg%3E\") 5 repeat",
    "linear-gradient(45deg, #ff9933, #66b3ff, #ff9933) 25 stretch",
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Cpolygon points='0,0 10,0 5,10' fill='%2300b894'/%3E%3C/svg%3E\") 5 stretch",
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M0 0h20v20H0z' fill='%23007bff'/%3E%3Cpath d='M2 2h16v16H2z' fill='none' stroke='%23f8f9fa' stroke-width='2'/%3E%3C/svg%3E\") 10",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={{
           ...style, // This will apply borderImage from the selected value
           width: '240px',
           height: '140px',
           borderWidth: '20px', // Crucial: border-width must be set for border-image to appear
           borderStyle: 'solid', // Crucial: border-style must be set
           borderColor: 'transparent', // Make the original border transparent so border-image is visible
           padding: '20px',
           backgroundColor: '#2d3748',
           borderRadius: '8px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           fontSize: '1.2em',
           fontWeight: 'bold',
           textAlign: 'center',
           color: '#f8fafc',
       }}>
          <p>Border Image Demo</p>
       </div>
    </div>
  ),
  generate: (v) => ({ borderImage: v as any }),
  prefix: "border-image: ",
  parentClass: "block",
};
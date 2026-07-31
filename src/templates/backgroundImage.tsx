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
};

export const backgroundImageTemplate: PropertyTemplate = {
  name: "Background Image",
  controls: [],
  values: [
    "url('https://picsum.photos/id/1018/400/200')",
    "url('https://picsum.photos/id/1043/400/200')",
    "linear-gradient(to right, #6EE7B7, #3B82F6)",
    "radial-gradient(circle, #FCD34D, #EF4444)",
    "url('https://picsum.photos/id/237/800/600'), linear-gradient(to bottom right, #EC4899, #8B5CF6)", // Multiple backgrounds
    "none",
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div 
         style={{ 
           ...style, // The backgroundImage style will be applied here
           padding: '30px', 
           border: '2px dashed #38bdf8', 
           borderRadius: '8px', 
           width: '100%', 
           maxWidth: '400px',
           minHeight: '150px', 
           display: 'flex', 
           alignItems: 'center', 
           justifyContent: 'center',
           color: (style.backgroundImage as string)?.includes('gradient') ? '#1a2332' : '#f8fafc', // Adjust text color for better contrast on gradients
           fontSize: '1.2em',
           textAlign: 'center',
           backgroundSize: 'cover', // Ensures image covers the area
           backgroundPosition: 'center', // Centers the image
           backgroundRepeat: 'no-repeat', // Prevents image repetition
           overflow: 'hidden', // Hide overflow from backgrounds
           boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
         }}
       >
          <span style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)', backgroundColor: 'rgba(0,0,0,0.3)', padding: '5px 10px', borderRadius: '4px' }}>
            Background Image Demo
          </span>
       </div>
    </div>
  ),
  generate: (v) => ({ backgroundImage: v as any }),
  prefix: "background-image: ",
  parentClass: "block",
};
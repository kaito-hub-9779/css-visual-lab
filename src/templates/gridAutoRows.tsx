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

export const gridAutoRowsTemplate: PropertyTemplate = {
  name: "Grid Auto Rows",
  controls: [],
  values: ["min-content", "max-content", "100px", "minmax(50px, 150px)", "fit-content(120px)"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={{
           display: 'grid',
           gridTemplateColumns: 'repeat(3, minmax(80px, 1fr))', // Explicit columns, all rows are implicit
           gap: '10px',
           width: '100%',
           maxWidth: '500px', // Constrain width for a better visual
           ...style, // gridAutoRows will be applied here
       }}>
          <div style={{ background: '#4a5568', padding: '15px', borderRadius: '4px', textAlign: 'center' }}>
            <p>Item 1</p>
            <p style={{fontSize: '0.8em'}}>Short content</p>
          </div>
          <div style={{ background: '#4a5568', padding: '15px', borderRadius: '4px', textAlign: 'center' }}>
            <p>Item 2</p>
            <p style={{fontSize: '0.8em'}}>This item has a bit more text to demonstrate content-based sizing effects more clearly for 'min-content' or 'max-content' values.</p>
          </div>
          <div style={{ background: '#4a5568', padding: '15px', borderRadius: '4px', textAlign: 'center' }}>
            <p>Item 3</p>
            <p style={{fontSize: '0.8em'}}>More text here.</p>
          </div>
          <div style={{ background: '#38bdf8', padding: '15px', borderRadius: '4px', textAlign: 'center' }}>
            <p>Item 4</p>
            <p style={{fontSize: '0.8em'}}>Another piece of content.</p>
          </div>
          <div style={{ background: '#38bdf8', padding: '15px', borderRadius: '4px', textAlign: 'center' }}>
            <p>Item 5</p>
            <p style={{fontSize: '0.8em'}}>Just a short one.</p>
          </div>
          <div style={{ background: '#38bdf8', padding: '15px', borderRadius: '4px', textAlign: 'center' }}>
            <p>Item 6</p>
            <p style={{fontSize: '0.8em'}}>Longer content here to ensure the row height adapts.</p>
          </div>
          <div style={{ background: '#94a3b8', padding: '15px', borderRadius: '4px', textAlign: 'center' }}>
            <p>Item 7</p>
            <p style={{fontSize: '0.8em'}}>Last item.</p>
          </div>
       </div>
    </div>
  ),
  generate: (v) => ({ gridAutoRows: v as any }),
  prefix: "grid-auto-rows: ",
  parentClass: "container",
};
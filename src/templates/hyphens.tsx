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

export const hyphensTemplate: PropertyTemplate = {
  name: "Hyphens",
  controls: [],
  values: ["none", "auto"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <div style={{ padding: '20px', border: '2px solid #38bdf8', borderRadius: '4px', maxWidth: '250px', lineHeight: '1.5', ...style }}>
          <p lang="en" style={{ margin: 0, fontSize: '16px' }}>
            Demonstrating how <strong style={{color: '#fde047'}}>hyphens</strong> can break exceptionally long words across lines in a limited space, for example, "antidisestablishmentarianism" or "supercalifragilisticexpialidocious".
          </p>
       </div>
    </div>
  ),
  generate: (v) => ({ hyphens: v as any }),
  prefix: "hyphens: ",
  parentClass: "block",
};
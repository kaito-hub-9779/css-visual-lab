import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
};

export const gridTemplateAreasTemplate: PropertyTemplate = {
  name: "Grid Template Areas",
  controls: [],
  values: [
    '"header header header" "nav main sidebar" "footer footer footer"',
    '"nav main" "nav footer"',
    '"top top" "left right"',
    '"logo nav" "aside main"',
  ],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
      <div
        style={{
          display: "grid",
          gap: "10px",
          height: "200px",
          ...style, // gridTemplateAreas property will be applied here
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          padding: "10px",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            gridArea: "header",
            background: "#f97316",
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1a2332",
            minWidth: 0, // Ensure items shrink in small grids
            minHeight: 0,
          }}
        >
          Header
        </div>
        <div
          style={{
            gridArea: "nav",
            background: "#3b82f6",
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1a2332",
            minWidth: 0,
            minHeight: 0,
          }}
        >
          Nav
        </div>
        <div
          style={{
            gridArea: "main",
            background: "#22c55e",
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1a2332",
            minWidth: 0,
            minHeight: 0,
          }}
        >
          Main Content
        </div>
        <div
          style={{
            gridArea: "sidebar",
            background: "#a855f7",
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1a2332",
            minWidth: 0,
            minHeight: 0,
          }}
        >
          Sidebar
        </div>
        <div
          style={{
            gridArea: "footer",
            background: "#ec4899",
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1a2332",
            minWidth: 0,
            minHeight: 0,
          }}
        >
          Footer
        </div>
        <div
          style={{
            gridArea: "top",
            background: "#facc15",
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1a2332",
            minWidth: 0,
            minHeight: 0,
          }}
        >
          Top
        </div>
        <div
          style={{
            gridArea: "left",
            background: "#10b981",
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1a2332",
            minWidth: 0,
            minHeight: 0,
          }}
        >
          Left
        </div>
        <div
          style={{
            gridArea: "right",
            background: "#6366f1",
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1a2332",
            minWidth: 0,
            minHeight: 0,
          }}
        >
          Right
        </div>
        <div
          style={{
            gridArea: "logo",
            background: "#f43f5e",
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1a2332",
            minWidth: 0,
            minHeight: 0,
          }}
        >
          Logo
        </div>
        <div
          style={{
            gridArea: "aside",
            background: "#a3e635",
            padding: "10px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1a2332",
            minWidth: 0,
            minHeight: 0,
          }}
        >
          Aside
        </div>
      </div>
    </div>
  ),
  generate: (v) => ({ gridTemplateAreas: v as any }),
  prefix: "grid-template-areas: ",
  parentClass: "container",
};
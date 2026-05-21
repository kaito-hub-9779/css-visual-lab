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
  values: ["none", "manual", "auto"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <div
        style={{
          padding: "15px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          width: "280px", // Narrow width to encourage line breaks and hyphenation
          textAlign: "justify", // Crucial for seeing the effect on word spacing
          lineHeight: "1.5",
          fontSize: "15px",
          overflowWrap: "break-word", // Ensures long words will break even without hyphens
          wordBreak: "normal", // Reset to default for hyphens to take effect
        }}
        lang="en" // Specify language for browser's hyphenation dictionary
      >
        <p>
          Hyphenation is a useful feature in typography to improve the visual
          appearance of text blocks, especially when using justified alignment.
          It allows words to break across lines without creating large gaps
          between words, making the text more aesthetically pleasing and easier
          to read. Consider this very long and often difficult-to-hyphenate
          word: antidisestablishmentarianism.
        </p>
        <p style={{ marginTop: "10px" }}>
          This property helps manage how browsers break words at the end of a
          line, impacting readability and layout.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ hyphens: v as any }),
  prefix: "hyphens: ",
  parentClass: "block",
};
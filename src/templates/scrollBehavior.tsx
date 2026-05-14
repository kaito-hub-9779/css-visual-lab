import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
};

export const scrollBehaviorTemplate: PropertyTemplate = {
  name: "Scroll Behavior",
  controls: [],
  values: ["auto", "smooth"],
  preview: (style) => {
    const scrollableContainerRef = React.useRef<HTMLDivElement>(null);

    const scrollTo = (id: string) => {
      const element = scrollableContainerRef.current?.querySelector(`#${id}`);
      // Using scrollIntoView() without a 'behavior' option allows the CSS scroll-behavior property
      // on the parent container to dictate the scrolling animation.
      element?.scrollIntoView();
    };

    return (
      <div
        ref={scrollableContainerRef}
        style={{
          ...demoContainerStyles,
          ...style, // This will apply scrollBehavior: 'auto' or 'smooth'
          height: "200px",
          overflowY: "scroll",
          scrollbarWidth: "thin", // For a cleaner visual scrollbar
          scrollbarColor: "#38bdf8 #334155", // Custom scrollbar colors
        }}
      >
        <p style={{ margin: "0 0 100px 0", fontSize: "0.9em", opacity: 0.8 }}>
          Scroll down manually, or click buttons below to jump.
        </p>
        <p id="scroll-target-1" style={{ margin: "0 0 100px 0", padding: "10px", background: "#334155", borderRadius: "4px", borderLeft: "4px solid #38bdf8" }}>
          <span style={{ fontWeight: "bold", color: "#38bdf8" }}>Target 1:</span> Content you can scroll to.
        </p>
        <p style={{ margin: "0 0 100px 0", opacity: 0.9 }}>
          More content to create enough scrollable space.
        </p>
        <p id="scroll-target-2" style={{ margin: "0 0 100px 0", padding: "10px", background: "#334155", borderRadius: "4px", borderLeft: "4px solid #38bdf8" }}>
          <span style={{ fontWeight: "bold", color: "#38bdf8" }}>Target 2:</span> Another point of interest in the scroll area.
        </p>
        <p style={{ margin: "0 0 100px 0", opacity: 0.9 }}>
          Even more content to ensure scrolling is necessary.
        </p>
        <div style={{ padding: "20px", border: "2px solid #38bdf8", borderRadius: "4px" }}>
          Visual representation of `scrollBehavior`
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <button
              onClick={() => scrollTo("scroll-target-1")}
              style={{ background: "#38bdf8", color: "white", padding: "8px 12px", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              Scroll to Target 1
            </button>
            <button
              onClick={() => scrollTo("scroll-target-2")}
              style={{ background: "#38bdf8", color: "white", padding: "8px 12px", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              Scroll to Target 2
            </button>
          </div>
        </div>
        <p style={{ margin: "100px 0 0 0", fontSize: "0.9em", opacity: 0.8 }}>
          End of the scrollable content area.
        </p>
      </div>
    );
  },
  generate: (v) => ({ scrollBehavior: v as "auto" | "smooth" }),
  prefix: "scroll-behavior: ",
  parentClass: "block",
};
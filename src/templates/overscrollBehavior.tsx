import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  alignItems: "center",
  justifyContent: "center",
};

export const overscrollBehaviorTemplate: PropertyTemplate = {
  name: "Overscroll Behavior",
  controls: [],
  values: ["auto", "contain", "none"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles }}>
       <p style={{ margin: 0, fontSize: '0.9em', color: '#94a3b8', textAlign: 'center' }}>
         (Apply this property to the inner scrollable box below.
         In a browser, try scrolling the box to its limits to see the effect on the page scroll.)
       </p>
       <div 
         style={{ 
           ...style, // overscrollBehavior will be applied here
           width: "90%", 
           height: "150px", 
           overflow: "auto", 
           border: "2px solid #38bdf8", 
           borderRadius: "4px", 
           padding: "15px", 
           backgroundColor: "#0d1117",
           color: "#e2e8f0",
           lineHeight: "1.6",
           fontSize: "0.9em",
           boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
         }}
       >
          <p>
            The `overscroll-behavior` CSS property sets what a browser does when a user scrolls to the boundary of a scrolling area.
            It's a shorthand for `overscroll-behavior-x` and `overscroll-behavior-y`.
          </p>
          <p>
            When set to `auto` (the default), scrolling past the boundary of this element may cause the parent document to scroll (scroll chaining).
          </p>
          <p>
            When set to `contain`, scroll chaining is prevented for this element. The scroll bounce effect (if any) is shown, but no scrolling occurs on parent elements.
          </p>
          <p>
            When set to `none`, scroll chaining is prevented, and no scroll bounce effect is shown.
          </p>
          <p>
            This property is especially useful for modals, dialogs, or other layered components. It prevents the background content from scrolling when the user reaches the end of the modal's scrollable area, improving user experience.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Another paragraph to ensure scrollability. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
            The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
          </p>
       </div>
    </div>
  ),
  generate: (v) => ({ overscrollBehavior: v as any }),
  prefix: "overscroll-behavior: ",
  parentClass: "container",
};
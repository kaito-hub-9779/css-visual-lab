import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
};

export const breakBeforeTemplate: PropertyTemplate = {
  name: "Break Before",
  controls: [],
  values: ["auto", "avoid", "column", "always"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, display: 'flex', flexDirection: 'column' }}>
      <p style={{ marginBottom: '15px', fontSize: '14px', opacity: 0.8 }}>
        This property controls how a break (page, column, region) behaves immediately before a generated box.
        Observe how the "Special Section" element below moves relative to column breaks.
      </p>
      <div
        style={{
          columnCount: 2,
          columnGap: "30px",
          border: "2px solid #38bdf8",
          borderRadius: "4px",
          padding: "20px",
          background: "#2a374b",
          flexGrow: 1,
          lineHeight: '1.6',
          fontSize: '15px'
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p style={{ marginBottom: '20px' }}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna.
        </p>
        <div
          style={{
            ...style, // The breakBefore property is applied here
            background: "#4f46e5",
            padding: "15px",
            borderRadius: "6px",
            margin: "20px 0",
            fontWeight: "bold",
            color: "#e0e7ff",
            boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
            textAlign: 'center'
          }}
        >
          Visual representation of break-before: Special Section
          <p style={{ fontSize: '13px', fontWeight: 'normal', marginTop: '5px', opacity: 0.9 }}>
            This content's placement is affected by the `break-before` property.
          </p>
        </div>
        <p>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </p>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ breakBefore: v as any }),
  prefix: "break-before: ",
  parentClass: "block",
};
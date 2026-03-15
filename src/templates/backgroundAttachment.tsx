import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332 url('https://picsum.photos/800/600/?blur=2') no-repeat center center / cover",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "350px", // Fixed height to allow internal scrolling
  maxHeight: "350px",
  overflow: "auto", // Enable scrolling for 'local' and 'scroll' demonstration
  color: "#f8fafc",
  position: "relative", // Needed for fixed background to appear relative to viewport in some contexts, but generally applies to viewport.
  fontSize: "14px",
  lineHeight: "1.6",
  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
  border: "2px solid #38bdf8",
};

export const backgroundAttachmentTemplate: PropertyTemplate = {
  name: "Background Attachment",
  controls: [],
  values: ["scroll", "fixed", "local"],
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
      <div style={{ padding: '15px', background: 'rgba(0,0,0,0.6)', borderRadius: '4px', marginBottom: '20px' }}>
        <p>This box demonstrates the `background-attachment` property.</p>
        <p>When you change the value, observe how the background image behaves when the content scrolls within this container.</p>
        <ul>
            <li><strong>scroll (default):</strong> The background scrolls with the content of the element.</li>
            <li><strong>fixed:</strong> The background is fixed relative to the viewport, even if the element itself scrolls.</li>
            <li><strong>local:</strong> The background scrolls with the element's contents, meaning if the element has a scroll mechanism, the background also scrolls with its content.</li>
        </ul>
      </div>
      <div style={{ padding: '15px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </p>
        <p>
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
      </div>
    </div>
  ),
  generate: (v) => ({ backgroundAttachment: v as any }),
  prefix: "background-attachment: ",
  parentClass: "block",
};
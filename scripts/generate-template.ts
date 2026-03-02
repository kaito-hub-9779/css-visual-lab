import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Error: GEMINI_API_KEY is not set in .env file.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

async function generateTemplate() {
  // Get currently implemented templates to avoid duplicates
  const templatesDir = path.join(process.cwd(), "src/templates");
  const files = fs.readdirSync(templatesDir).filter(f => f.endsWith(".tsx"));
  const implementedProperties = files.map(f => f.replace(".tsx", ""));

  const prompt = `You are an expert web developer. Create a new CSS property demo template for a React application.
The project currently has these properties implemented: ${implementedProperties.join(", ")}.

Select ONE interesting CSS property that is NOT in the list above (e.g., something from CSS Grid, Flexbox, Shapes, Masks, etc.).

Output ONLY the TypeScript React code for the template. 
The code must follow this exact structure:

import type { PropertyTemplate } from "../types";
import React from "react";

const demoContainerStyles: React.CSSProperties = {
  background: "#1a2332",
  padding: "20px",
  borderRadius: "8px",
  minHeight: "250px",
  color: "#f8fafc",
};

export const [propertyName]Template: PropertyTemplate = {
  name: "[Human Readable Name]",
  controls: [], // Use this to add slider controls if needed, e.g. { key: 'val', label: 'Val', min: 0, max: 100, unit: 'px', default: 50 }
  values: ["[val1]", "[val2]", ...], // Predefined values for the user to click
  preview: (style) => (
    <div style={{ ...demoContainerStyles, ...style }}>
       {/* demo content that clearly illustrates the property */}
       <div style={{ padding: '20px', border: '2px solid #38bdf8', borderRadius: '4px' }}>
          Visual representation of [propertyName]
       </div>
    </div>
  ),
  generate: (v) => ({ [cssProperty]: v as any }),
  prefix: "[css-property]: ",
  parentClass: "[selector type, usually 'block' or 'container']",
};

Requirements:
1. Use inline styles for the demo.
2. The demo should look visually appealing and highlight what the property does.
3. Import React to use React.CSSProperties and JSX.
4. Export the template constant with a name ending in "Template".
5. Target property should be a valid CSS property name in camelCase for the object key but kebab-case for the prefix.

Response should be ONLY the code, no markdown blocks.`;

  console.log("Generating new template via Gemini...");
  const result = await model.generateContent(prompt);
  const response = await result.response;
  let code = response.text().trim();

  // Clean up markdown markers if any
  code = code.replace(/^```tsx\n/, "").replace(/^```typescript\n/, "").replace(/^```javascript\n/, "").replace(/^```\n/, "").replace(/\n```$/, "");

  // Extract property name to create file
  const match = code.match(/export const (\w+Template)/);
  if (!match) {
    console.error("Failed to parse generated code. Could not find 'export const ...Template'.");
    process.exit(1);
  }

  const templateVarName = match[1];
  const fileName = templateVarName.replace("Template", "");
  const filePath = path.join(templatesDir, `${fileName}.tsx`);

  fs.writeFileSync(filePath, code);
  console.log(`Created new template: ${filePath}`);

  // Register in index.ts
  updateIndex(fileName, templateVarName);
}

function updateIndex(fileName: string, varName: string) {
  const indexPath = path.join(process.cwd(), "src/templates/index.ts");
  let content = fs.readFileSync(indexPath, "utf8");

  // Avoid duplicate imports
  const importStatement = `import { ${varName} } from "./${fileName}";`;
  if (content.includes(importStatement)) {
    console.log(`Import for ${varName} already exists in index.ts`);
  } else {
    // Add import at the top (after existing imports or at the very top)
    content = `${importStatement}\n${content}`;
  }

  // Avoid duplicate array entries
  if (content.includes(`  ${varName},`)) {
    console.log(`Entry for ${varName} already exists in templates array`);
  } else {
    // Add to array
    content = content.replace(/export const templates: PropertyTemplate\[\] = \[/, `export const templates: PropertyTemplate[] = [\n  ${varName},`);
  }

  fs.writeFileSync(indexPath, content);
  console.log(`Updated src/templates/index.ts with ${varName}`);
}

generateTemplate().catch(console.error);

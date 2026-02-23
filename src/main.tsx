import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemplateList from "./components/TemplateList";
import TemplatePage from "./components/TemplatePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TemplateList />} />
        <Route path="/template/:id" element={<TemplatePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

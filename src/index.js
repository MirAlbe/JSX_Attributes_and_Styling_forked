import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <h1 className="heading1" contentEditable="true" spellCheck="true">
    My Favoriate food is <span>BEEF</span>
  </h1>
);

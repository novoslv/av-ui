import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "../../dist/fonts.css";
import "../../dist/tokens.css";
import "../../src/index.css";

// Every file in tests/cases/ default-exports { "<state name>": <element> }.
const modules = import.meta.glob<{ default: Record<string, ReactNode> }>(
  "../cases/*.tsx",
  { eager: true },
);

const cases: Record<string, ReactNode> = {};
for (const [path, mod] of Object.entries(modules)) {
  const group = path.replace(/^.*\/(.+)\.tsx$/, "$1");
  for (const [name, node] of Object.entries(mod.default)) {
    cases[`${group}/${name}`] = node;
  }
}

const params = new URLSearchParams(location.search);
const id = params.get("case");
const root = document.getElementById("root");
if (!root) throw new Error("Missing #root");

if (!id) {
  // Case list for the test runner.
  root.dataset.cases = JSON.stringify(Object.keys(cases));
} else {
  const node = cases[id];
  document.body.style.margin = "0";
  document.body.style.background = "var(--colour-bg)";
  createRoot(root).render(
    <div id="case" style={{ display: "inline-block", padding: 16 }}>
      {node}
    </div>,
  );
}

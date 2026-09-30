"use client";

import { useState } from "react";
import { projects } from "@/content/site";
import ProjectCard from "./ProjectCard";

const FILTERS = [
  { k: "all", label: "All" },
  { k: "solo", label: "Individual projects" },
  { k: "team", label: "Team" },
] as const;

export default function WorkGrid() {
  const [f, setF] = useState<(typeof FILTERS)[number]["k"]>("all");
  const list = projects.filter((p) => f === "all" || p.kind === f);
  return (
    <>
      <div className="chips" role="group" aria-label="Filter projects">
        {FILTERS.map((x) => (
          <button key={x.k} className="chip-btn" aria-pressed={f === x.k} onClick={() => setF(x.k)}>{x.label}</button>
        ))}
      </div>
      <div className="bento">
        {list.map((p) => <ProjectCard key={p.slug} p={p} size="c-lg" />)}
      </div>
    </>
  );
}

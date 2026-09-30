import type { Metadata } from "next";
import { teamStudies } from "@/content/site";
import WorkGrid from "@/components/WorkGrid";

export const metadata: Metadata = { title: "Work" };

export default function Work() {
  return (
    <>
      <div className="eyebrow">Work</div>
      <h1 className="h-page">Projects, my role in each, <em>and the key decisions.</em></h1>
      <WorkGrid />
      <section className="sec">
        <div className="sec-head"><div><div className="eyebrow">Rethink AI-PM · Cohort 8</div><h2 className="h-sec">Team case studies</h2></div></div>
        <div className="rows">
          {teamStudies.map((t) => (
            <div className="row" key={t.name}>
              <h4>{t.name}</h4>
              <p>{t.line}</p>
              <a href={t.url} target="_blank" rel="noopener">View ↗</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

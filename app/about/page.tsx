import type { Metadata } from "next";
import { about, experience } from "@/content/site";

export const metadata: Metadata = { title: "About" };

const RETURN = [
  { when: "2010 – 2013", t: "Engineer, then QA lead at Cognizant", d: "Built a strong eye for edge cases, and led a QA team." },
  { when: "2013 – 2024", t: "Ten years of caregiving, and growth", d: "An MBA, a PG Diploma in Counselling and an MSc in Yoga, with part-time work throughout." },
  { when: "2024 – now", t: "Return to work", d: "Joined OneHermes as QA and grew into Scrum Master, QA Lead and then Product Owner." },
  { when: "2026", t: "Building with AI", d: "Rethink AI-PM Cohort 8. Built Catalyst and Ungal Kural as individual projects, and KidQ with a team." },
];

export default function About() {
  return (
    <>
      <div className="eyebrow">About</div>
      <h1 className="h-page">{about.intro.split("grew")[0]}<em>grew{about.intro.split("grew")[1]}</em></h1>

      <div className="prose">{about.paras.map((p) => <p key={p}>{p}</p>)}</div>

      <section className="sec">
        <div className="sec-head"><div><div className="eyebrow">The return</div><h2 className="h-sec">Career path</h2></div></div>
        <div className="timeline">
          {RETURN.map((r, i) => (
            <div className={`t-item${i === RETURN.length - 1 ? " lit" : ""}`} key={r.t}>
              <div className="when">{r.when}</div>
              <h4>{r.t}</h4>
              <p>{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="sec-head"><div><div className="eyebrow">What I carry</div><h2 className="h-sec">Values</h2></div></div>
        <div className="values">
          {about.values.map((v) => (
            <div className="value" key={v.t}><h4>{v.t}</h4><p>{v.d}</p></div>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="quote">
          <p>“{about.anchor.quote}”</p>
          <small>{about.anchor.note}</small>
        </div>
      </section>

      <section className="sec">
        <div className="eyebrow">Outside work</div>
        <div className="pill-list" style={{ marginTop: 14 }}>{about.outside.map((o) => <span key={o}>{o}</span>)}</div>
        <p className="muted" style={{ fontSize: 14.5, marginTop: 16 }}>Education: {experience.education.slice(0, 4).join(" · ")}</p>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { experience } from "@/content/site";

export const metadata: Metadata = { title: "Experience" };

export default function Experience() {
  return (
    <>
      <div className="eyebrow">Experience · {experience.company}</div>
      <h1 className="h-page">{experience.intro.split(":")[0]}: <em>{experience.intro.split(":")[1]}</em></h1>
      <p className="lead scope">{experience.scope}</p>

      <div className="stories">
        {experience.stories.map((s) => (
          <article className="card" key={s.title}>
            <div className="eyebrow">{s.when}</div>
            <h3 style={{ marginTop: 6 }}>{s.title}</h3>
            <p style={{ maxWidth: "44em" }}>{s.body}</p>
          </article>
        ))}
      </div>

      <section className="sec">
        <div className="sec-head"><div><div className="eyebrow">Decisions from client work</div><h2 className="h-sec">Product or client: who adapts?</h2></div></div>
        <div className="decisions">
          {experience.decisions.map((d) => (
            <div className="decision" key={d.chose}>
              <div><span className="eyebrow">Chose</span><p>{d.chose}</p></div>
              <div className="rej"><span className="eyebrow">Rejected</span><p>{d.rejected}</p></div>
              <div className="why"><span className="eyebrow">Why</span><p>{d.why}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="eyebrow">Impact</div>
        <div className="impact" style={{ marginTop: 14 }}>{experience.impact.map((i) => <span key={i}>{i}</span>)}</div>
      </section>

      <section className="sec">
        <div className="eyebrow">Also at OneHermes</div>
        <ul className="bullets">{experience.more.map((m) => <li key={m}>{m}</li>)}</ul>
      </section>

      <section className="sec">
        <div className="sec-head"><div><div className="eyebrow">Timeline</div><h2 className="h-sec">The path so far</h2></div></div>
        <div className="timeline">
          {experience.timeline.map((t, i) => (
            <div className={`t-item${i === 0 ? " lit" : ""}`} key={t.title}>
              <div className="when">{t.when}</div>
              <h4>{t.title}</h4>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="eyebrow">Education & certifications</div>
        <div className="pill-list" style={{ marginTop: 14 }}>{experience.education.map((e) => <span key={e}>{e}</span>)}</div>
      </section>
    </>
  );
}

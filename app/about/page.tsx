import type { Metadata } from "next";
import { about, experience } from "@/content/site";

export const metadata: Metadata = { title: "About" };


export default function About() {
  return (
    <>
      <div className="eyebrow">About</div>
      <h1 className="h-page">{about.intro.split("grew")[0]}<em>grew{about.intro.split("grew")[1]}</em></h1>

      <div className="prose">{about.paras.map((p) => <p key={p}>{p}</p>)}</div>

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
        <div className="eyebrow">Curious about</div>
        <ul className="bullets" style={{ marginTop: 14 }}>{about.curious.map((c) => <li key={c}>{c}</li>)}</ul>
      </section>

      <section className="sec">
        <div className="eyebrow">Outside work</div>
        <div className="pill-list" style={{ marginTop: 14 }}>{about.outside.map((o) => <span key={o}>{o}</span>)}</div>
        <p className="muted" style={{ fontSize: 14.5, marginTop: 16 }}>Education: {experience.education.slice(0, 4).join(" · ")}</p>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { projects } from "@/content/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.name, description: `${p.name}: ${p.tagline}. ${p.problem}` } : {};
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <article>
      <Link href="/work/" className="back"><ArrowLeft size={15} aria-hidden="true" /> All work</Link>

      <header style={{ marginTop: 22 }}>
        <div className="tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
        <h1 className="h-display" style={{ fontSize: "clamp(38px,5vw,60px)", margin: "8px 0 10px" }}>
          {p.name}{p.tamil && <span className="ta" lang="ta" style={{ fontSize: 22 }}>{p.tamil}</span>}
        </h1>
        <p className="lead">{p.tagline}</p>
        <div className="ctas" style={{ marginTop: 22 }}>
          {p.live.map((l, k) => (
            <a key={l.url} className={`btn ${k === 0 ? "btn-primary" : "btn-ghost"}`} href={l.url} target="_blank" rel="noopener">{l.label} ↗</a>
          ))}
          {p.prd && <a className="btn btn-ghost" href={p.prd} target="_blank" rel="noopener">Read the PRD ↗</a>}
        </div>
      </header>

      <div className="tldr">
        <div className="eyebrow" style={{ color: "var(--diya)" }}>TL;DR</div>
        <ul>{p.tldr.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>

      <div className={`gallery g-${p.slug}`}>
        {p.gallery.map((g) => (
          <figure key={g.src}>
            <div className="shot"><img src={g.src} alt={g.caption} loading="lazy" /></div>
            <figcaption>{g.caption}</figcaption>
          </figure>
        ))}
      </div>

      <section className="sec">
        <div className="eyebrow">01 · Context & my role</div>
        <p className="lead" style={{ marginTop: 10 }}>{p.role}</p>
      </section>

      <section className="sec">
        <div className="eyebrow">02 · Problem discovery</div>
        <ul className="bullets">{p.discovery.map((d) => <li key={d}>{d}</li>)}</ul>
        <p className="pull">{p.reframe}</p>
      </section>

      <section className="sec">
        <div className="eyebrow">03 · Key decisions</div>
        <div className="decisions">
          {p.decisions.map((d) => (
            <div className="decision" key={d.chose}>
              <div><span className="eyebrow">Chose</span><p>{d.chose}</p></div>
              <div className="rej"><span className="eyebrow">Rejected</span><p>{d.rejected}</p></div>
              <div className="why"><span className="eyebrow">Why</span><p>{d.why}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="eyebrow">04 · What was built</div>
        <ul className="bullets">{p.built.map((b) => <li key={b}>{b}</li>)}</ul>
        <p className="muted" style={{ fontSize: 14.5, marginTop: 14 }}><span className="eyebrow" style={{ marginRight: 8 }}>Stack</span>{p.stack}</p>
      </section>

      <section className="sec">
        <div className="eyebrow" style={{ color: "var(--diya)" }}>05 · Guardrails</div>
        <div className="guard">
          {p.guardrails.map((g) => <div key={g}><ShieldCheck size={17} aria-hidden="true" /><span>{g}</span></div>)}
        </div>
      </section>

      {p.metrics.length > 0 && (
        <section className="sec">
          <div className="eyebrow">06 · Metrics</div>
          <ul className="bullets">{p.metrics.map((m) => <li key={m}>{m}</li>)}</ul>
        </section>
      )}

      <section className="sec">
        <div className="eyebrow">{p.metrics.length > 0 ? "07" : "06"} · What I learned</div>
        <ul className="bullets">{p.learned.map((l) => <li key={l}>{l}</li>)}</ul>
      </section>

      <Link href={`/work/${next.slug}/`} className="next-cs">
        <span><span className="eyebrow">Next case study</span><br /><strong>{next.name}</strong></span>
        <span aria-hidden="true" style={{ fontSize: 24, color: "var(--sand)" }}>→</span>
      </Link>
    </article>
  );
}

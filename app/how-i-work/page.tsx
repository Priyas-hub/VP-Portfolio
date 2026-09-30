import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { principles, focus } from "@/content/site";

export const metadata: Metadata = { title: "How I work" };

export default function HowIWork() {
  return (
    <>
      <div className="eyebrow">How I work</div>
      <h1 className="h-page">Five principles <em>from my work.</em></h1>
      <div className="principles">
        {principles.map((p, i) => (
          <article className="principle" key={p.t}>
            <div className="num">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
              <Link href={p.link}>Seen in the work →</Link>
            </div>
          </article>
        ))}
      </div>

      <section className="sec focus" id="guardrails">
        <div className="eyebrow" style={{ color: "var(--diya)" }}>Where I&apos;m heading</div>
        <h2 className="h-sec">{focus.title}</h2>
        <p className="lead" style={{ marginTop: 12 }}>{focus.lead}</p>
        <div className="focus-grid">
          {focus.evidence.map((e) => (
            <Link key={e.project} href={e.link}><strong>{e.project}</strong><span>{e.text}</span></Link>
          ))}
        </div>
        <p className="learning"><ShieldCheck size={18} color="var(--diya)" aria-hidden="true" />{focus.learning}</p>
      </section>
    </>
  );
}

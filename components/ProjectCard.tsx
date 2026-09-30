import Link from "next/link";
import type { Project } from "@/content/site";

export default function ProjectCard({ p, size = "c-lg", showShot = true }: { p: Project; size?: string; showShot?: boolean }) {
  return (
    <article className={`card ${size}`}>
      {showShot && (
        <div className="shot">
          <div className="bar"><i /><i /><i /></div>
          <img src={p.image} alt={p.imageAlt} loading="lazy" />
        </div>
      )}
      <div className="tags">
        {p.tags.map((t, i) => (
          <span key={t} className={`tag${i === 1 && p.kind === "solo" ? " gold" : ""}`}>{t}</span>
        ))}
      </div>
      <h3>
        {p.name}
        {p.tamil && <span className="ta" lang="ta">{p.tamil}</span>}
      </h3>
      <p>{p.problem}</p>
      <div className="proof"><b>{p.proofLabel}</b>{p.proof}</div>
      <div className="links">
        {p.live.map((l) => (
          <a key={l.url} href={l.url} target="_blank" rel="noopener">{l.label} ↗</a>
        ))}
        <Link href={`/work/${p.slug}/`}>Case study →</Link>
      </div>
    </article>
  );
}

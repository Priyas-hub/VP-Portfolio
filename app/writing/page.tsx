import type { Metadata } from "next";
import { writing, profile } from "@/content/site";

export const metadata: Metadata = { title: "Writing" };

export default function Writing() {
  return (
    <>
      <div className="eyebrow">Writing</div>
      <h1 className="h-page">Notes from building <em>and learning in public.</em></h1>
      {writing.length === 0 ? (
        <div className="empty">
          <p style={{ margin: 0 }}>Posts will be added here soon. Until then, you can read them on LinkedIn.</p>
          <div className="ctas" style={{ justifyContent: "center", marginTop: 18 }}>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noopener">Read on LinkedIn ↗</a>
          </div>
        </div>
      ) : (
        <div className="bento">
          {writing.map((w) => (
            <a className="card c-lg" key={w.url} href={w.url} target="_blank" rel="noopener">
              <div className="eyebrow">{w.date}</div>
              <h3 style={{ marginTop: 8 }}>{w.title}</h3>
              <p>{w.excerpt}</p>
              <div className="links"><span style={{ color: "var(--sand)" }}>Read on LinkedIn ↗</span></div>
            </a>
          ))}
        </div>
      )}
    </>
  );
}

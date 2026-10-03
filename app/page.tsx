import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { hero, profile, projects, experience, buildIntro, learning } from "@/content/site";
import Diya from "@/components/Diya";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const [catalyst, ungal, kidq] = projects;
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">{hero.eyebrow}</div>
            <h1 className="h-display">{hero.line1.split(". ").map((x, i, arr) => (<span key={i}>{x}{i < arr.length - 1 ? "." : ""}<br /></span>))}<em>{hero.line2}</em></h1>
            <p className="lead">{hero.lead}</p>
            <div className="ctas">
              <Link className="btn btn-primary" href="/experience/">See my experience →</Link>
              <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noopener">Download resume</a>
            </div>
          </div>
          <Diya photo={profile.photo} nowText={profile.now[0]} />
        </div>
      </section>

      <section className="sec">
        <div className="sec-head">
          <div><div className="eyebrow">Experience · {experience.company}</div><h2 className="h-sec">Client work</h2></div>
          <Link href="/experience/">Full experience →</Link>
        </div>
        <p className="lead" style={{ marginTop: 0, maxWidth: "44em" }}>{experience.scope}</p>
        <p className="muted" style={{ maxWidth: "44em" }}>{experience.ownership}</p>
        <div className="home-exp">
          {experience.stories.map((s) => (
            <article className="card" key={s.title}>
              <div className="eyebrow">{s.when}</div>
              <h3 style={{ marginTop: 6 }}>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
          <article className="card">
            <div className="eyebrow">Product</div>
            <h3 style={{ marginTop: 6 }}>Payroll module</h3>
            <p>Owned from discovery to release, 0→1.</p>
          </article>
        </div>
      </section>

      <section className="sec">
        <div className="sec-head">
          <div><div className="eyebrow">Projects</div><h2 className="h-sec">{buildIntro.title}</h2></div>
          <Link href="/work/">All work →</Link>
        </div>
        <p className="muted" style={{ marginTop: 0, marginBottom: 18, maxWidth: "44em" }}>{buildIntro.line}</p>
        <div className="bento">
          <ProjectCard p={catalyst} size="c-md" />
          <ProjectCard p={ungal} size="c-md" />
          <ProjectCard p={kidq} size="c-md" />
        </div>
      </section>

      <p className="learning learning-line"><ShieldCheck size={18} color="var(--diya)" aria-hidden="true" /><span><strong>{learning.label}:</strong> {learning.text}</span></p>

      <div className="now">
        <span className="eyebrow">● Now</span>
        <p>
          {profile.now.map((n, i) => (
            <span key={n} style={{ margin: 0, color: "var(--text)" }}>
              {i > 0 && <span>·</span>}{n}
            </span>
          ))}
        </p>
      </div>
    </>
  );
}

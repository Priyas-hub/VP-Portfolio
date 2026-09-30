import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { hero, ieo, profile, projects, focus } from "@/content/site";
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
            <h1 className="h-display">{hero.line1}<br /><em>{hero.line2}</em></h1>
            <p className="lead">{hero.lead}</p>
            <div className="ctas">
              <Link className="btn btn-primary" href="/work/">See my work →</Link>
              <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noopener">Download resume</a>
            </div>
          </div>
          <Diya photo={profile.photo} nowText={profile.now[0]} />
        </div>
      </section>

      <div className="ieo">
        {ieo.map((x) => (
          <div key={x.k}>
            <span className="eyebrow">{x.k}</span>
            <h3>{x.t}</h3>
            <p>{x.d}</p>
          </div>
        ))}
      </div>

      <section className="sec">
        <div className="sec-head">
          <div><div className="eyebrow">Shipped</div><h2 className="h-sec">Things I&apos;ve built</h2></div>
          <Link href="/work/">All work →</Link>
        </div>
        <div className="bento">
          <ProjectCard p={catalyst} />
          <ProjectCard p={ungal} />
          <ProjectCard p={kidq} size="c-md" showShot={false} />
          <article className="card c-sm">
            <div className="eyebrow">At work</div>
            <div className="stat">Aug &apos;26</div>
            <p>Took a US client from requirements discovery to go-live. Now I own enhancements.</p>
            <div className="links"><Link href="/experience/">Experience →</Link></div>
          </article>
          <article className="card c-sm">
            <div className="eyebrow">How I work</div>
            <h3 style={{ marginTop: 10 }}>“AI must be honest.”</h3>
            <p>A confident wrong answer does more harm than “I don&apos;t know”.</p>
            <div className="links"><Link href="/how-i-work/">Principles →</Link></div>
          </article>
        </div>
      </section>

      <section className="sec focus">
        <div className="eyebrow" style={{ color: "var(--diya)" }}>Focus</div>
        <h2 className="h-sec">{focus.title}</h2>
        <p className="lead" style={{ marginTop: 12 }}>{focus.lead}</p>
        <div className="focus-grid">
          {focus.evidence.map((e) => (
            <Link key={e.project} href={e.link}><strong>{e.project}</strong><span>{e.text}</span></Link>
          ))}
        </div>
        <p className="learning"><ShieldCheck size={18} color="var(--diya)" aria-hidden="true" />{focus.learning}</p>
      </section>

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

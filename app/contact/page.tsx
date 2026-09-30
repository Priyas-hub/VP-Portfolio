import type { Metadata } from "next";
import { profile } from "@/content/site";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <div className="eyebrow">Contact</div>
      <h1 className="h-page">Get in <em>touch.</em></h1>
      <p className="lead" style={{ marginBottom: 32 }}>
        Open to remote Product Owner, Product Manager and AI-PM roles. Based in India, working on IST, with a 1-month notice period.
      </p>
      <div className="contact-grid">
        <a href={`mailto:${profile.email}`}><span className="eyebrow">Email</span><strong>Write to me</strong><span>{profile.email}</span></a>
        <a href={profile.linkedin} target="_blank" rel="noopener"><span className="eyebrow">LinkedIn</span><strong>Connect</strong><span>vishnupriya-saravanar</span></a>
        <a href={profile.resume} target="_blank" rel="noopener"><span className="eyebrow">Resume</span><strong>Download PDF</strong><span>Product Owner · AI builder</span></a>
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, LayoutGrid, Briefcase, User, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./BrandIcons";
import { profile } from "@/content/site";
import ThemeToggle from "./ThemeToggle";
import EmailButton from "./EmailButton";

const NAV = [
  { href: "/", label: "Home", Icon: House },
  { href: "/experience/", label: "Experience", Icon: Briefcase },
  { href: "/work/", label: "Work", Icon: LayoutGrid },
  { href: "/about/", label: "About", Icon: User },
  { href: "/contact/", label: "Contact", Icon: Mail },
];

export default function Sidebar() {
  const path = usePathname() || "/";
  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href.replace(/\/$/, "")));

  return (
    <aside className="sidebar">
      <div className="brand-top">
        <Link href="/" className="brand" aria-label="Home">
          <span className="avatar" aria-hidden="true">
            {profile.avatar ? <img src={profile.avatar} alt="" draggable={false} onContextMenu={(e) => e.preventDefault()} /> : "VS"}
          </span>
          <span>
            <p className="brand-name">{profile.name}</p>
            <p className="brand-role">{profile.role}</p>
          </span>
        </Link>
        <span className="mobile-only"><ThemeToggle /></span>
      </div>

      <nav className="nav" aria-label="Main">
        {NAV.map(({ href, label, Icon }) => (
          <Link key={href} href={href} className={isActive(href) ? "active" : ""} aria-current={isActive(href) ? "page" : undefined}>
            <Icon strokeWidth={1.7} aria-hidden="true" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="side-foot">
        <div className="status"><span className="dot" aria-hidden="true" />{profile.status}</div>
        <a className="resume-link" href={profile.resume} target="_blank" rel="noopener">Download resume ↓</a>
        <div className="icon-row">
          <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" data-tip="LinkedIn"><LinkedinIcon /></a>
          <a className="icon-btn" href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" data-tip="GitHub"><GithubIcon /></a>
          <EmailButton email={profile.email} />
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}

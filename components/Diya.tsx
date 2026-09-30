"use client";

import { useEffect, useRef, useState } from "react";

/** The diya: its flame leans gently toward the cursor. Press "P" for a little surprise. */
export default function Diya({ photo, nowText }: { photo?: string; nowText: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [lean, setLean] = useState(0);
  const [bright, setBright] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onMove = (e: PointerEvent) => {
      if (reduce || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      setLean(Math.max(-8, Math.min(8, dx / 60)));
    };
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t && /input|textarea/i.test(t.tagName)) return;
      if (e.key === "p" || e.key === "P") {
        setBright(true);
        window.setTimeout(() => setBright(false), 1800);
      }
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className={`diya-card${photo ? " has-photo" : ""}`} ref={ref}>
      {photo ? (
        <div
          className="photo protected"
          role="img"
          aria-label="Portrait of Vishnupriya Saravanar"
          style={{ backgroundImage: `url(${photo})` }}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
      ) : (
        <svg className={`diya-svg${bright ? " bright" : ""}`} viewBox="0 0 200 200" role="img" aria-label="A lit diya">
          <defs>
            <radialGradient id="flameG" cx="50%" cy="60%" r="50%">
              <stop offset="0" stopColor="#FFE3A3" /><stop offset=".45" stopColor="#F0A93F" /><stop offset="1" stopColor="#C9672A" />
            </radialGradient>
            <radialGradient id="haloG" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="rgba(240,169,63,.35)" /><stop offset="1" stopColor="rgba(240,169,63,0)" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="82" r={bright ? 88 : 70} fill="url(#haloG)" style={{ transition: "r .6s" }} />
          <g className="flame-wrap" style={{ transform: `rotate(${lean}deg)` }}>
            <path className="flame" d="M100 38 C 116 62 122 78 116 94 C 111 106 89 106 84 94 C 78 78 86 60 100 38 Z" fill="url(#flameG)" />
            <path className="flame" d="M100 70 C 106 80 107 88 104 94 C 102 99 98 99 96 94 C 93 88 95 80 100 70 Z" fill="#FFF3D6" opacity=".85" />
          </g>
          <path d="M44 118 C 60 150 140 150 156 118 Z" fill="#CDBE90" />
          <path d="M44 118 L 156 118" stroke="#E4D6AC" strokeWidth="3" strokeLinecap="round" />
          <path d="M150 120 C 168 116 176 108 178 100" stroke="#CDBE90" strokeWidth="6" fill="none" strokeLinecap="round" />
          <ellipse cx="100" cy="162" rx="44" ry="5" fill="rgba(0,0,0,.3)" />
        </svg>
      )}
      {!photo && <div className="chip-float"><span>NOW</span>{nowText}</div>}
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

// This page was retired. It stays only so old links don't break.
export const metadata: Metadata = { title: "Moved", robots: { index: false } };

export default function HowIWorkMoved() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/experience/" />
      <p className="lead">This page has moved. <Link href="/experience/">Go to Experience →</Link></p>
    </>
  );
}

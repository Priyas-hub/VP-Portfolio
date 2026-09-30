import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "60px 0" }}>
      <div className="eyebrow">404</div>
      <h1 className="h-page">This page <em>does not exist.</em></h1>
      <Link className="btn btn-primary" href="/">Go home →</Link>
    </div>
  );
}

"use client";

import { useState } from "react";
import { AtSign } from "lucide-react";

/** Copies the email address and shows a short note. Falls back to opening the mail app. */
export default function EmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <span className="email-wrap">
      <button className="icon-btn" onClick={onClick} aria-label={`Copy email address ${email}`} data-tip="Copy email">
        <AtSign />
      </button>
      {copied && <span className="toast" role="status">Email copied: {email}</span>}
    </span>
  );
}

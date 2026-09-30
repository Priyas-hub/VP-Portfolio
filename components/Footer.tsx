import { profile } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {profile.name}.</span>
    </footer>
  );
}

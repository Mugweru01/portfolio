
// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link href="/">Edwin Wachira</Link>
        </div>
        <div className="space-x-4">
          <Link href="/"><span className="navbar-link">Home</span></Link>
          <Link href="/about"><span className="navbar-link">About</span></Link>
          <Link href="/resume"><span className="navbar-link">Resume</span></Link>
          <Link href="/portfolio"><span className="navbar-link">Portfolio</span></Link>
          <Link href="/contact"><span className="navbar-link">Contact</span></Link>
        </div>
      </div>
    </nav>
  );
}
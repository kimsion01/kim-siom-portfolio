
import Link from 'next/link';

export function Header() {
  return (
    <header className="header">
      <Link className="logo" href="/">
        Kim Siom
        <span>Front-end Publisher · UI/UX · AI Creative</span>
      </Link>
      <nav className="nav">
        <Link href="/#projects">Projects</Link>
        <Link href="/#system">System</Link>
        <Link href="/#ai">AI</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}

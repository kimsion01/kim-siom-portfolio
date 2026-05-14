'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <Link className="logo" href="/" onClick={close}>
        Kim Siom
        <span>Front-end Publisher · UI/UX · AI Creative</span>
      </Link>

      <button
        className={`menuToggle ${open ? 'is-open' : ''}`}
        type="button"
        aria-label="메뉴 열기"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${open ? 'is-open' : ''}`}>
        <Link href="/#projects" onClick={close}>Projects</Link>
        <Link href="/#system" onClick={close}>System</Link>
        <Link href="/#ai" onClick={close}>AI</Link>
        <Link href="/#gallery" onClick={close}>Gallery</Link>
        <Link href="/#contact" onClick={close}>Contact</Link>
      </nav>
    </header>
  );
}

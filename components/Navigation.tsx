'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'Projects', href: '/projects' },
    { label: 'Resources', href: '/resources' },
    { label: 'Events', href: '/events' },
    { label: 'Contact us', href: '/contact' },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={navRef} className="nav-container">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className={`nav-toggle-btn ${isOpen ? 'active' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        type="button"
      >
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </button>

      {isOpen && (
        <div className="nav-menu" onClick={(e) => e.stopPropagation()}>
          <div className="nav-grid">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="nav-menu-btn"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

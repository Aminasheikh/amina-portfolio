import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on window resize
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '0.9rem max(1rem, 2vw)' : '1.4rem max(1rem, 2vw)',
        background: scrolled
          ? 'rgba(10,10,20,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.35s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}>

        {/* Logo */}
        <a href="#hero" style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '1.2rem',
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, var(--accent2) 0%, var(--teal) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          AS
        </a>

        {/* Desktop links */}
        <ul style={{
          display: 'flex', alignItems: 'center', gap: '0.25rem',
          listStyle: 'none',
        }}
          className="desktop-nav">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '50px',
                  color: activeLink === href ? 'var(--text)' : 'var(--text2)',
                  background: activeLink === href ? 'rgba(124,58,237,0.15)' : 'transparent',
                  border: activeLink === href ? '1px solid rgba(124,58,237,0.3)' : '1px solid transparent',
                  transition: 'all 0.2s ease',
                  display: 'block',
                }}
                onMouseEnter={e => {
                  if (activeLink !== href) {
                    e.currentTarget.style.color = 'var(--text)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseLeave={e => {
                  if (activeLink !== href) {
                    e.currentTarget.style.color = 'var(--text2)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a href="/Amina_Sheikh_CV.html" target="_blank" rel="noreferrer"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.8rem', fontWeight: 700,
            padding: '0.5rem 1.2rem',
            borderRadius: '50px',
            background: 'linear-gradient(135deg, var(--accent), #5b21b6)',
            color: 'white',
            boxShadow: '0 2px 12px rgba(124,58,237,0.3)',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.5)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = '0 2px 12px rgba(124,58,237,0.3)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          className="desktop-cta">
          Download CV
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: '10px', padding: '0.5rem',
            color: 'var(--text)', cursor: 'pointer',
            display: 'none',
          }}
          className="mobile-menu-btn">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu" style={{
          position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(10,10,20,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          padding: 'max(1rem, 2vw)',
          animation: 'fadeIn 0.2s ease',
          overflowY: 'auto',
          maxHeight: 'calc(100vh - 60px)',
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
                    fontWeight: 600,
                    padding: '0.7rem 1rem',
                    borderRadius: '10px',
                    color: activeLink === href ? 'var(--accent2)' : 'var(--text2)',
                    background: activeLink === href ? 'rgba(124,58,237,0.1)' : 'transparent',
                    display: 'block',
                    transition: 'all 0.2s',
                  }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="/Amina_Sheikh_CV.html" target="_blank" rel="noreferrer"
            style={{
              display: 'block', marginTop: '1rem',
              textAlign: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', fontWeight: 700,
              padding: '0.75rem',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, var(--accent), #5b21b6)',
              color: 'white',
            }}>
            Download CV
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav  { display: none !important; }
          .desktop-cta  { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
          .desktop-nav  { display: flex !important; }
          .desktop-cta  { display: block !important; }
        }
      `}</style>
    </>
  );
}

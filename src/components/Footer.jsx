import { Github, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github,   href: 'https://github.com/aminasheikh',   label: 'GitHub' },
  { icon: Mail,     href: 'mailto:itzamina047@gmail.com',    label: 'Email' },
];

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: 'clamp(2rem, 5vw, 3rem) max(1rem, 2vw) clamp(1.5rem, 3vw, 2rem)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)',
        width: '400px', height: '200px',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1100px', margin: '0 auto',
        position: 'relative', zIndex: 1,
      }}>
        {/* Top row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'start',
          gap: 'max(1rem, 2vw)',
          marginBottom: 'clamp(1.5rem, 5vw, 2.5rem)',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, var(--accent2) 0%, var(--teal) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0.3rem',
            }}>
              Amina Sheikh
            </div>
            <p style={{ color: 'var(--text3)', fontSize: 'clamp(0.7rem, 2vw, 0.82rem)' }}>
              AI-Powered Web Developer · Jalalpur Jattan, PK
            </p>
          </div>

          {/* Nav links */}
          <nav style={{ display: 'flex', gap: 'clamp(0.75rem, 3vw, 1.5rem)', flexWrap: 'wrap' }}>
            {navLinks.map(({ label, href }) => (
              <a key={href} href={href}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(0.7rem, 2vw, 0.82rem)', fontWeight: 600,
                  color: 'var(--text3)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}>
                {label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 'clamp(0.5rem, 2vw, 0.75rem)' }}>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                aria-label={label}
                style={{
                  width: '38px', height: '38px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text3)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent2)';
                  e.currentTarget.style.color = 'var(--accent2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--border), transparent)',
          marginBottom: '1.5rem',
        }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 'clamp(0.5rem, 2vw, 0.75rem)',
        }}>
          <p style={{ color: 'var(--text3)', fontSize: 'clamp(0.7rem, 2vw, 0.78rem)' }}>
            © {year} Amina Sheikh. All rights reserved.
          </p>
          <p style={{
            color: 'var(--text3)', fontSize: 'clamp(0.7rem, 2vw, 0.78rem)',
            display: 'flex', alignItems: 'center', gap: '0.3rem',
          }}>
            Built with <Heart size={12} color="var(--pink)" fill="var(--pink)" /> React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

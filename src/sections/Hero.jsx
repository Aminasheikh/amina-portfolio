import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Github, Mail } from 'lucide-react';

const roles = [
  'AI-Powered Web Developer',
  'React & Node.js Developer',
  'Software Engineering Student',
  'Full Stack Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: 'max(1rem, 2vw)',
    }}>
      {/* Gradient orbs */}
      <div style={{
        position: 'absolute', top: '15%', left: '10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '8%',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(6,214,160,0.12) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)',
        animation: 'float 10s ease-in-out infinite reverse',
      }} />
      <div style={{
        position: 'absolute', top: '50%', right: '25%',
        width: '200px', height: '200px',
        background: 'radial-gradient(circle, rgba(244,114,182,0.1) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(30px)',
        animation: 'float 6s ease-in-out infinite 2s',
      }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      <div style={{
        maxWidth: '900px', width: '100%', position: 'relative', zIndex: 1,
        animation: 'fadeUp 0.9s ease both',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)',
          borderRadius: '50px', padding: '0.4rem 1rem',
          marginBottom: '2rem', fontSize: '0.8rem', fontWeight: 500,
          color: 'var(--accent2)',
        }}>
          <Sparkles size={13} />
          Available for Web Development Internship
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 8vw, 6.5rem)',
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          marginBottom: '1rem',
        }}>
          Amina{' '}
          <span style={{
            background: 'linear-gradient(135deg, var(--accent2) 0%, var(--teal) 50%, var(--pink) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Sheikh</span>
        </h1>

        {/* Typewriter */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
          fontWeight: 600,
          color: 'var(--text2)',
          marginBottom: '1.5rem',
          minHeight: '2.5rem',
          display: 'flex', alignItems: 'center', gap: '2px',
        }}>
          <span style={{ color: 'var(--teal)' }}>{'> '}</span>
          {displayed}
          <span style={{
            display: 'inline-block', width: '3px', height: '1.4em',
            background: 'var(--accent2)', marginLeft: '2px',
            animation: 'blink 1s step-end infinite',
          }} />
        </div>

        {/* Description */}
        <p style={{
          fontSize: '1.05rem', color: 'var(--text2)', lineHeight: 1.8,
          maxWidth: '580px', marginBottom: '2.5rem',
          fontWeight: 300,
        }}>
          Software Engineering student at <strong style={{ color: 'var(--text)', fontWeight: 500 }}>University of Gujrat</strong> (CGPA 3.6), building modern web applications enhanced with AI. I leverage AI tools to craft faster, smarter, and more powerful digital experiences.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="#projects" style={{
            background: 'linear-gradient(135deg, var(--accent), #5b21b6)',
            color: 'white', padding: '0.85rem 2rem',
            borderRadius: '50px', fontSize: '0.95rem', fontWeight: 600,
            fontFamily: 'var(--font-display)',
            boxShadow: '0 4px 24px rgba(124,58,237,0.35)',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(124,58,237,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(124,58,237,0.35)'; }}>
            View My Work
          </a>
          <a href="#contact" style={{
            background: 'transparent', color: 'var(--text)',
            padding: '0.85rem 2rem', borderRadius: '50px',
            border: '1px solid var(--border)',
            fontSize: '0.95rem', fontWeight: 600,
            fontFamily: 'var(--font-display)',
            transition: 'border-color 0.2s, background 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent2)'; e.currentTarget.style.background = 'rgba(124,58,237,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent'; }}>
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {[
            { icon: Github, href: 'https://github.com/aminasheikh', label: 'GitHub' },
            { icon: Mail, href: 'mailto:itzamina047@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
               aria-label={label}
               style={{
                 width: '40px', height: '40px',
                 background: 'var(--surface)', border: '1px solid var(--border)',
                 borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                 color: 'var(--text2)',
                 transition: 'all 0.2s',
               }}
               onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent2)'; e.currentTarget.style.color = 'var(--accent2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
               onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <Icon size={16} />
            </a>
          ))}
          <span style={{ color: 'var(--text3)', fontSize: '0.8rem', marginLeft: '0.5rem' }}>
            Jalalpur Jattan,Gujrat, Punjab
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        color: 'var(--text3)', display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '0.4rem', fontSize: '0.7rem',
        letterSpacing: '0.1em', textTransform: 'uppercase',
        fontFamily: 'var(--font-display)', fontWeight: 600,
        animation: 'float 3s ease-in-out infinite',
      }}>
        <span>Scroll</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}

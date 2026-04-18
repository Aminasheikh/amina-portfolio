import { GraduationCap, MapPin, Sparkles, Code2, Brain, Rocket } from 'lucide-react';

const stats = [
  { value: '3.6', label: 'CGPA', sub: 'out of 4.0' },
  { value: '5+', label: 'Projects', sub: 'built & shipped' },
  { value: '2026', label: 'Graduate', sub: 'BS Software Eng.' },
  { value: '∞', label: 'Curiosity', sub: 'always learning' },
];

const highlights = [
  {
    icon: GraduationCap,
    color: '#7c3aed',
    title: 'University of Gujrat',
    desc: 'BS Software Engineering · 2022 – 2026 · CGPA 3.6/4.0',
  },
  {
    icon: Brain,
    color: '#06d6a0',
    title: 'AI-Enhanced Developer',
    desc: 'Integrating GitHub Copilot, Claude & ChatGPT into daily workflow',
  },
  {
    icon: Code2,
    color: '#f472b6',
    title: 'Full Stack Focused',
    desc: 'React on the frontend, Node.js on the backend — end to end',
  },
  {
    icon: Rocket,
    color: '#fbbf24',
    title: 'Seeking Internship',
    desc: 'Ready to contribute, learn, and grow in a real-world team',
  },
];

export default function About() {
  return (
    <section id="about" style={{
      padding: '7rem 2rem',
      maxWidth: '1100px', margin: '0 auto',
    }}>
      {/* Section header */}
      <div style={{ marginBottom: '4rem' }}>
        <p style={{
          fontFamily: 'var(--font-display)', fontSize: '0.75rem',
          fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--accent2)', marginBottom: '0.75rem',
        }}>
          01 / About
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: 800, letterSpacing: '-0.02em',
        }}>
          Who I Am
        </h2>
      </div>

      {/* Main grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'start',
      }}>

        {/* Left — text */}
        <div>
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '24px',
            padding: '2rem',
            marginBottom: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Glow */}
            <div style={{
              position: 'absolute', top: '-20px', right: '-20px',
              width: '120px', height: '120px',
              background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
              borderRadius: '50%',
            }} />

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: '50px', padding: '0.3rem 0.9rem',
              fontSize: '0.72rem', fontWeight: 700, fontFamily: 'var(--font-display)',
              color: 'var(--accent2)', letterSpacing: '0.06em',
              marginBottom: '1.2rem',
            }}>
              <MapPin size={11} /> Jalalpur Jattan, Punjab, PK
            </div>

            <p style={{
              color: 'var(--text2)', lineHeight: 1.85,
              fontSize: '0.95rem', marginBottom: '1.2rem',
            }}>
              I'm <strong style={{ color: 'var(--text)' }}>Amina Sheikh</strong>, a final-year Software Engineering student at the University of Gujrat. I build web applications that are fast, accessible, and visually polished — from solo projects to collaborative code.
            </p>

            <p style={{
              color: 'var(--text2)', lineHeight: 1.85,
              fontSize: '0.95rem',
            }}>
              What makes me different is how I approach development: I treat <strong style={{ color: 'var(--teal)' }}>AI as a superpower</strong>. I use tools like GitHub Copilot, Claude, and ChatGPT to accelerate my workflow, write cleaner code, and solve complex problems faster — making me highly productive from day one.
            </p>
          </div>

          {/* Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {highlights.map(({ icon: Icon, color, title, desc }) => (
              <div key={title} style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '14px', padding: '1rem 1.2rem',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                <div style={{
                  width: '38px', height: '38px', flexShrink: 0,
                  background: `${color}18`, border: `1px solid ${color}30`,
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: color,
                }}>
                  <Icon size={17} />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: '0.85rem', color: 'var(--text)', marginBottom: '0.1rem',
                  }}>
                    {title}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text3)' }}>
                    {desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — stats */}
        <div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}>
            {stats.map(({ value, label, sub }) => (
              <div key={label} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                padding: '1.8rem 1.5rem',
                textAlign: 'center',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent2)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.4rem', fontWeight: 800,
                  background: 'linear-gradient(135deg, var(--accent2), var(--teal))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1, marginBottom: '0.4rem',
                }}>
                  {value}
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '0.85rem', color: 'var(--text)', marginBottom: '0.2rem',
                }}>
                  {label}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text3)' }}>
                  {sub}
                </div>
              </div>
            ))}
          </div>

          {/* AI badge */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,214,160,0.08))',
            border: '1px solid rgba(124,58,237,0.2)',
            borderRadius: '20px',
            padding: '1.8rem',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              marginBottom: '1rem',
            }}>
              <Sparkles size={18} color="var(--accent2)" />
              <span style={{
                fontFamily: 'var(--font-display)', fontWeight: 800,
                fontSize: '0.9rem', color: 'var(--accent2)',
              }}>
                AI-Enhanced Workflow
              </span>
            </div>
            <p style={{ color: 'var(--text2)', fontSize: '0.85rem', lineHeight: 1.75 }}>
              I integrate AI tools throughout every stage of development — from planning and architecture to writing and debugging code. This lets me ship higher-quality work in less time, and tackle problems I wouldn't solve alone.
            </p>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.2rem',
            }}>
              {['GitHub Copilot', 'Claude AI', 'ChatGPT', 'Cursor'].map(tool => (
                <span key={tool} style={{
                  fontSize: '0.72rem', padding: '0.25rem 0.7rem',
                  background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)',
                  borderRadius: '50px', color: 'var(--accent2)',
                  fontFamily: 'var(--font-display)', fontWeight: 600,
                }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

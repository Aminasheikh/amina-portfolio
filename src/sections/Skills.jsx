import { useState } from 'react';

const skillGroups = [
  {
    category: 'Frontend',
    color: '#f472b6',
    skills: [
      { name: 'HTML5 / CSS3',    level: 95, tag: 'Expert' },
      { name: 'JavaScript ES6+', level: 85, tag: 'Advanced' },
      { name: 'React.js',        level: 82, tag: 'Advanced' },
      { name: 'Tailwind CSS',    level: 88, tag: 'Advanced' },
    ],
  },
  {
    category: 'Backend',
    color: '#06d6a0',
    skills: [
      { name: 'Node.js',      level: 78, tag: 'Intermediate' },
      { name: 'REST APIs',    level: 80, tag: 'Intermediate' },
      { name: 'SQL / MySQL',  level: 75, tag: 'Intermediate' },
      { name: 'File System',  level: 82, tag: 'Advanced' },
    ],
  },
  {
    category: 'Tools & AI',
    color: '#a78bfa',
    skills: [
      { name: 'Git & GitHub',    level: 88, tag: 'Advanced' },
      { name: 'Vite',            level: 85, tag: 'Advanced' },
      { name: 'GitHub Copilot',  level: 90, tag: 'Expert' },
      { name: 'Claude / ChatGPT',level: 92, tag: 'Expert' },
    ],
  },
];

const tagColors = {
  Expert:       { bg: 'rgba(6,214,160,0.12)',   text: '#06d6a0',   border: 'rgba(6,214,160,0.25)' },
  Advanced:     { bg: 'rgba(124,58,237,0.12)',  text: '#a78bfa',   border: 'rgba(124,58,237,0.25)' },
  Intermediate: { bg: 'rgba(251,191,36,0.12)',  text: '#fbbf24',   border: 'rgba(251,191,36,0.25)' },
};

function SkillBar({ name, level, tag, color }) {
  const [hovered, setHovered] = useState(false);
  const tc = tagColors[tag];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--bg3)' : 'transparent',
        borderRadius: '10px',
        padding: 'clamp(0.5rem, 2vw, 0.75rem)',
        transition: 'background 0.2s',
      }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'clamp(0.35rem, 1vw, 0.5rem)', gap: '0.5rem', flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', color: 'var(--text)',
          minWidth: 0,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {name}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.3rem, 1vw, 0.6rem)', flexShrink: 0 }}>
          <span style={{
            fontSize: 'clamp(0.6rem, 1.5vw, 0.68rem)', fontWeight: 700, fontFamily: 'var(--font-display)',
            background: tc?.bg, color: tc?.text, border: `1px solid ${tc?.border}`,
            padding: '0.15rem clamp(0.35rem, 1vw, 0.55rem)', borderRadius: '50px',
            whiteSpace: 'nowrap',
          }}>
            {tag}
          </span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', fontWeight: 700, color: 'var(--text3)', whiteSpace: 'nowrap' }}>
            {level}%
          </span>
        </div>
      </div>
      <div style={{
        height: '5px', background: 'var(--bg3)', borderRadius: '3px', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${level}%`,
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
          borderRadius: '3px',
          transition: 'width 0.6s ease',
          boxShadow: hovered ? `0 0 8px ${color}60` : 'none',
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(null);

  return (
    <section id="skills" style={{
      padding: 'clamp(2.5rem, 7vw, 7rem) max(1rem, 2vw)',
      background: 'var(--bg2)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
            fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--accent2)', marginBottom: '0.75rem',
          }}>
            02 / Skills
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 800, letterSpacing: '-0.02em',
          }}>
            What I Work With
          </h2>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 90vw, 300px), 1fr))',
          gap: 'clamp(1rem, 3vw, 1.5rem)',
        }}>
          {skillGroups.map(({ category, color, skills }) => (
            <div key={category}
              onMouseEnter={() => setActiveGroup(category)}
              onMouseLeave={() => setActiveGroup(null)}
              style={{
                background: 'var(--surface)',
                border: `1px solid ${activeGroup === category ? color : 'var(--border)'}`,
                borderRadius: 'clamp(16px, 3vw, 24px)',
                padding: 'clamp(1.25rem, 4vw, 2rem)',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                transform: activeGroup === category ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: activeGroup === category ? `0 20px 40px ${color}15` : 'none',
              }}>
              {/* Category header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                marginBottom: 'clamp(1rem, 3vw, 1.8rem)', paddingBottom: 'clamp(0.75rem, 2vw, 1.2rem)',
                borderBottom: `1px solid ${color}25`,
              }}>
                <div style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: color,
                  boxShadow: `0 0 12px ${color}`,
                  flexShrink: 0,
                }} />
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: 'clamp(0.9rem, 3vw, 1rem)', color: 'var(--text)',
                  letterSpacing: '0.02em',
                }}>
                  {category}
                </h3>
              </div>

              {/* Skills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.15rem, 1vw, 0.25rem)' }}>
                {skills.map(skill => (
                  <SkillBar key={skill.name} {...skill} color={color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extras — tech tags */}
        <div style={{ marginTop: 'clamp(2rem, 5vw, 3rem)', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(0.65rem, 2vw, 0.75rem)', fontWeight: 600,
            color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: 'clamp(0.75rem, 2vw, 1.2rem)',
          }}>
            Also familiar with
          </p>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.4rem, 2vw, 0.6rem)',
            justifyContent: 'center',
          }}>
            {[
              'Postman', 'npm', 'Vercel', 'VS Code',
              'JSON', 'LocalStorage', 'Fetch API', 'CLI Tools',
              'Responsive Design', 'CSS Animations', 'OOP',
            ].map(t => (
              <span key={t} style={{
                fontSize: 'clamp(0.7rem, 1.8vw, 0.78rem)', padding: 'clamp(0.25rem, 1vw, 0.3rem) clamp(0.6rem, 2vw, 0.85rem)',
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '50px', color: 'var(--text2)',
                fontFamily: 'var(--font-display)', fontWeight: 500,
                transition: 'all 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent2)';
                  e.currentTarget.style.color = 'var(--accent2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text2)';
                }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

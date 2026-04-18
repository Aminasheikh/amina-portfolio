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
        padding: '0.75rem',
        transition: 'background 0.2s',
      }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 600,
          fontSize: '0.85rem', color: 'var(--text)',
        }}>
          {name}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{
            fontSize: '0.68rem', fontWeight: 700, fontFamily: 'var(--font-display)',
            background: tc?.bg, color: tc?.text, border: `1px solid ${tc?.border}`,
            padding: '0.15rem 0.55rem', borderRadius: '50px',
          }}>
            {tag}
          </span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, color: 'var(--text3)' }}>
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
      padding: '7rem 2rem',
      background: 'var(--bg2)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: '0.75rem',
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {skillGroups.map(({ category, color, skills }) => (
            <div key={category}
              onMouseEnter={() => setActiveGroup(category)}
              onMouseLeave={() => setActiveGroup(null)}
              style={{
                background: 'var(--surface)',
                border: `1px solid ${activeGroup === category ? color : 'var(--border)'}`,
                borderRadius: '24px',
                padding: '2rem',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                transform: activeGroup === category ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: activeGroup === category ? `0 20px 40px ${color}15` : 'none',
              }}>
              {/* Category header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                marginBottom: '1.8rem', paddingBottom: '1.2rem',
                borderBottom: `1px solid ${color}25`,
              }}>
                <div style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: color,
                  boxShadow: `0 0 12px ${color}`,
                }} />
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '1rem', color: 'var(--text)',
                  letterSpacing: '0.02em',
                }}>
                  {category}
                </h3>
              </div>

              {/* Skills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {skills.map(skill => (
                  <SkillBar key={skill.name} {...skill} color={color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extras — tech tags */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600,
            color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: '1.2rem',
          }}>
            Also familiar with
          </p>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.6rem',
            justifyContent: 'center',
          }}>
            {[
              'Postman', 'npm', 'Vercel', 'VS Code',
              'JSON', 'LocalStorage', 'Fetch API', 'CLI Tools',
              'Responsive Design', 'CSS Animations', 'OOP',
            ].map(t => (
              <span key={t} style={{
                fontSize: '0.78rem', padding: '0.3rem 0.85rem',
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

import { ExternalLink, Github, Terminal, BookOpen, HelpCircle, StickyNote, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Node Tasker',
    desc: 'A command-line task management application built with Node.js. Allows users to create, update, delete, and track tasks efficiently from the terminal with persistent storage.',
    tech: ['Node.js', 'JavaScript', 'File System', 'CLI'],
    icon: Terminal,
    color: '#06d6a0',
    github: 'https://github.com/aminasheikh/node-tasker',
    live: null,
    tag: 'Backend',
  },
  {
    title: 'Event Logger',
    desc: 'A logging system that tracks and records events with timestamps. Built for monitoring application activity, debugging, and creating audit trails with structured log output.',
    tech: ['Node.js', 'JavaScript', 'JSON', 'Date API'],
    icon: BookOpen,
    color: '#7c3aed',
    github: 'https://github.com/aminasheikh/event-logger',
    live: null,
    tag: 'Backend',
  },
  {
    title: 'Quiz App',
    desc: 'An interactive quiz web application with multiple categories, score tracking, and a timer. Built with React for a smooth user experience and dynamic question rendering.',
    tech: ['React.js', 'JavaScript', 'CSS3', 'Hooks'],
    icon: HelpCircle,
    color: '#f472b6',
    github: 'https://github.com/aminasheikh/quiz-app',
    live: null,
    tag: 'Frontend',
  },
  {
    title: 'Note App',
    desc: 'A full-featured note-taking application with create, edit, delete, and search capabilities. Features a clean UI with local storage for persistent data without a backend.',
    tech: ['React.js', 'Tailwind CSS', 'LocalStorage', 'JavaScript'],
    icon: StickyNote,
    color: '#fbbf24',
    github: 'https://github.com/aminasheikh/note-app',
    live: null,
    tag: 'Frontend',
  },
  {
    title: 'Handle API',
    desc: 'A project demonstrating REST API integration and consumption. Fetches, displays, and manages data from external APIs using async/await patterns and error handling.',
    tech: ['JavaScript', 'Fetch API', 'REST', 'JSON', 'HTML/CSS'],
    icon: Globe,
    color: '#38bdf8',
    github: 'https://github.com/aminasheikh/handle-api',
    live: null,
    tag: 'Full Stack',
  },
];

const tagColors = {
  Backend: { bg: 'rgba(6,214,160,0.1)', text: '#06d6a0', border: 'rgba(6,214,160,0.2)' },
  Frontend: { bg: 'rgba(244,114,182,0.1)', text: '#f472b6', border: 'rgba(244,114,182,0.2)' },
  'Full Stack': { bg: 'rgba(56,189,248,0.1)', text: '#38bdf8', border: 'rgba(56,189,248,0.2)' },
};

export default function Projects() {
  return (
    <section id="projects" style={{
      padding: 'clamp(2.5rem, 7vw, 7rem) max(1rem, 2vw)',
      maxWidth: '1100px', margin: '0 auto',
    }}>
      <div style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
        <p style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
          fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--accent2)', marginBottom: '0.75rem',
        }}>
          03 / Projects
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          fontWeight: 800, letterSpacing: '-0.02em',
        }}>
          Things I've Built
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(280px, 90vw, 320px), 1fr))',
        gap: 'clamp(1rem, 3vw, 1.5rem)',
      }}>
        {projects.map(({ title, desc, tech, icon: Icon, color, github, live, tag }) => (
          <div key={title} style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 'clamp(16px, 3vw, 20px)', padding: 'clamp(1.25rem, 4vw, 1.8rem)',
            display: 'flex', flexDirection: 'column',
            transition: 'all 0.3s ease',
            position: 'relative', overflow: 'hidden',
            cursor: 'default',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = color;
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = `0 20px 40px ${color}18`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
            {/* Background glow */}
            <div style={{
              position: 'absolute', top: '-20px', right: '-20px',
              width: '80px', height: '80px',
              background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
              borderRadius: '50%',
            }} />

            {/* Top row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'clamp(0.75rem, 3vw, 1.2rem)', gap: '0.5rem' }}>
              <div style={{
                width: 'clamp(36px, 8vw, 44px)', height: 'clamp(36px, 8vw, 44px)', borderRadius: '12px',
                background: `${color}18`, border: `1px solid ${color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: color, flexShrink: 0,
              }}>
                <Icon size={18} />
              </div>
              <span style={{
                fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)', fontWeight: 700, fontFamily: 'var(--font-display)',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                background: tagColors[tag]?.bg || 'var(--border)',
                color: tagColors[tag]?.text || 'var(--text2)',
                border: `1px solid ${tagColors[tag]?.border || 'var(--border)'}`,
                padding: 'clamp(0.15rem, 1vw, 0.2rem) clamp(0.4rem, 1.5vw, 0.6rem)', borderRadius: '50px',
                whiteSpace: 'nowrap',
              }}>
                {tag}
              </span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
              fontWeight: 700, marginBottom: 'clamp(0.5rem, 2vw, 0.7rem)',
            }}>
              {title}
            </h3>
            <p style={{
              color: 'var(--text2)', fontSize: 'clamp(0.8rem, 2vw, 0.88rem)', lineHeight: 1.7,
              flex: 1, marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
            }}>
              {desc}
            </p>

            {/* Tech pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.3rem, 2vw, 0.4rem)', marginBottom: 'clamp(1rem, 3vw, 1.5rem)' }}>
              {tech.map(t => (
                <span key={t} style={{
                  fontSize: 'clamp(0.65rem, 1.5vw, 0.72rem)', padding: 'clamp(0.15rem, 1vw, 0.2rem) clamp(0.4rem, 1.5vw, 0.6rem)',
                  background: 'var(--bg3)', border: '1px solid var(--border)',
                  borderRadius: '50px', color: 'var(--text3)',
                  fontFamily: 'var(--font-display)', fontWeight: 600,
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: 'clamp(0.5rem, 2vw, 0.75rem)', flexWrap: 'wrap' }}>
              <a href={github} target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                fontSize: 'clamp(0.75rem, 2vw, 0.82rem)', fontWeight: 600, fontFamily: 'var(--font-display)',
                color: 'var(--text2)', border: '1px solid var(--border)',
                padding: 'clamp(0.35rem, 1.5vw, 0.4rem) clamp(0.7rem, 2vw, 0.9rem)', borderRadius: '50px',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text2)'; e.currentTarget.style.color = 'var(--text)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}>
                <Github size={13} /> Code
              </a>
              {live && (
                <a href={live} target="_blank" rel="noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  fontSize: 'clamp(0.75rem, 2vw, 0.82rem)', fontWeight: 600, fontFamily: 'var(--font-display)',
                  color: 'white', background: color,
                  padding: 'clamp(0.35rem, 1.5vw, 0.4rem) clamp(0.7rem, 2vw, 0.9rem)', borderRadius: '50px',
                  transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                  <ExternalLink size={13} /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div style={{ textAlign: 'center', marginTop: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
        <a href="https://github.com/aminasheikh" target="_blank" rel="noreferrer"
           style={{
             display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
             color: 'var(--text2)', border: '1px solid var(--border)',
             padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1.5rem, 4vw, 2rem)', borderRadius: '50px',
             fontFamily: 'var(--font-display)', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', fontWeight: 600,
             transition: 'all 0.2s',
           }}
           onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent2)'; e.currentTarget.style.color = 'var(--accent2)'; }}
           onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}>
          <Github size={16} /> See all projects on GitHub
        </a>
      </div>
    </section>
  );
}

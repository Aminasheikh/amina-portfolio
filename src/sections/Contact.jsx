import { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, Loader } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'itzamina047@gmail.com',
    href: 'mailto:itzamina047@gmail.com',
    color: '#f472b6',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/aminasheikh',
    href: 'https://github.com/aminasheikh',
    color: '#a78bfa',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Jalalpur Jattan,Gujrat,Punjab,',
    href: null,
    color: '#06d6a0',
  },
];

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent]       = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending — replace with Formspree integration (see README)
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  const inputStyle = (field) => ({
    width: '100%',
    background: focused === field ? 'var(--bg3)' : 'var(--surface)',
    border: `1px solid ${focused === field ? 'var(--accent2)' : 'var(--border)'}`,
    borderRadius: '12px',
    padding: '0.85rem 1.1rem',
    color: 'var(--text)',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'all 0.2s ease',
    boxShadow: focused === field ? '0 0 0 3px rgba(124,58,237,0.12)' : 'none',
  });

  return (
    <section id="contact" style={{
      padding: 'clamp(2.5rem, 7vw, 7rem) max(1rem, 2vw)',
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
            04 / Contact
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 800, letterSpacing: '-0.02em',
          }}>
            Let's Talk
          </h2>
          <p style={{ color: 'var(--text2)', marginTop: '0.75rem', fontSize: '1rem' }}>
            Open to internship opportunities, collaborations, or just a friendly hello.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
        }}>

          {/* Left — contact info */}
          <div>
            <p style={{
              color: 'var(--text2)', fontSize: '0.95rem', lineHeight: 1.8,
              marginBottom: '2rem',
            }}>
              I'm currently seeking a <strong style={{ color: 'var(--text)' }}>web development internship</strong>. Whether you have an opportunity, a project in mind, or just want to connect — my inbox is always open.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <div key={label} style={{
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
                    width: '40px', height: '40px', flexShrink: 0,
                    background: `${color}18`, border: `1px solid ${color}30`,
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color,
                  }}>
                    <Icon size={17} />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.7rem', fontWeight: 700, fontFamily: 'var(--font-display)',
                      color: 'var(--text3)', letterSpacing: '0.08em', textTransform: 'uppercase',
                      marginBottom: '0.15rem',
                    }}>
                      {label}
                    </div>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        style={{
                          fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500,
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = color}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}>
                        {value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '24px',
            padding: '2rem',
          }}>
            {sent ? (
              <div style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', height: '100%', gap: '1rem',
                padding: '3rem 0',
              }}>
                <CheckCircle size={48} color="var(--teal)" />
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '1.3rem', color: 'var(--text)',
                }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text2)', fontSize: '0.9rem', maxWidth: '280px' }}>
                  Thanks for reaching out! I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  style={{
                    marginTop: '0.5rem',
                    fontFamily: 'var(--font-display)', fontWeight: 600,
                    fontSize: '0.85rem', color: 'var(--accent2)',
                    background: 'transparent', border: '1px solid var(--accent2)',
                    borderRadius: '50px', padding: '0.5rem 1.5rem',
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{
                      display: 'block', fontFamily: 'var(--font-display)',
                      fontSize: '0.72rem', fontWeight: 700, color: 'var(--text3)',
                      letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem',
                    }}>
                      Name
                    </label>
                    <input
                      name="name" type="text" required
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('name')}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block', fontFamily: 'var(--font-display)',
                      fontSize: '0.72rem', fontWeight: 700, color: 'var(--text3)',
                      letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem',
                    }}>
                      Email
                    </label>
                    <input
                      name="email" type="email" required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('email')}
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block', fontFamily: 'var(--font-display)',
                    fontSize: '0.72rem', fontWeight: 700, color: 'var(--text3)',
                    letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem',
                  }}>
                    Subject
                  </label>
                  <input
                    name="subject" type="text" required
                    placeholder="Internship opportunity / Collaboration / Hello"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    style={inputStyle('subject')}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block', fontFamily: 'var(--font-display)',
                    fontSize: '0.72rem', fontWeight: 700, color: 'var(--text3)',
                    letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem',
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message" required rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '130px' }}
                  />
                </div>

                <button type="submit" disabled={loading} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  background: loading ? 'rgba(124,58,237,0.5)' : 'linear-gradient(135deg, var(--accent), #5b21b6)',
                  color: 'white',
                  border: 'none', borderRadius: '12px',
                  padding: '0.9rem 1.5rem',
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 4px 20px rgba(124,58,237,0.3)',
                }}
                  onMouseEnter={e => { if (!loading) e.currentTarget.style.boxShadow = '0 8px 30px rgba(124,58,237,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.3)'; }}>
                  {loading ? (
                    <><Loader size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

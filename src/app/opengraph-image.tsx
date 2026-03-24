import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Gabriel Montes | AI Automation Specialist';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: '#0a0a0a',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '200px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '32px',
          }}
        >
          <span style={{ color: 'white', fontSize: '28px', fontWeight: 'bold' }}>G</span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: '900',
            background: 'linear-gradient(90deg, #ffffff, #a78bfa)',
            backgroundClip: 'text',
            color: 'transparent',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          Gabriel Montes
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: '28px',
            color: '#8b5cf6',
            fontWeight: '600',
            marginBottom: '24px',
          }}
        >
          AI Automation Specialist & Software Developer
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '20px',
            color: '#9ca3af',
            maxWidth: '700px',
            lineHeight: 1.5,
          }}
        >
          Diseño sistemas que reemplazan operaciones manuales por procesos inteligentes, escalables y autónomos.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            right: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', gap: '12px' }}>
            {['N8N', 'Python', 'LangChain', 'Next.js', 'Supabase'].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  background: 'rgba(139,92,246,0.15)',
                  border: '1px solid rgba(139,92,246,0.3)',
                  color: '#c4b5fd',
                  fontSize: '14px',
                  fontWeight: '500',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#6b7280',
              fontSize: '14px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
              }}
            />
            Disponible para proyectos remotos
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

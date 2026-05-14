import Link from 'next/link'
import author from '../data/author'

function Avatar({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"
         style={{ flexShrink: 0, borderRadius: '50%' }}>
      <rect width="44" height="44" rx="22" fill={author.avatarColor} />
      <text x="22" y="30" textAnchor="middle" fontSize="18" fontWeight="700" fill="white"
            fontFamily="'Apple SD Gothic Neo','Noto Sans KR',system-ui,sans-serif">
        {author.initials}
      </text>
    </svg>
  )
}

export function AuthorByline() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '10px 0 18px' }}>
      <Avatar size={32} />
      <div style={{ fontSize: 13, color: '#6B7280' }}>
        <Link href={author.url} style={{ color: '#111827', fontWeight: 700, textDecoration: 'none' }}>
          {author.name}
        </Link>
        <span style={{ marginLeft: 6 }}>{author.role}</span>
      </div>
    </div>
  )
}

export function AuthorCardFull() {
  return (
    <aside style={{
      display: 'flex', gap: 16, alignItems: 'flex-start',
      background: '#F8FAFC', border: '1px solid #E5E7EB',
      borderRadius: 12, padding: '20px 22px', margin: '32px 0 8px',
    }}>
      <Avatar size={44} />
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <Link href={author.url} style={{ fontSize: 15, fontWeight: 800, color: '#111827', textDecoration: 'none' }}>
            {author.name}
          </Link>
          <span style={{
            fontSize: 11, fontWeight: 600, padding: '2px 7px', borderRadius: 4,
            background: '#DBEAFE', color: '#1D4ED8',
          }}>{author.role}</span>
        </div>
        <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.7, margin: '0 0 8px' }}>
          {author.bio}
        </p>
        <a href={`mailto:${author.email}`} style={{ fontSize: 12, color: '#0284C7', textDecoration: 'none' }}>
          {author.email}
        </a>
        {' · '}
        <Link href={author.url} style={{ fontSize: 12, color: '#0284C7', textDecoration: 'none' }}>
          편집자 소개 →
        </Link>
      </div>
    </aside>
  )
}

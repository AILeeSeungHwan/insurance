import Link from 'next/link'

const CATEGORY_COLORS = {
  product:   { color:'#DC2626', bg:'#FEE2E2', label:'보험상품',     grad1:'#EF4444', grad2:'#7F1D1D' },
  category:  { color:'#1D4ED8', bg:'#DBEAFE', label:'보험종류',     grad1:'#3B82F6', grad2:'#1E3A8A' },
  company:   { color:'#0891B2', bg:'#CFFAFE', label:'보험사',       grad1:'#06B6D4', grad2:'#164E63' },
  addon:     { color:'#EA580C', bg:'#FFF7ED', label:'보조 생활정보', grad1:'#F97316', grad2:'#7C2D12' },
  situation: { color:'#7C3AED', bg:'#EDE9FE', label:'상황허브',     grad1:'#A78BFA', grad2:'#4C1D95' },
  tool:      { color:'#0284C7', bg:'#E0F2FE', label:'계산기',       grad1:'#38BDF8', grad2:'#0C4A6E' },
  compare:   { color:'#B91C1C', bg:'#FEF2F2', label:'비교',         grad1:'#FB7185', grad2:'#881337' },
  guide:     { color:'#475569', bg:'#F1F5F9', label:'가이드',       grad1:'#94A3B8', grad2:'#1E293B' },
}

function splitTitle(title) {
  if (!title) return ['']
  if (title.length <= 14) return [title]
  const breakAt = Math.ceil(title.length / 2)
  const line1 = title.slice(0, Math.min(breakAt, 14))
  const rest = title.slice(line1.length)
  const line2 = rest.length > 14 ? rest.slice(0, 13) + '…' : rest
  return [line1, line2]
}

function GridThumbnail({ post }) {
  const meta = CATEGORY_COLORS[post.category] || { label: post.category || '', grad1: '#9CA3AF', grad2: '#374151' }
  const gid = `g-${(post.slug || post.id || 'x').replace(/[^a-zA-Z0-9]/g, '')}`
  const lines = splitTitle(post.title || '')
  const baseY = lines.length === 1 ? 155 : 142

  return (
    <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg"
         style={{ width: '100%', display: 'block', borderRadius: '10px 10px 0 0' }}>
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={meta.grad1} />
          <stop offset="100%" stopColor={meta.grad2} />
        </linearGradient>
      </defs>
      <rect width="400" height="180" fill={`url(#${gid})`} />
      <circle cx="355" cy="28" r="110" fill="white" fillOpacity="0.06" />
      <circle cx="45" cy="165" r="80" fill="white" fillOpacity="0.06" />
      <circle cx="200" cy="90" r="130" fill="white" fillOpacity="0.03" />
      {/* category badge */}
      <rect x="14" y="13" rx="5" ry="5" width="94" height="22" fill="rgba(255,255,255,0.22)" />
      <text x="22" y="29" fontSize="11" fill="white" fontWeight="700"
            fontFamily="'Apple SD Gothic Neo','Noto Sans KR',system-ui,sans-serif"
            style={{ letterSpacing: '0.02em' }}>{meta.label}</text>
      {/* year */}
      <text x="14" y={baseY - 20} fontSize="12" fill="rgba(255,255,255,0.65)"
            fontFamily="system-ui,sans-serif">2026년</text>
      {/* title */}
      {lines.map((line, i) => (
        <text key={i} x="14" y={baseY + i * 24} fontSize="19" fill="white" fontWeight="800"
              fontFamily="'Apple SD Gothic Neo','Noto Sans KR',system-ui,sans-serif"
              style={{ letterSpacing: '-0.01em' }}>{line}</text>
      ))}
    </svg>
  )
}

function ListThumbnail({ post }) {
  const meta = CATEGORY_COLORS[post.category] || { label: post.category || '', grad1: '#9CA3AF', grad2: '#374151' }
  const gid = `gl-${(post.slug || post.id || 'x').replace(/[^a-zA-Z0-9]/g, '')}`
  const short = (post.title || '').slice(0, 7) + ((post.title || '').length > 7 ? '…' : '')

  return (
    <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"
         style={{ width: 72, height: 72, flexShrink: 0, borderRadius: 8, display: 'block' }}>
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={meta.grad1} />
          <stop offset="100%" stopColor={meta.grad2} />
        </linearGradient>
      </defs>
      <rect width="72" height="72" rx="8" fill={`url(#${gid})`} />
      <circle cx="62" cy="12" r="32" fill="white" fillOpacity="0.08" />
      <text x="36" y="32" fontSize="10" fill="rgba(255,255,255,0.8)" textAnchor="middle"
            fontFamily="'Apple SD Gothic Neo','Noto Sans KR',system-ui,sans-serif">{meta.label}</text>
      <text x="36" y="51" fontSize="11" fill="white" fontWeight="700" textAnchor="middle"
            fontFamily="'Apple SD Gothic Neo','Noto Sans KR',system-ui,sans-serif">{short}</text>
    </svg>
  )
}

export function GridCard({ post }) {
  const meta = CATEGORY_COLORS[post.category] || { color: '#6b7280', bg: '#F3F4F6', label: post.category }
  return (
    <Link href={post.url} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <article style={{
        background: '#fff', borderRadius: 10, border: '1px solid #E5E7EB',
        height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden',
        transition: 'box-shadow 0.18s, transform 0.18s',
      }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = '' }}
      >
        <GridThumbnail post={post} />
        <div style={{ padding: '12px 14px 14px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <span style={{
            fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 4,
            color: meta.color, background: meta.bg, display: 'inline-block', marginBottom: 7, alignSelf: 'flex-start'
          }}>{meta.label}</span>
          <h3 style={{ fontSize: 14, fontWeight: 700, color: '#111827', margin: '0 0 6px', lineHeight: 1.45 }}>{post.title}</h3>
          <p style={{ fontSize: 12, color: '#6B7280', lineHeight: 1.6, margin: 0, flex: 1 }}>
            {(post.description || '').slice(0, 75)}
          </p>
          {post.updatedAt && (
            <time style={{ fontSize: 10, color: '#9CA3AF', marginTop: 8, display: 'block' }}>업데이트: {post.updatedAt}</time>
          )}
        </div>
      </article>
    </Link>
  )
}

export function ListCard({ post }) {
  const meta = CATEGORY_COLORS[post.category] || { color: '#6b7280', bg: '#F3F4F6', label: post.category }
  return (
    <Link href={post.url} style={{ textDecoration: 'none' }}>
      <div style={{
        display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 0',
        borderBottom: '1px solid #F3F4F6', transition: 'background 0.15s',
      }}
        onMouseEnter={e => { e.currentTarget.style.background = '#F9FAFB' }}
        onMouseLeave={e => { e.currentTarget.style.background = '' }}
      >
        <ListThumbnail post={post} />
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 2 }}>
          <span style={{
            fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 4,
            color: meta.color, background: meta.bg, display: 'inline-block', marginBottom: 5, alignSelf: 'flex-start'
          }}>{meta.label}</span>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#111827', marginBottom: 4, lineHeight: 1.4 }}>{post.title}</div>
          <div style={{ fontSize: 12, color: '#6B7280', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {post.description}
          </div>
        </div>
      </div>
    </Link>
  )
}

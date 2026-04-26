// 보험 3단계 박스 — Info(공시·참고) / Warning(면책·주의) / Risk(원금손실·응급 수준)

export function InfoBox({ children, html, title }) {
  return (
    <div style={{
      background:'#EFF6FF', borderLeft:'4px solid #2563EB', padding:'14px 18px',
      borderRadius:'0 10px 10px 0', margin:'16px 0', fontSize:14, lineHeight:1.7, color:'#1E3A8A'
    }}>
      {title && (
        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6, fontWeight:800, color:'#1D4ED8' }}>
          <span>ℹ️</span><span>{title}</span>
        </div>
      )}
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : children}
    </div>
  )
}

export function WarningBox({ children, html, title }) {
  return (
    <div style={{
      background:'#FFFBEB', borderLeft:'4px solid #D97706', padding:'14px 18px',
      borderRadius:'0 10px 10px 0', margin:'16px 0', fontSize:14, lineHeight:1.7, color:'#78350F'
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6, fontWeight:800, color:'#B45309' }}>
        <span>⚠️</span>
        <span>{title || '주의 · 면책·제외 사항'}</span>
      </div>
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : children}
    </div>
  )
}

// 보험에서 "응급"에 해당하는 최상위 경고: 원금손실·갱신보험료 급등·비상조치
export function RiskBox({ children, html, title }) {
  return (
    <div style={{
      background:'#FEF2F2', border:'2px solid #DC2626', padding:'16px 20px',
      borderRadius:10, margin:'20px 0', fontSize:14, lineHeight:1.7, color:'#7F1D1D'
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8, fontWeight:900, color:'#B91C1C', fontSize:15 }}>
        <span style={{ fontSize:18 }}>🚨</span>
        <span>{title || '필수 리스크 고지'}</span>
      </div>
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : children}
    </div>
  )
}

// 하위 호환: PostRenderer가 기존 'emergency' 타입을 가져가도 작동하도록
export const EmergencyBox = RiskBox

export function InsuranceDisclaimer() {
  return (
    <div style={{
      background:'#F8FAFC', border:'1px solid #E2E8F0', padding:'16px 20px',
      borderRadius:10, margin:'32px 0 16px', fontSize:12, lineHeight:1.7, color:'#64748B'
    }}>
      <strong>보험 면책 안내</strong><br/>
      본 사이트는 보험 상품을 판매·모집하지 않으며, 게재된 정보는 일반적 설명입니다.
      실제 가입 조건·보험료·보장 내용은 각 보험사 약관 및 상품설명서 그리고 금감원·보험협회 공시실을 기준으로 확인해야 합니다.
      보험료 예시는 공시 기준일에 따른 추정치로, 실제 청약 조건과 다를 수 있습니다.
    </div>
  )
}

// 하위 호환: PostRenderer가 'medDisclaimer'를 사용하면 Insurance 면책으로 치환
export const MedicalDisclaimer = InsuranceDisclaimer

export function SourceList({ items }) {
  if (!items || items.length === 0) return null
  return (
    <div style={{ marginTop:24, padding:'16px 20px', background:'#F8FAFC', borderRadius:10, border:'1px solid #E2E8F0' }}>
      <div style={{ fontSize:13, fontWeight:800, marginBottom:8, color:'#334155' }}>📚 출처 · 공시실 참조</div>
      <ul style={{ listStyle:'none', padding:0, margin:0 }}>
        {items.map((s, i) => (
          <li key={i} style={{ fontSize:13, color:'#475569', marginBottom:6 }}>
            <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ color:'#2563EB', textDecoration:'underline' }}>
              {s.label}
            </a>
            {s.org && <span style={{ marginLeft:6, color:'#94A3B8', fontSize:12 }}>· {s.org}</span>}
            {s.accessedAt && <span style={{ marginLeft:6, color:'#94A3B8', fontSize:11 }}>(참조일 {s.accessedAt})</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function YmylBadge({ level }) {
  const MAP = {
    A: { label: '개별 보험상품', color: '#DC2626', bg: '#FEE2E2' },
    B: { label: '보험 종류·제도', color: '#D97706', bg: '#FEF3C7' },
    C: { label: '보조 생활 정보', color: '#16A34A', bg: '#DCFCE7' },
  }
  const m = MAP[level] || MAP.B
  return (
    <span style={{
      fontSize:11, fontWeight:800, padding:'3px 8px', borderRadius:6,
      color: m.color, background: m.bg
    }}>Level {level} · {m.label}</span>
  )
}

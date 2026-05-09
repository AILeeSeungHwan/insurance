import Link from 'next/link'
import Layout from '../components/Layout'
import { GridCard, ListCard } from '../components/PostCard'
import topics from '../data/topics'
import posts from '../data/posts'
import categories from '../data/categories'
import situations from '../data/situations'
import tools from '../data/tools'
import compares from '../data/compares'

export async function getStaticProps() {
  const featuredTopics = topics.filter(t => t.featured).sort((a,b) => a.priority - b.priority)
  const recent = [...posts].sort((a,b) => (b.updatedAt||'').localeCompare(a.updatedAt||'')).slice(0, 8)
  const categoriesList = categories.map(s => ({ ...s, url: `/categories/${s.slug}/` }))
  const situationsWithUrl = situations.map(s => ({ ...s, url: `/situations/${s.slug}/` }))
  const toolsWithUrl = tools.map(t => ({ ...t, url: `/tools/${t.slug}/` })).slice(0, 6)
  const comparesWithUrl = compares.map(c => ({ ...c, url: `/compare/${c.slug}/` })).slice(0, 4)
  return { props: { featuredTopics, recent, categoriesList, situations: situationsWithUrl, tools: toolsWithUrl, compares: comparesWithUrl } }
}

function TopicCard({ topic }) {
  return (
    <Link href={`/${topic.slug}/`} style={{ textDecoration: 'none' }}>
      <div style={{
        background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12,
        padding: '20px 16px', textAlign: 'center', transition: 'all 0.18s', cursor: 'pointer',
        borderTop: `3px solid ${topic.color || '#3B82F6'}`,
      }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.09)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = '' }}
      >
        <div style={{ fontSize: 30, marginBottom: 8 }}>{topic.icon}</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: topic.color || '#111827', marginBottom: 4 }}>{topic.name}</div>
        <div style={{ fontSize: 11, color: '#6B7280', lineHeight: 1.5 }}>{(topic.description || '').slice(0, 36)}{(topic.description || '').length > 36 ? '…' : ''}</div>
      </div>
    </Link>
  )
}

export default function Home({ featuredTopics, recent, categoriesList, situations, tools, compares }) {
  return (
    <Layout>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1D4ED8 0%, #0891B2 50%, #0284C7 100%)',
        borderRadius: 18, padding: '44px 28px', marginBottom: 32, textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -60, right: -60, width: 220, height: 220,
          borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: -40, left: -40, width: 160, height: 160,
          borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none'
        }} />
        <div style={{
          display: 'inline-block', background: 'rgba(255,255,255,0.18)', borderRadius: 20,
          padding: '4px 14px', fontSize: 12, color: 'white', fontWeight: 600, marginBottom: 14
        }}>금감원·보험협회 공시 기준</div>
        <h1 style={{ fontSize: 30, fontWeight: 900, color: 'white', margin: '0 0 12px', lineHeight: 1.3 }}>
          보험, 한눈에 비교하고<br />제대로 선택하세요
        </h1>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', margin: '0 auto 20px', maxWidth: 520, lineHeight: 1.75 }}>
          실손·자동차·암·치아·운전자·여행자 보험의 종류별 개요, 상품 비교,<br />
          보험료 계산기, 청구 가이드를 한 곳에서.
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/categories/silson/" style={{
            background: 'white', color: '#1D4ED8', borderRadius: 8, padding: '9px 18px',
            fontSize: 13, fontWeight: 700, textDecoration: 'none'
          }}>실손보험 알아보기</Link>
          <Link href="/tools/silson-premium/" style={{
            background: 'rgba(255,255,255,0.18)', color: 'white', borderRadius: 8, padding: '9px 18px',
            fontSize: 13, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.4)'
          }}>보험료 계산기</Link>
        </div>
      </section>

      {/* Quick navigation */}
      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 14, color: '#111827' }}>무엇을 찾고 계신가요?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }} className="grid-4">
          {featuredTopics.map(t => <TopicCard key={t.slug} topic={t} />)}
        </div>
      </section>

      {/* Categories */}
      <section style={{ marginBottom: 36 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: '#111827', margin: 0 }}>보험 종류별 빠른 진입</h2>
          <Link href="/categories/" style={{ fontSize: 12, color: '#0284C7', textDecoration: 'none', fontWeight: 600 }}>전체 보기 →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }} className="grid-3">
          {categoriesList.slice(0, 6).map(s => <GridCard key={s.slug} post={s} />)}
        </div>
      </section>

      {/* Compares */}
      <section style={{ marginBottom: 36 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: '#111827', margin: 0 }}>인기 비교 페이지</h2>
          <Link href="/compare/" style={{ fontSize: 12, color: '#0284C7', textDecoration: 'none', fontWeight: 600 }}>전체 보기 →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }} className="grid-2">
          {compares.map(c => <GridCard key={c.slug} post={c} />)}
        </div>
      </section>

      {/* Situations */}
      <section style={{ marginBottom: 36 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: '#111827', margin: 0 }}>지금 이 상황이라면</h2>
          <Link href="/situations/" style={{ fontSize: 12, color: '#0284C7', textDecoration: 'none', fontWeight: 600 }}>전체 보기 →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }} className="grid-3">
          {situations.map(s => <GridCard key={s.slug} post={s} />)}
        </div>
      </section>

      {/* Tools */}
      <section style={{ marginBottom: 36 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: '#111827', margin: 0 }}>바로 쓰는 보험 계산기</h2>
          <Link href="/tools/" style={{ fontSize: 12, color: '#0284C7', textDecoration: 'none', fontWeight: 600 }}>전체 보기 →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }} className="grid-3">
          {tools.map(t => <GridCard key={t.slug} post={t} />)}
        </div>
      </section>

      {/* Recent */}
      <section style={{ marginBottom: 36 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 14, color: '#111827' }}>최근 업데이트</h2>
        <div style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '4px 16px' }}>
          {recent.map(p => <ListCard key={p.slug} post={p} />)}
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 10, padding: '16px 20px', marginBottom: 20 }}>
        <div style={{ fontSize: 12, color: '#1E3A8A', lineHeight: 1.7 }}>
          <strong>보험 면책 안내.</strong> 본 사이트는 보험 상품을 판매·모집하지 않습니다. 모든 정보는 일반적인 설명이며, 실제 가입 조건·보험료·보장 내용은 각 보험사 약관·상품설명서와 금감원·협회 공시실을 기준으로 확인하세요.
        </div>
      </section>
    </Layout>
  )
}

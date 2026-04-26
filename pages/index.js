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

export default function Home({ featuredTopics, recent, categoriesList, situations, tools, compares }) {
  return (
    <Layout>
      <section style={{
        background:'linear-gradient(135deg, #DBEAFE 0%, #CFFAFE 50%, #E0F2FE 100%)',
        borderRadius:18, padding:'40px 28px', marginBottom:28, textAlign:'center'
      }}>
        <h1 style={{ fontSize:30, fontWeight:900, color:'#111827', margin:'0 0 10px' }}>
          보험, 공시실 기준으로 한눈에
        </h1>
        <p style={{ fontSize:15, color:'#475569', margin:'0 auto', maxWidth:600, lineHeight:1.7 }}>
          실손·자동차·암·치아·운전자·여행자 보험의 종류별 개요, 상품 비교, 보험료 계산기, 청구 가이드를 금감원·보험협회 공시 기준으로 정리했습니다.
        </p>
      </section>

      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#111827' }}>무엇을 찾고 계신가요?</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:12 }} className="grid-4">
          {featuredTopics.map(t => (
            <Link key={t.slug} href={`/${t.slug}/`} style={{ textDecoration:'none' }}>
              <div style={{ background:'#fff', border:'1px solid #E5E7EB', borderRadius:12, padding:'20px 18px', textAlign:'center' }}>
                <div style={{ fontSize:28, marginBottom:8 }}>{t.icon}</div>
                <div style={{ fontSize:14, fontWeight:700, color:t.color, marginBottom:4 }}>{t.name}</div>
                <div style={{ fontSize:11, color:'#6B7280', lineHeight:1.5 }}>{(t.description||'').slice(0,40)}…</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#111827' }}>보험 종류별 빠른 진입</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12 }} className="grid-3">
          {categoriesList.slice(0, 6).map(s => <GridCard key={s.slug} post={s} />)}
        </div>
      </section>

      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#111827' }}>인기 비교 페이지</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:12 }} className="grid-2">
          {compares.map(c => <GridCard key={c.slug} post={c} />)}
        </div>
      </section>

      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#111827' }}>지금 이 상황이라면</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12 }} className="grid-3">
          {situations.map(s => <GridCard key={s.slug} post={s} />)}
        </div>
      </section>

      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#111827' }}>바로 쓰는 보험 계산기</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:12 }} className="grid-3">
          {tools.map(t => <GridCard key={t.slug} post={t} />)}
        </div>
      </section>

      <section style={{ marginBottom:36 }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginBottom:14, color:'#111827' }}>최근 업데이트</h2>
        <div style={{ background:'#fff', border:'1px solid #E5E7EB', borderRadius:12, padding:'8px 20px' }}>
          {recent.map(p => <ListCard key={p.slug} post={p} />)}
        </div>
      </section>

      <section style={{ background:'#EFF6FF', border:'1px solid #BFDBFE', borderRadius:10, padding:'16px 20px', marginBottom:20 }}>
        <div style={{ fontSize:13, color:'#1E3A8A', lineHeight:1.7 }}>
          <strong>보험 면책 안내.</strong> 본 사이트는 보험 상품을 판매·모집하지 않습니다. 모든 정보는 일반적인 설명이며, 실제 가입 조건·보험료·보장 내용은 각 보험사 약관·상품설명서와 금감원·협회 공시실을 기준으로 확인하세요.
        </div>
      </section>
    </Layout>
  )
}

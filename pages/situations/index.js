import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import situations from '../../data/situations'

export async function getStaticProps() {
  const list = situations.map(s => ({ ...s, url: `/situations/${s.slug}/` }))
  return { props: { list } }
}

export default function SituationsHub({ list }) {
  return (
    <Layout title="상황별 보험 가이드" description="신혼·출산·자영업·시니어·첫차 등 인생 단계별 보험 우선순위와 예산 가이드를 정리합니다.">
      <Breadcrumb items={[{ label:'상황별' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>상황별 보험 가이드</h1>
      <p style={{ fontSize:14, color:'#6B7280', marginBottom:22 }}>
        신혼·출산·자영업·시니어 등 상황에 따라 보험의 우선순위는 달라집니다. 상황별 필수 보장과 예산 가이드를 정리했습니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}

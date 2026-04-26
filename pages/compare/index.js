import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import compares from '../../data/compares'

export async function getStaticProps() {
  const list = compares.map(s => ({ ...s, url: `/compare/${s.slug}/` }))
  return { props: { list } }
}

export default function CompareHub({ list }) {
  return (
    <Layout title="보험 비교" description="실손·자동차 다이렉트·암·치아·운전자 등 주요 보험의 상품별·조건별 비교 페이지를 모았습니다.">
      <Breadcrumb items={[{ label:'비교' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>보험 비교 허브</h1>
      <p style={{ fontSize:14, color:'#6B7280', marginBottom:22 }}>
        비교 페이지의 모든 수치는 금감원·협회 공시실 기준 예시이며, 실제 청약 보험료는 인수 기준에 따라 달라질 수 있습니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:12 }} className="grid-2">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}

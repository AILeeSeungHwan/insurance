import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import guides from '../../data/guides'

export async function getStaticProps() {
  const list = guides.map(s => ({ ...s, url: `/guides/${s.slug}/` }))
  return { props: { list } }
}

export default function GuidesHub({ list }) {
  return (
    <Layout title="보험 가이드" description="청구 절차·세액공제·약관 해설·분쟁 대응 등 보험 이용자에게 꼭 필요한 심화 가이드를 정리합니다.">
      <Breadcrumb items={[{ label:'가이드' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>보험 가이드</h1>
      <p style={{ fontSize:14, color:'#6B7280', marginBottom:22 }}>
        청구·연말정산·약관 해석·분쟁 대응 등 보험 이용자에게 꼭 필요한 주제를 공식 기관 자료 기준으로 정리합니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:12 }} className="grid-2">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}

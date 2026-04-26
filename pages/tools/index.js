import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import tools from '../../data/tools'

export async function getStaticProps() {
  const list = tools.map(s => ({ ...s, url: `/tools/${s.slug}/` }))
  return { props: { list } }
}

export default function ToolsHub({ list }) {
  return (
    <Layout title="보험 계산기" description="실손·자동차·암·연금·펫 보험료 추정과 세액공제·해지환급금·인플레이션 시뮬레이션 등 10종 이상의 보험 계산기를 제공합니다.">
      <Breadcrumb items={[{ label:'계산기' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>보험 계산기</h1>
      <p style={{ fontSize:14, color:'#6B7280', marginBottom:22 }}>
        모든 계산기는 공개 통계·가정값 기반의 <strong>추정치</strong>입니다. 실제 보험료는 인수 기준·건강고지·차량등급에 따라 달라집니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}

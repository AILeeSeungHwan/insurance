import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import categories from '../../data/categories'

export async function getStaticProps() {
  const list = categories.map(s => ({ ...s, url: `/categories/${s.slug}/` }))
  return { props: { list } }
}

export default function CategoriesHub({ list }) {
  return (
    <Layout title="보험종류" description="실손·자동차·암·치아·운전자·여행자·연금·펫 보험 등 보험 유형별 개요와 선택 포인트.">
      <Breadcrumb items={[{ label:'보험종류' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>보험종류 허브</h1>
      <p style={{ fontSize:14, color:'#6B7280', marginBottom:22 }}>
        보험 유형별로 어떤 보장을 설계하는지, 누가 검토 대상인지, 공통 특약과 선택 시 체크포인트를 금감원·협회 공시 기준으로 정리합니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}

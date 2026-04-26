import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import companies from '../../data/companies'

export async function getStaticProps() {
  const list = companies.map(s => ({ ...s, url: `/companies/${s.slug}/` }))
  return { props: { list } }
}

export default function CompaniesHub({ list }) {
  return (
    <Layout title="보험사" description="국내 주요 생명·손해보험사의 개요와 재무건전성(지급여력비율·민원 지표)을 공시 자료 기준으로 소개합니다.">
      <Breadcrumb items={[{ label:'보험사' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>보험사 안내</h1>
      <p style={{ fontSize:14, color:'#6B7280', marginBottom:22 }}>
        각 보험사 페이지는 금감원·협회 공시 자료를 기반으로 작성됩니다. 가입·해지·청구는 각 보험사 공식 채널을 통해야 합니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}

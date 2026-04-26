import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import products from '../../data/products'

export async function getStaticProps() {
  const list = products.map(s => ({ ...s, url: `/products/${s.slug}/` }))
  return { props: { list } }
}

export default function ProductsHub({ list }) {
  return (
    <Layout title="보험상품" description="보험사별 대표 상품의 주계약·특약·면책·보험료 예시를 공시 기준으로 정리합니다.">
      <Breadcrumb items={[{ label:'보험상품' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>보험상품 허브</h1>
      <p style={{ fontSize:14, color:'#6B7280', marginBottom:22 }}>
        각 상품 페이지는 공시실 기준 예시 보험료와 면책사항, 재가입·갱신 조건을 정리합니다. 실제 청약 조건은 반드시 보험사 약관·상품설명서를 확인하세요.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}

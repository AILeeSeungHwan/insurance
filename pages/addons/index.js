import Layout from '../../components/Layout'
import Breadcrumb from '../../components/Breadcrumb'
import { GridCard } from '../../components/PostCard'
import addons from '../../data/addons'

export async function getStaticProps() {
  const list = addons.map(s => ({ ...s, url: `/addons/${s.slug}/` }))
  return { props: { list } }
}

export default function AddonsHub({ list }) {
  return (
    <Layout title="보조 생활정보" description="블랙박스·카시트·낙상방지·여행용품 등 보험과 연계되는 생활용품 안내. 보험상품과는 무관한 Level C 보조 콘텐츠입니다.">
      <Breadcrumb items={[{ label:'보조 생활정보' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:10 }}>보조 생활정보</h1>
      <p style={{ fontSize:14, color:'#6B7280', marginBottom:22 }}>
        보험상품과는 별개로, 가입 전후에 함께 챙기면 좋은 <strong>생활 안전·건강용품</strong>을 모았습니다. 이 영역에만 쿠팡 파트너스 링크가 연결됩니다.
      </p>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }} className="grid-3">
        {list.map(s => <GridCard key={s.slug} post={s} />)}
      </div>
    </Layout>
  )
}

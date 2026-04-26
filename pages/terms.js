import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

export default function Terms() {
  return (
    <Layout title="이용약관" description="보험모아 이용약관. 사이트 이용 시 적용되는 일반 조건을 안내합니다.">
      <Breadcrumb items={[{ label:'이용약관' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:14 }}>이용약관</h1>
      <div style={{ fontSize:15, lineHeight:1.85, color:'#374151' }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>제1조 (목적)</h2>
        <p>본 약관은 보험모아 사이트(이하 "본 사이트") 이용에 관한 일반 조건을 정합니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>제2조 (서비스의 성격)</h2>
        <p>본 사이트는 보험 정보 큐레이션 서비스를 제공합니다. 보험 모집·체결을 대행하지 않으며, 특정 상품·회사·설계사를 추천·알선하지 않습니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>제3조 (정보의 정확성)</h2>
        <p>본 사이트는 정보의 정확성을 위해 노력하나, 공시 변경·약관 개정 등으로 게재 정보와 실제 상품 조건 사이에 차이가 발생할 수 있습니다. 가입 결정에 따른 책임은 가입자 본인에게 있습니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>제4조 (저작권)</h2>
        <p>본 사이트의 콘텐츠 저작권은 보험모아 또는 출처 표시된 기관에 귀속됩니다. 무단 복제·전재를 금합니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>제5조 (책임 제한)</h2>
        <p>본 사이트는 사용자가 게재된 정보를 활용하여 행한 보험 가입·해지·청구 등의 결정으로 발생한 손해에 대해 책임지지 않습니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>제6조 (약관 변경)</h2>
        <p>본 약관은 사이트 운영 사정에 따라 사전 통지 없이 변경될 수 있으며, 변경된 약관은 본 페이지 게재 시점부터 적용됩니다.</p>
      </div>
    </Layout>
  )
}

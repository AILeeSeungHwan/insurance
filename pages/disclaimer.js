import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

export default function Disclaimer() {
  return (
    <Layout title="보험 면책 안내" description="보험모아의 보험 정보는 일반적 설명이며, 보험계약 체결·모집 행위가 아닙니다. 실제 가입은 각 보험사 공시·약관을 기준으로 합니다.">
      <Breadcrumb items={[{ label:'보험 면책' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:14 }}>보험 면책 안내</h1>
      <div style={{ fontSize:15, lineHeight:1.85, color:'#374151' }}>
        <p style={{ background:'#FEF2F2', border:'1px solid #FECACA', padding:'14px 18px', borderRadius:10, marginBottom:18, color:'#7F1D1D' }}>
          본 사이트는 <strong>보험 상품을 판매·모집하지 않으며 보험대리점·보험설계사가 아닙니다</strong>. 게재된 정보는 일반적인 설명이며, 보험계약의 체결·모집 행위가 아닙니다. 가입 결정에 따른 책임은 가입자 본인에게 있습니다.
        </p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>1. 정보의 성격</h2>
        <p>본 사이트의 모든 정보는 금감원·보험협회·각 보험사 공시 자료를 기반으로 정리한 <strong>일반적·교육적 정보</strong>입니다. 특정 시점·조건에 따라 달라질 수 있으며, 실제 가입 시 보험사 약관·상품설명서·공시실 자료가 우선합니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>2. 보험료·환급금·수익률</h2>
        <p>본 사이트의 보험료 예시·환급률·계산기 결과는 공개 통계와 가정값을 기반으로 한 <strong>추정치</strong>입니다. 개인별 인수 기준(연령·성별·건강고지·차량등급·과거 청구 등)에 따라 실제 보험료와 차이가 있을 수 있습니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>3. 단정적 표현 배제</h2>
        <p>본 사이트는 보험업법 준수를 위해 "원금보장", "확정수익", "최고의 보험", "무조건 가입" 같은 단정·권유 표현을 사용하지 않습니다. 특정 보험사·상품·설계사·대리점을 알선하지 않습니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>4. 외부 링크</h2>
        <p>본 사이트는 공시 자료 확인을 위한 외부 링크를 제공할 수 있으며, 외부 사이트의 정보 정확성에 대해서는 각 사이트의 약관을 따릅니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>5. 광고 / 제휴</h2>
        <p>본 사이트는 Google AdSense 광고와 쿠팡 파트너스 제휴 수익으로 운영됩니다. 보험상품 본문에는 제휴 링크가 없으며, 쿠팡 파트너스 링크는 보조 생활용품(Addon) 영역에만 연결됩니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>6. 면책의 변경</h2>
        <p>본 면책 내용은 사전 통지 없이 변경될 수 있으며, 최신 내용은 본 페이지에 게재된 시점이 기준입니다.</p>
      </div>
    </Layout>
  )
}

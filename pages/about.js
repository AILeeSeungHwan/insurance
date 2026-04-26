import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

export default function About() {
  return (
    <Layout title="소개" description="보험모아는 금감원·보험협회 공시실 자료를 기반으로 보험 정보를 정리하는 큐레이터 사이트입니다.">
      <Breadcrumb items={[{ label:'소개' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:14 }}>보험모아 소개</h1>
      <div style={{ fontSize:15, lineHeight:1.85, color:'#374151' }}>
        <p style={{ marginBottom:14 }}>
          <strong>보험모아(insurancemoa)</strong>는 보험 가입을 검토하는 분들이 금융감독원·생명보험협회·손해보험협회·각 보험사의 공시실 자료를 손쉽게 비교·이해할 수 있도록 정리하는 <strong>보험 정보 큐레이터 사이트</strong>입니다.
        </p>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:8 }}>이 사이트의 포지셔닝</h2>
        <p style={{ marginBottom:14 }}>
          본 사이트는 <strong>보험대리점이나 보험설계사 자격을 보유한 모집 채널이 아닙니다</strong>. 보험상품을 판매하지 않으며, 특정 보험사 또는 설계사를 알선·소개하지도 않습니다. 게재된 정보는 공시 자료를 정리한 일반적인 설명이며, 실제 가입 조건·보험료·보장 내용은 각 보험사 약관·상품설명서를 통해 확인해야 합니다.
        </p>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:8 }}>운영 자금 출처</h2>
        <p style={{ marginBottom:14 }}>
          본 사이트는 <strong>광고 수익(Google AdSense)과 보조 생활용품 영역의 쿠팡 파트너스 제휴 수익</strong>으로 운영됩니다. 보험상품 본문에는 어떠한 제휴 링크도 연결하지 않습니다.
        </p>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:8 }}>편집 정책</h2>
        <p style={{ marginBottom:14 }}>
          모든 포스트는 <a href="/editorial-policy/" style={{ color:'#1D4ED8' }}>편집 정책</a>에 따라 작성됩니다. 의문이 있거나 정보 오류를 발견하면 <a href="/contact/" style={{ color:'#1D4ED8' }}>문의 페이지</a>로 알려주시면 검토 후 수정합니다.
        </p>
      </div>
    </Layout>
  )
}

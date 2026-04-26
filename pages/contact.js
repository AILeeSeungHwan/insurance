import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

export default function Contact() {
  return (
    <Layout title="문의" description="보험모아 정보 오류 신고 및 문의 안내. 정확한 정보를 위한 피드백을 환영합니다.">
      <Breadcrumb items={[{ label:'문의' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:14 }}>문의 / 오류 신고</h1>
      <div style={{ fontSize:15, lineHeight:1.85, color:'#374151' }}>
        <p>본 사이트의 정보 오류·정정 요청·콘텐츠 제휴 문의는 아래 이메일로 보내주세요.</p>
        <p style={{ marginTop:18, fontSize:18, fontWeight:800 }}>
          📧 <a href="mailto:cocoboogiwoo@gmail.com" style={{ color:'#1D4ED8' }}>cocoboogiwoo@gmail.com</a>
        </p>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:8 }}>회신 안내</h2>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li>영업일 기준 3~7일 이내 회신을 목표로 합니다.</li>
          <li>오류 신고는 페이지 URL과 해당 부분을 함께 알려주시면 빠르게 처리됩니다.</li>
          <li>개별 보험 가입 상담·청구 대행은 본 사이트의 운영 범위가 아닙니다 — 각 보험사 고객센터로 문의해야 합니다.</li>
        </ul>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:24, marginBottom:8 }}>공식 기관 연결</h2>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li>금융감독원 민원센터: <a href="https://www.fss.or.kr" target="_blank" rel="noopener noreferrer" style={{ color:'#1D4ED8' }}>fss.or.kr</a></li>
          <li>금융분쟁조정위원회: <a href="https://www.fss.or.kr" target="_blank" rel="noopener noreferrer" style={{ color:'#1D4ED8' }}>fss.or.kr</a></li>
          <li>한국소비자원: <a href="https://www.kca.go.kr" target="_blank" rel="noopener noreferrer" style={{ color:'#1D4ED8' }}>kca.go.kr</a></li>
        </ul>
      </div>
    </Layout>
  )
}

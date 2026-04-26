import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'

export default function EditorialPolicy() {
  return (
    <Layout title="편집 정책" description="보험모아의 정보 출처 기준, 검증 절차, 업데이트 주기, 광고/제휴 분리 원칙을 안내합니다.">
      <Breadcrumb items={[{ label:'편집 정책' }]} />
      <h1 style={{ fontSize:26, fontWeight:900, marginBottom:14 }}>편집 정책</h1>
      <div style={{ fontSize:15, lineHeight:1.85, color:'#374151' }}>
        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>1. 정보 출처 기준</h2>
        <p>모든 포스트는 다음 공식 자료를 우선 참조합니다.</p>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li>금융감독원 금융상품통합비교공시 (finlife.fss.or.kr)</li>
          <li>생명보험협회 공시실 (klia.or.kr)</li>
          <li>손해보험협회 공시실 (knia.or.kr)</li>
          <li>각 보험사 공시실</li>
        </ul>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>2. 정보 검증 절차</h2>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li>공시 기준일과 가입 조건(성별·연령·보장기간)을 명시한 보험료만 게재</li>
          <li>출처 2개 이상이 확보되지 않은 단정적 수치는 게재하지 않음</li>
          <li>검증 미완료 정보는 verificationRequired 플래그로 명시</li>
        </ul>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>3. 업데이트 주기</h2>
        <p>월 1회 이상 기존 포스트의 공시 기준일을 점검하고 변동이 있는 항목을 갱신합니다. 갱신 시 페이지 상단에 "업데이트" 일자를 표시합니다.</p>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>4. 금지 표현</h2>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li>"원금보장", "확정수익", "100% 환급" 등 보험업법상 금지 표현</li>
          <li>"최고", "1등", "무조건 가입해야 함" 등 단정·권유 표현</li>
          <li>특정 보험사·설계사·대리점 추천 알선</li>
        </ul>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>5. 광고 / 제휴 분리</h2>
        <p>본 사이트는 Google AdSense 광고 수익과 쿠팡 파트너스 제휴 수익으로 운영됩니다. 다음 원칙을 지킵니다.</p>
        <ul style={{ paddingLeft:18, marginBottom:14 }}>
          <li>보험상품 본문에 어떠한 제휴 링크도 연결하지 않음</li>
          <li>쿠팡 파트너스 링크는 보조 생활용품(Addon) 영역에만 연결</li>
          <li>광고 노출 위치는 본문 진입을 저해하지 않는 위치(상단·H2 사이·사이드)로 한정</li>
        </ul>

        <h2 style={{ fontSize:20, fontWeight:800, marginTop:18, marginBottom:8 }}>6. 오류 신고 / 정정 요청</h2>
        <p>잘못된 정보나 변경된 공시 자료를 발견하시면 <a href="/contact/" style={{ color:'#1D4ED8' }}>문의 페이지</a>로 알려주세요. 영업일 기준 7일 이내 검토 후 수정 또는 삭제합니다.</p>
      </div>
    </Layout>
  )
}

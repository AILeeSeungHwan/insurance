import Link from 'next/link'
import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import { AuthorCardFull } from '../components/AuthorCard'

export default function About() {
  return (
    <Layout
      title="보험모아 소개 — 이승환이 이 사이트를 만든 이유"
      description="1세대 실손보험 전환 압박과 잘못된 정보로 8년 보유 환급형 보험을 해지한 경험을 계기로 보험모아를 시작했습니다."
    >
      <Breadcrumb items={[{ label: '소개' }]} />

      <h1 style={{ fontSize: 26, fontWeight: 900, marginBottom: 6, color: '#111827' }}>
        보험모아를 시작한 이유
      </h1>
      <p style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 28 }}>이승환 · 보험모아 편집장</p>

      <div style={{ fontSize: 15, lineHeight: 1.95, color: '#374151', maxWidth: 680 }}>

        <div style={{ background: '#EFF6FF', borderLeft: '4px solid #1D4ED8', borderRadius: '0 10px 10px 0', padding: '18px 22px', marginBottom: 28 }}>
          <p style={{ margin: 0, fontWeight: 600, color: '#1E3A8A', fontSize: 15, lineHeight: 1.8 }}>
            "1세대 실손보험을 4세대로 바꾸라는 연락을 여러 차례 받았습니다. 마지막에는 거의 사인
            직전까지 갔습니다. 다행히 보험사에 다니는 친구한테 물어봤더니 &lsquo;절대 바꾸지 마&rsquo;라고 했습니다.
            그때 처음 알았습니다. 내가 보험에 대해 아는 게 하나도 없다는 걸."
          </p>
        </div>

        <p>
          1세대 실손보험은 비급여 항목을 포함한 의료비의 대부분을 보장해줍니다.
          4세대로 전환하면 비급여 특약을 별도로 선택해야 하고, 도수치료·주사·MRI 같은 항목은
          보장 한도가 크게 줄거나 제한됩니다.
          이미 1세대를 보유하고 있다면 전환하지 않는 것이 유리한 경우가 대부분입니다.
        </p>

        <p>
          그것도 몰랐습니다. "갱신이 안 된다"는 말도 사실이 아니었습니다.
          1세대 실손도 갱신이 됩니다. 보험료가 오를 수는 있지만 보장 구조 자체는 유지됩니다.
          결국 설계사가 건넨 정보 중 정확한 것이 없었던 셈입니다.
        </p>

        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 36, marginBottom: 12, color: '#111827' }}>
          8년 보유 보험을 잘못 해지했습니다
        </h2>

        <p>
          비슷한 시기에 환급형 보험 하나를 해지했습니다. 8년을 유지하고 있던 상품이었습니다.
          "지금 해지하면 환급금이 나오고, 더 좋은 상품으로 갈아타는 게 낫다"는 말을 들었습니다.
          당시에는 그 말이 맞는 것 같았습니다. 보험료가 비싸 보이기도 했고,
          환급금이 생긴다니 나쁘지 않다고 생각했습니다.
        </p>

        <p>
          나중에 알고 보니 그 상품은 8년이 지난 시점부터 보험료 대비 환급률이 역전되는 구조였습니다.
          계속 유지했다면 15년차 이후에는 이미 낸 보험료보다 환급금이 많아지는 구간이 있었습니다.
          8년을 버텨서 거의 손익분기점에 도달했던 시점에 해지한 셈이었습니다.
          지금도 가장 후회하는 결정 중 하나입니다.
        </p>

        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 36, marginBottom: 12, color: '#111827' }}>
          정보가 없으면 손해 본다는 걸 깨달았습니다
        </h2>

        <p>
          두 가지 경험을 통해 분명해진 것이 있었습니다.
          보험은 모르면 손해를 봅니다. 상대방이 나쁜 의도를 가지고 있지 않아도,
          정보의 비대칭이 있는 것만으로 잘못된 선택을 하게 됩니다.
        </p>

        <p>
          그래서 직접 공부하기 시작했습니다.
          금융감독원 금융상품통합비교공시, 생명보험협회·손해보험협회 공시실, 각 보험사의 상품설명서.
          처음에는 용어 자체가 낯설었지만, 읽다 보면 알 수 있는 내용들이었습니다.
          이 정보들을 사람들이 쉽게 접근할 수 있도록 정리하는 게 의미 있다고 생각해서
          보험모아를 시작했습니다.
        </p>

        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 36, marginBottom: 12, color: '#111827' }}>
          이 사이트가 하는 것과 하지 않는 것
        </h2>

        <div style={{ background: '#F9FAFB', borderRadius: 10, padding: '18px 22px', marginBottom: 14 }}>
          <p style={{ fontWeight: 700, marginBottom: 10, color: '#111827', margin: '0 0 10px' }}>하는 것</p>
          <ul style={{ paddingLeft: 18, margin: 0, lineHeight: 2.1 }}>
            <li>금감원·생보협회·손보협회·각 보험사 공시 자료를 기준으로 정보 정리</li>
            <li>보험 종류별 구조, 선택 기준, 청구 방법, 보험료 계산기 제공</li>
            <li>공시 수치 기반 상품 간 비교</li>
          </ul>
        </div>

        <div style={{ background: '#FFF1F2', borderRadius: 10, padding: '18px 22px', marginBottom: 28 }}>
          <p style={{ fontWeight: 700, margin: '0 0 10px', color: '#9F1239' }}>하지 않는 것</p>
          <ul style={{ paddingLeft: 18, margin: 0, lineHeight: 2.1 }}>
            <li>보험 상품 판매·모집 (보험대리점·설계사 자격 없음)</li>
            <li>특정 보험사·설계사 알선</li>
            <li>보험료·보장 수치에 대한 단정적 확정 발언</li>
            <li>보험상품 본문에 제휴 링크 연결</li>
          </ul>
        </div>

        <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 36, marginBottom: 12, color: '#111827' }}>
          운영 방식
        </h2>

        <p>
          사이트는 <strong>Google AdSense 광고 수익</strong>과
          생활 안전용품 페이지에 한정된 <strong>쿠팡 파트너스 제휴 수익</strong>으로 운영됩니다.
          보험 상품 페이지 본문에는 어떠한 제휴 링크도 연결하지 않습니다.
          수치 오류나 공시 자료 변경이 있으면{' '}
          <a href="mailto:shlee192300@gmail.com" style={{ color: '#1D4ED8' }}>shlee192300@gmail.com</a>으로
          알려주시면 검토 후 수정합니다.
        </p>

        <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: 28, lineHeight: 1.7 }}>
          모든 게재 정보는 일반적인 설명입니다.
          실제 가입 조건·보험료·보장 내용은 각 보험사 약관·상품설명서와
          금감원·협회 공시실을 통해 반드시 직접 확인하세요.
        </p>

      </div>

      <AuthorCardFull />

      <div style={{ marginTop: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Link href="/editorial-policy/" style={{ fontSize: 13, color: '#0284C7', textDecoration: 'none', fontWeight: 600 }}>편집 정책 →</Link>
        <Link href="/contact/" style={{ fontSize: 13, color: '#0284C7', textDecoration: 'none', fontWeight: 600 }}>문의하기 →</Link>
      </div>
    </Layout>
  )
}

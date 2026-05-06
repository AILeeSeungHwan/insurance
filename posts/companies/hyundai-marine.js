const post = {
  id: 'C0006',
  sections: [
    { type: 'intro', html: '<p><strong>현대해상화재보험은 1955년 설립된 손해보험 빅3 회사</strong>입니다. 자동차보험 다이렉트 "하이카"와 실손·운전자·치아·간병 등 장기손해보험까지 풀라인업을 운영합니다. 현대그룹 산하 손해보험사로서 안정적 자본 기반을 갖추고 있으며, 사고처리 네트워크가 전국에 폭넓게 분포합니다.</p><p>이 글은 현대해상의 회사 개요·재무건전성·주력 상품·청구 채널을 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험상품을 판매·모집하지 않습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">정식 명칭</td><td style="padding:8px;border:1px solid #E5E7EB">현대해상화재보험 주식회사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">분류</td><td style="padding:8px;border:1px solid #E5E7EB">손해보험사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">설립</td><td style="padding:8px;border:1px solid #E5E7EB">1955년</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">시장 위치</td><td style="padding:8px;border:1px solid #E5E7EB">손해보험 빅3</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대표 다이렉트 브랜드</td><td style="padding:8px;border:1px solid #E5E7EB">하이카 다이렉트</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대표 앱</td><td style="padding:8px;border:1px solid #E5E7EB">Hi-Care</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">공식 웹사이트</td><td style="padding:8px;border:1px solid #E5E7EB"><a href="https://www.hi.co.kr" target="_blank" rel="noopener noreferrer">www.hi.co.kr</a></td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">고객센터</td><td style="padding:8px;border:1px solid #E5E7EB">1588-5656</td></tr></table>' },

    { type: 'h2', id: 'history', text: '회사 개요' },
    { type: 'body', html: '<p>현대그룹 손해보험사로 자동차·실손·장기손해보험 등 손해보험 전 영역에서 시장 점유율 상위. 자동차 사고 처리에서 콜센터 응대 평가가 양호한 편이며 Hi-Care 앱이 청구·진료 추적 통합 기능으로 인지도 상승.</p>' },

    { type: 'h2', id: 'soundness', text: '재무건전성 (공시 기반)' },
    { type: 'info', title: '재무 지표 기준', html: '<p>K-ICS·자본 규모는 공시. 정확한 수치는 현대해상 공시실에서 확인.</p>' },
    { type: 'body', html: '<p>손해보험 빅3로서 K-ICS 규제 기준 이상 유지. 자산 규모 상위권. 민원 지표는 보유계약 대비 양호 수준.</p>' },

    { type: 'h2', id: 'products', text: '주요 상품 카테고리' },
    { type: 'body', html: '<ul><li><strong>자동차보험 — 하이카 다이렉트</strong></li><li><strong>실손의료보험 — 스마트건강보험 4세대</strong></li><li><strong>운전자보험</strong></li><li><strong>치아·간병·암보험</strong></li><li><strong>여행자보험</strong></li><li><strong>화재·배상책임 등</strong></li></ul><p>대표 상품: <a href="/products/hyundai-silson-4g/">스마트건강보험 4세대</a>, <a href="/products/hyundai-hicar/">하이카 다이렉트</a>.</p>' },

    { type: 'h2', id: 'claim', text: '청구 채널·고객센터' },
    { type: 'body', html: '<ul><li>Hi-Care 앱 — 청구·진료 통합</li><li>홈페이지 e-청구</li><li>콜센터 1588-5656 (24시간 사고)</li><li>전국 영업점·현장출동 직원</li></ul><p>실손 청구 간소화법 적용. 사고 출동 평균 30~60분.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '하이카와 다른 다이렉트 보장 차이?', a: '약관 동일. 사업비·할인 조합 차이로 보험료 미세 차이.' },
      { q: 'Hi-Care 앱과 다른 앱 차이?', a: '청구·진료 추적이 통합. 하이카 자동차 보험과도 연동.' },
      { q: '사고 처리 응대 시간?', a: '평균 30~60분. 도시·지역에 따라 차이.' },
      { q: '실손 청구 간소화는 어떻게?', a: '병원에서 환자 동의 시 직접 전송. 환자는 별도 서류 제출 불필요.' },
      { q: '현대자동차와 보험 묶음 할인?', a: '일부 친환경차 할인 적용. 차량 구매·자동차보험 묶음 별도 확인.' },
      { q: '재무건전성은 어떻게?', a: 'K-ICS 규제 기준 상회. 자세한 수치는 공시실.' },
      { q: '예금자보호 한도?', a: '해약환급금 5,000만원.' },
      { q: '갱신 안내 못 받으면?', a: '만기 30일 전 안내 표준. 본인이 챙겨야. 만기 익일 사고는 무보험.' },
    ]},

    { type: 'sources', items: [
      { label: '현대해상 공시실', url: 'https://www.hi.co.kr', org: '현대해상화재보험', accessedAt: '2026-04-28' },
      { label: '손해보험협회 공시실', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-28' },
      { label: '금감원 FISIS', url: 'https://fisis.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-28' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

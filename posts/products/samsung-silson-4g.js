const post = {
  id: 'P0001',
  sections: [
    { type: 'intro', html: '<p><strong>삼성화재의 4세대 실손의료비보험</strong>은 2021년 7월 이후 판매된 표준 실손 약관을 따릅니다. 급여·비급여를 분리하고 자기부담금을 높였으며, 비급여 특약을 3개로 나눈 구조가 특징입니다.</p><p>이 글은 이 상품의 주계약·특약 구성, 공시 기준 30대 남성 월 보험료 예시, 재가입 조건과 면책사항을 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 이 상품을 판매·모집하지 않습니다. 가입 전 약관·상품설명서를 반드시 확인하세요.</p>' },
    { type: 'toc' },
    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">항목</th><th style="padding:8px;border:1px solid #E5E7EB">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">보험사</td><td style="padding:8px;border:1px solid #E5E7EB">삼성화재</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">상품 유형</td><td style="padding:8px;border:1px solid #E5E7EB">4세대 실손 · 재가입형 15년</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">공시 기준일</td><td style="padding:8px;border:1px solid #E5E7EB">2026-01-01</td></tr></table>' },
    { type: 'h2', id: 'cover', text: '주계약 보장 내용' },
    { type: 'body', html: '<p>급여·비급여 의료비 실손 보상. 자기부담금은 <strong>급여 20%, 비급여 30%</strong>이며, 최소 공제금액은 외래 1~2만원, 응급실 비응급 3만원입니다. 연간 한도 급여 5,000만원 / 비급여 5,000만원 수준이 일반적입니다.</p>' },
    { type: 'h2', id: 'riders', text: '주요 비급여 특약 3종' },
    { type: 'body', html: '<ul><li><strong>도수치료·체외충격파·증식치료</strong> 특약 — 연 350만원·350회 한도</li><li><strong>비급여 주사제</strong> 특약 — 연 250만원·50회 한도</li><li><strong>비급여 MRI/MRA</strong> 특약 — 연 300만원 한도</li></ul>' },
    { type: 'h2', id: 'premium', text: '공시 기준 월 보험료 예시 (30대 남성)' },
    { type: 'body', html: '<p>주계약만 가입 시 대략 <strong>9,000~11,000원</strong>, 3대 비급여 특약 모두 포함 시 <strong>13,000~16,000원</strong> 수준입니다(2026-01-01 공시 기준).</p>' },
    { type: 'warning', title: '면책사항·주의', html: '<ul><li>미용·성형·라식·라섹·비만 관련 시술 면책</li><li>일반 건강검진·예방접종 면책(법정 전염병 치료 제외)</li><li>정신질환 일부 면책(법 개정으로 일부는 급여 보장)</li><li>치과 임플란트·치과 교정 면책</li></ul>' },
    { type: 'h2', id: 'claim', text: '청구 절차 요약' },
    { type: 'body', html: '<p>삼성화재 앱/홈페이지, 다이렉트 고객센터, 팩스·우편 모두 가능. 3만원 이하 소액은 앱 사진 제출로 간소화 가능. 자세한 순서는 <a href="/guides/silson-claim-howto/">실손 청구 가이드</a>를 참조하세요.</p>' },
    { type: 'h2', id: 'similar', text: '비슷한 상품 비교' },
    { type: 'body', html: '<p>동일 세대 다른 보험사 상품과의 비교는 <a href="/compare/silson-2026/">실손의료보험 비교 페이지</a>에서 확인하세요.</p>' },
    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '기존 1세대 실손과 중복 가입되나요?', a: '실손은 1인 1실손 원칙으로 중복 가입이 제한됩니다. 기존 계약 해지 또는 전환 결정이 필요합니다.' },
      { q: '비급여 특약 없이 주계약만 가입해도 되나요?', a: '가능합니다. 비급여 이용이 적다면 주계약만 유지하는 것이 경제적일 수 있습니다.' },
      { q: '갱신 시 보험료가 얼마나 오르나요?', a: '직전 5년 손해율에 따라 변동되며, 개인의 비급여 이용 할증(1~4등급)이 반영됩니다.' },
      { q: '재가입 시점에 가입이 거절될 수도 있나요?', a: '재가입은 계속가입 원칙이지만, 약관은 그 시점의 표준 약관으로 바뀝니다. 보장 범위가 달라질 수 있습니다.' },
      { q: '해외 치료비도 보장되나요?', a: '해외 치료는 보장되지 않으며, 별도 해외여행자보험에서 보장됩니다.' },
    ]},
    { type: 'sources', items: [
      { label: '삼성화재 공시실', url: 'https://www.samsungfire.com', org: '삼성화재', accessedAt: '2026-04-25' },
      { label: '손해보험협회 공시실', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-25' },
    ]},
    { type: 'medDisclaimer' },
  ]
}
module.exports = post

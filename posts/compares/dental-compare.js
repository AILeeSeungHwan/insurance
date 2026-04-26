const post = {
  id: 'M0004',
  sections: [
    { type: 'intro', html: '<p><strong>치아보험은 4대 손해보험사(메리츠화재·DB손해보험·현대해상·KB손해보험)가 시장을 주도</strong>합니다. 보장 항목(보철·보존·예방)은 회사 간 유사하지만 임플란트 1회당 한도, 평생 누적 한도, 면책기간(90/180일), 결손치 인수 기준에서 차이가 큽니다. 또한 면책기간이 끝나는 시점이 90일과 180일로 갈라지는 구조라 실제 보장 시점이 다를 수 있습니다.</p><p>이 글은 4대사 치아보험을 동일 조건(40대 여성·기본 보장)으로 비교한 매트릭스, 임플란트 한도·면책기간·결손치 룰, 보험료 범위(공시 기준일 2026-01-01), 가입 시 반드시 확인할 약관 체크리스트까지 정리합니다. 본 사이트는 보험상품을 판매·모집하지 않습니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 모든 수치는 일반적 범위. 회사별 정확한 한도와 보험료는 공시실에서 직접 확인하세요.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'why', text: '치아보험이 필요한 이유' },
    { type: 'body', html: '<p>치과 치료의 90% 이상이 비급여이며 실손에서 거의 보장되지 않습니다. 임플란트 1개 평균 120~200만원, 풀 마우스 임플란트는 2,000~3,000만원이 들기도 합니다. 50대 이후 자연치 손실 패턴을 고려하면 치아보험은 사실상 유일한 사전 대비 수단입니다.</p>' },

    { type: 'h2', id: 'matrix', text: '4대사 비교 매트릭스 — 40대 여성 기준' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:13px"><tr style="background:#F3F4F6"><th style="padding:6px;border:1px solid #E5E7EB">보험사</th><th style="padding:6px;border:1px solid #E5E7EB">임플란트 1회 한도</th><th style="padding:6px;border:1px solid #E5E7EB">평생 임플란트 한도</th><th style="padding:6px;border:1px solid #E5E7EB">월 보험료</th></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">메리츠화재</td><td style="padding:6px;border:1px solid #E5E7EB">100~200만원</td><td style="padding:6px;border:1px solid #E5E7EB">연 2~3회 / 평생 4~6개</td><td style="padding:6px;border:1px solid #E5E7EB">25,000~38,000원</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">DB손해보험</td><td style="padding:6px;border:1px solid #E5E7EB">100~150만원</td><td style="padding:6px;border:1px solid #E5E7EB">연 2회 / 평생 4~6개</td><td style="padding:6px;border:1px solid #E5E7EB">23,000~36,000원</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">현대해상</td><td style="padding:6px;border:1px solid #E5E7EB">100~200만원</td><td style="padding:6px;border:1px solid #E5E7EB">연 2~3회 / 평생 4~6개</td><td style="padding:6px;border:1px solid #E5E7EB">25,000~38,000원</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">KB손해보험</td><td style="padding:6px;border:1px solid #E5E7EB">100~150만원</td><td style="padding:6px;border:1px solid #E5E7EB">연 2회 / 평생 4~6개</td><td style="padding:6px;border:1px solid #E5E7EB">24,000~37,000원</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">결손치 수에 따라 가입 거절 또는 보험료 가산. 6개 이상 결손치 시 인수 거절 가능.</p>' },

    { type: 'h2', id: 'waiting', text: '면책기간·감액기간 — 회사별 차이' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">시점</th><th style="padding:8px;border:1px solid #E5E7EB">보존</th><th style="padding:8px;border:1px solid #E5E7EB">보철</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">가입~90일</td><td style="padding:8px;border:1px solid #E5E7EB">면책</td><td style="padding:8px;border:1px solid #E5E7EB">면책</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">90~180일</td><td style="padding:8px;border:1px solid #E5E7EB">100% 보장</td><td style="padding:8px;border:1px solid #E5E7EB">면책</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">180일~1년</td><td style="padding:8px;border:1px solid #E5E7EB">100%</td><td style="padding:8px;border:1px solid #E5E7EB">50% 감액</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">2년 이후</td><td style="padding:8px;border:1px solid #E5E7EB">100%</td><td style="padding:8px;border:1px solid #E5E7EB">100%</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">대부분 회사 동일. 일부 상품은 보철 면책 90일·감액 1년으로 짧은 경우도 있어 약관 확인 필수.</p>' },

    { type: 'risk', title: '결손치 인수 룰', html: '<p>가입 전에 빠진 치아·이미 임플란트된 치아 위치는 평생 면책. 정확하게 고지하지 않으면 보장 거절 + 계약 해지. 가입 직전 치과에서 파노라마 X-ray 후 청약서에 정확히 기재 권장.</p>' },

    { type: 'h2', id: 'check', text: '약관 체크리스트' },
    { type: 'body', html: '<ol><li>임플란트 1회 한도 (100만 vs 150만 vs 200만)</li><li>임플란트 평생 누적 한도 (4개 vs 6개 vs 8개)</li><li>면책기간·감액기간 구조</li><li>결손치 고지 후 가입 인수 결과</li><li>크라운·인레이 한도</li><li>치주 치료(잇몸 치료) 보장 여부</li><li>스케일링·예방 치료 횟수</li><li>갱신 시 보험료 인상폭</li><li>외상 치아 손실 별도 보장 여부</li></ol>' },

    { type: 'h2', id: 'choose', text: '선택 시 우선순위' },
    { type: 'body', html: '<ol><li>30대 후반~40대 초반에 미리 가입 — 면책기간 부담 줄이기</li><li>본인의 결손치 상태 점검 후 가입 가능 회사 우선</li><li>임플란트 평생 6개 이상 한도 우선 (장기 보장)</li><li>크라운·인레이 한도가 합리적인 회사</li><li>갱신 시 보험료 인상이 안정적인 회사 (직전 손해율 참조)</li></ol>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '치아보험 없이 실손만 있으면 어떻게 되나요?', a: '치과 비급여는 실손에서 거의 보장 안 됨. 치아보험이 사실상 유일한 사전 대비 수단.' },
      { q: '이미 충치가 여러 개 있는데 가입 가능한가요?', a: '가입 자체는 가능. 다만 해당 치아는 면책 가능성. 정확한 고지 필수.' },
      { q: '교정도 보장되나요?', a: '미용 목적은 면책. 부정교합 등 의학적 사유는 일부 상품 보장.' },
      { q: '갱신 시 보험료가 얼마나 오르나요?', a: '직전 10년 손해율에 따라 30~80% 인상이 일반적.' },
      { q: '임플란트 1개당 시술비가 200만원인데 한도 100만원이면 어떻게 되나요?', a: '한도 내에서만 보상. 100만원 한도면 100만원만 지급.' },
      { q: '치아보험 중복 가입 가능한가요?', a: '가능하지만 보험사 간 비례보상 또는 한도 분담. 두 배 받지 못함.' },
      { q: '60대 이후 신규 가입은 의미 있나요?', a: '보험료 대비 효용이 떨어짐. 가입 가능 여부도 인수 심사 강화.' },
      { q: '치아보험 청구 서류는?', a: '진단서·시술확인서·진료비 영수증·세부내역서·시술부위 X-ray.' },
    ]},

    { type: 'sources', items: [
      { label: '금감원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '손해보험협회 공시실', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

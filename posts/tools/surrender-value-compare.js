const post = {
  id: 'T0007',
  calculator: 'surrender-value-compare',
  sections: [
    { type: 'intro', html: '<p><strong>해지환급금 vs 납입보험료 계산기는 보험 상품 유형·납입 기간·월 보험료를 입력하면 해지 시 예상 손실액과 해지환급률을 추정</strong>합니다. 보험을 중도 해지할 경우 납입한 보험료 대비 얼마나 돌려받을 수 있는지 파악하는 데 활용됩니다.</p><p>대부분의 보험 상품은 초기(5년 미만) 해지 시 납입액의 대부분을 잃습니다. 이는 초기 사업비(모집·유지비)가 납입 보험료에서 먼저 차감되는 구조이기 때문입니다. 해지 전 반드시 본 계산기로 손실 규모를 파악하세요.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 계산 결과는 추정치입니다. 정확한 해지환급금은 가입 보험사에 직접 문의하세요.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'how', text: '계산기 사용법' },
    { type: 'body', html: '<ol><li><strong>상품 유형</strong> 선택 — 순수보장 갱신형 / 비갱신 저해지형 / 비갱신 일반형 / 저축성 종신보험 4가지 중 선택</li><li><strong>납입 기간</strong> 입력 — 현재까지 납입한 기간 (개월 또는 연 단위)</li><li><strong>월 보험료</strong> 입력 — 실제 납입하고 있는 월 보험료</li></ol><p>입력 후 예상 해지환급금, 해지환급률, 손실액이 표시됩니다.</p>' },

    { type: 'h2', id: 'logic', text: '계산 원리' },
    { type: 'body', html: '<p>본 계산기는 상품 유형별 일반적 해지환급률 범위를 기반으로 추정합니다:</p><p style="background:#F8FAFC;border:1px solid #E5E7EB;border-radius:8px;padding:12px"><code>해지환급금 = 총 납입보험료 × 해지환급률(상품유형·납입기간 기준)</code></p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">상품 유형</th><th style="padding:8px;border:1px solid #E5E7EB">5년</th><th style="padding:8px;border:1px solid #E5E7EB">10년</th><th style="padding:8px;border:1px solid #E5E7EB">20년</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #E5E7EB">순수보장 갱신형</td><td style="padding:8px;border:1px solid #E5E7EB">0~5%</td><td style="padding:8px;border:1px solid #E5E7EB">5~15%</td><td style="padding:8px;border:1px solid #E5E7EB">10~20%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">비갱신 저해지형</td><td style="padding:8px;border:1px solid #E5E7EB">15~30%</td><td style="padding:8px;border:1px solid #E5E7EB">40~55%</td><td style="padding:8px;border:1px solid #E5E7EB">80~90%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">비갱신 일반형</td><td style="padding:8px;border:1px solid #E5E7EB">30~50%</td><td style="padding:8px;border:1px solid #E5E7EB">65~80%</td><td style="padding:8px;border:1px solid #E5E7EB">88~95%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">저축성 종신보험</td><td style="padding:8px;border:1px solid #E5E7EB">50~65%</td><td style="padding:8px;border:1px solid #E5E7EB">72~82%</td><td style="padding:8px;border:1px solid #E5E7EB">90~100%</td></tr></tbody></table><p style="margin-top:8px;font-size:13px;color:#888">위 수치는 보험사별, 상품별로 다르며 실제 해지환급금은 사업비율·이율에 따라 범위 내에서 변동합니다.</p>' },

    { type: 'h2', id: 'interpret', text: '결과 해석하기' },
    { type: 'body', html: '<p>해지환급률 기준 판단:</p><ul><li><strong>50% 미만</strong>: 납입액의 절반 이상 손실. 해지보다 유지(또는 감액완납) 가능 여부 먼저 확인 권장.</li><li><strong>50~80%</strong>: 상당한 손실. 해지 이유가 명확하고 새 보험이 기존보다 훨씬 유리한 경우만 해지 검토.</li><li><strong>80% 이상</strong>: 손실이 어느 정도 회수된 시점. 해지 결정이 상대적으로 덜 손해.</li></ul><p>해지 대안 — 해지 전 반드시 확인할 옵션:</p><ul><li><strong>감액완납</strong>: 이후 보험료 납입 없이 보장 축소된 채 유지</li><li><strong>보험료 납입 유예</strong>: 일시적 납입 중단 후 나중에 재납입 (계약별 상이)</li><li><strong>계약 대출</strong>: 해지환급금 범위 내 대출로 급전 마련 후 유지</li></ul>' },

    { type: 'h2', id: 'limits', text: '한계와 유의사항' },
    { type: 'warning', title: '해지 후 재가입 시 조건이 불리해질 수 있습니다', html: '<p>다음 사항을 반드시 확인하세요:</p><ul><li>나이 증가 — 재가입 시 보험료가 더 높아짐</li><li>건강 상태 변화 — 기존 가입 당시에는 없던 질환이 생겨 부담보 또는 인수 거절 가능</li><li>보험개발원 등급 변경 — 유리한 상품이 이미 단종된 경우</li><li>변액보험의 경우 — 해지 손실액이 투자 손실과 합산되어 더 클 수 있음</li></ul>' },

    { type: 'h2', id: 'misuse', text: '흔한 오해' },
    { type: 'body', html: '<ul><li><strong>"저해지형은 무조건 불리하다"</strong> — 저해지형은 보험료가 일반형 대비 40~50% 저렴. 만기까지 유지할 계획이라면 오히려 유리할 수 있습니다.</li><li><strong>"환급률 100%가 넘으면 이득"</strong> — 환급률은 명목 납입액 기준. 물가 상승분을 감안하면 실질 수익률은 이보다 낮습니다.</li><li><strong>"해지하고 새 보험 가입하면 똑같다"</strong> — 나이 증가+건강 상태 변화로 보험료가 오르거나 가입 자체가 거절될 수 있습니다.</li><li><strong>"계약 대출은 공짜 돈"</strong> — 계약 대출에는 연 4~7%대 이자가 붙습니다. 이자가 쌓이면 해지환급금을 초과해 계약이 실효될 수 있습니다.</li></ul>' },

    { type: 'h2', id: 'howto-use', text: '실제 활용 시나리오' },
    { type: 'body', html: '<ol><li><strong>해지 고민 전 손실 규모 확인</strong> — 현재 납입 기간·상품 유형 입력 → 해지 시 실제 손실액 파악 → 유지 vs 해지 의사결정</li><li><strong>신규 가입 시 상품 유형 비교</strong> — 저해지형 vs 일반형 장기 비용·환급금 비교 후 본인 상황에 맞는 유형 선택</li><li><strong>감액완납 효과 추정</strong> — 납입 기간별 환급률 확인 후 감액완납 전환 시점 파악</li><li><strong>상속 목적 종신보험 유지 여부</strong> — 해지환급금이 사망보험금 대비 낮으면 유지가 유리한 경우</li></ol><p>관련 가이드: <a href="/guides/insurance-refund-howto/">보험 해지환급금 완전 가이드</a>.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '저해지형과 일반형의 차이는?', a: '저해지형은 납입 기간 중 해지환급금이 일반형보다 낮은 대신 보험료가 40~50% 저렴. 만기까지 유지할 계획이면 유리하고, 중도 해지 가능성이 있으면 일반형이 안전합니다.' },
      { q: '해지환급금이 없는 상품은 왜 가입하나요?', a: '순수보장형은 해지환급금이 거의 없는 대신 보험료가 매우 저렴. 위험 보장만 원하고 저축 기능이 필요 없는 경우 합리적 선택입니다.' },
      { q: '감액완납이란?', a: '이후 보험료 납입 없이 보장 금액을 줄이는 대신 보험 계약을 유지하는 방식. 보험료 부담은 없어지지만 사망 보험금·보장 금액이 감소합니다.' },
      { q: '변액보험은 언제 해지하는 것이 좋나요?', a: '변액보험은 투자 성과가 반영되므로 주식 시장 호황기에 해지하면 손실이 덜합니다. 단, 최저보증이 있는 상품은 일정 기간 이후 해지가 유리합니다.' },
      { q: '보험료 연체 시 계약이 바로 실효되나요?', a: '통상 2~3회(약 2개월) 연체 후 효력 상실. 실효 후 3년 이내 밀린 보험료+이자를 납입하면 부활 신청 가능합니다.' },
      { q: '상속 목적 종신보험을 해지하면 손해인가요?', a: '상속 목적이라면 해지환급금보다 사망보험금이 훨씬 크므로 대부분 유지가 유리합니다. 건강 악화 후 해지하면 재가입이 불가능할 수 있습니다.' },
      { q: '해지 후 같은 보험에 다시 가입할 수 있나요?', a: '동일 상품 재가입은 가능하지만, 나이 증가로 보험료가 오르고 건강 상태 변화로 부담보 조건이 붙거나 인수 거절될 수 있습니다.' },
    ]},

    { type: 'sources', items: [
      { label: '생명보험협회 공시실', url: 'https://www.klia.or.kr', org: '생명보험협회', accessedAt: '2026-04-28' },
      { label: '금융감독원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-28' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

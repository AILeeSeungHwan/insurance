const post = {
  id: 'K0010',
  sections: [
    { type: 'intro', html: '<p><strong>정기보험은 보장기간을 정해두고 그 기간 내 사망하면 보험금을 지급하는 가장 단순하고 저렴한 사망보험</strong>입니다. 30년 만기 정기보험에 가입했다가 만기 전 사망하면 보험금을 받고, 만기까지 살면 보험금은 없습니다. 그 대신 보험료가 종신보험의 1/3~1/5 수준입니다.</p><p>부양가족을 책임지는 30~40대에게 가장 효율적인 사망 대비 수단입니다. 자녀가 성인이 되거나 충분한 자산이 쌓이는 시점까지의 한시적 보장이 목적이라면, 종신보험보다 정기보험이 합리적인 경우가 많습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'structure', text: '정기보험 구조 — 보장기간과 보험료 납입방식' },
    { type: 'body', html: '<p>정기보험의 핵심 설계 변수:</p><ul><li><strong>보장기간</strong>: 10년·20년·30년·60세·65세·70세·80세 만기 선택. 막내 자녀 독립 예상 시점 + 5~10년 여유를 보장기간으로 설정하는 방식이 일반적.</li><li><strong>갱신형 vs 비갱신형</strong>: 갱신형은 초기 보험료가 낮지만 10년마다 재산출(나이 들수록 급등). 비갱신형은 가입 시 보험료가 고정. 30대 가입 기준 20년 비갱신형이 장기 총보험료 측면에서 유리한 경우 많음.</li><li><strong>사망보험금 규모</strong>: 가계 연 소득 × (자녀 독립까지 남은 연수) 기준이 통상적 산정 방법. 예: 연 소득 4,000만원 × 20년 = 8억원 → 실제로는 주택담보대출·생활비 등을 더해 1~3억원 수준 설계가 일반적.</li></ul>' },

    { type: 'h2', id: 'vs', text: '정기보험 vs 종신보험 — 같은 보험금에서 보험료 비교' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">항목</th><th style="padding:8px;border:1px solid #E5E7EB">정기보험</th><th style="padding:8px;border:1px solid #E5E7EB">종신보험</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #E5E7EB">사망보험금</td><td style="padding:8px;border:1px solid #E5E7EB">1억원</td><td style="padding:8px;border:1px solid #E5E7EB">1억원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">월 보험료 (30대 남성, 20년 납 비갱신 기준)</td><td style="padding:8px;border:1px solid #E5E7EB"><strong>약 15,000~25,000원</strong></td><td style="padding:8px;border:1px solid #E5E7EB">약 120,000~160,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">20년 총 납입 보험료</td><td style="padding:8px;border:1px solid #E5E7EB">약 360~600만원</td><td style="padding:8px;border:1px solid #E5E7EB">약 2,880~3,840만원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">만기 후 해지환급금</td><td style="padding:8px;border:1px solid #E5E7EB">없음 또는 매우 소액</td><td style="padding:8px;border:1px solid #E5E7EB">납입액의 80~100% 수준</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">만기 생존 시 실질 비용</td><td style="padding:8px;border:1px solid #E5E7EB">납입 전액 손실(20년 보장 구매비용)</td><td style="padding:8px;border:1px solid #E5E7EB">기회비용 손실(투자 대비)</td></tr></tbody></table><p style="font-size:12px;color:#6B7280;margin:8px 0 0">공시 기준 추정 예시. 실제 보험료는 보험사·특약·건강상태에 따라 다름.</p>' },

    { type: 'h2', id: 'criteria', text: '정기보험 선택 기준 5가지' },
    { type: 'body', html: '<ol><li><strong>보장기간 = 책임 종료 시점까지</strong>: 막내 자녀 대학 졸업 예상 연도 + 자신의 현재 나이로 역산. 예: 현재 35세, 막내 3세 → 막내 23세까지 = 20년 만기.</li><li><strong>비갱신형 우선 검토</strong>: 갱신형은 5~10년 후 보험료 재산출로 급등 가능. 30대 초반에 20년 비갱신형으로 고정하는 것이 장기 안정적.</li><li><strong>사망보험금 산정</strong>: 연 소득 × 자녀 독립까지 연수 = 이론적 필요액. 현실적으로 1~3억원이 일반적 선택 구간.</li><li><strong>특약 최소화</strong>: 정기보험에 건강 특약을 붙이면 보험료가 종신 수준으로 올라갑니다. 특약은 별도 상품으로 분리하는 것이 비용 효율적.</li><li><strong>재무 여력 변화 대비</strong>: 소득 변동이 예상된다면 여러 개 소액 정기보험으로 분산 가입(필요 없을 때 일부 해지 가능)하는 방식도 있습니다.</li></ol>' },

    { type: 'h2', id: 'when', text: '정기보험이 필요한 순간과 필요 없는 순간' },
    { type: 'body', html: '<p><strong>정기보험이 가장 중요한 상황:</strong></p><ul><li>결혼 직후 — 배우자가 소득에 의존하는 구조</li><li>자녀 출생 직후 — 양육비·교육비 책임 발생 시점</li><li>주택담보대출 실행 시 — 대출 잔액 이상 보험금 설정으로 유족 부채 방지</li><li>자영업 개업 시 — 사업 채무 대비</li></ul><p><strong>정기보험이 상대적으로 덜 중요한 상황:</strong></p><ul><li>자녀가 이미 독립한 경우</li><li>충분한 금융자산이 있어 유족 생계가 독립적으로 가능한 경우</li><li>부양가족이 없는 독신</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '정기보험은 만기 후 보험금이 없으면 손해 아닌가요?', a: '보험은 미래의 위험을 구매하는 상품입니다. 만기까지 살았다는 것 자체가 좋은 결과입니다. 20년간 월 2만원을 냈다면 4,800만원이지만, 그 기간 사망했을 때 가족이 받는 1억~3억원을 생각하면 위험 대비 비용으로는 합리적입니다.' },
      { q: '정기보험 갱신형과 비갱신형 중 어느 것이 유리한가요?', a: '20년 이상 장기 보장 목적이라면 비갱신형이 유리한 경우가 많습니다. 갱신형은 10년마다 재산출 시 나이가 들수록 보험료가 급등합니다. 30대에 비갱신형으로 보험료를 고정하면 50대에도 동일 보험료가 유지됩니다.' },
      { q: '사망보험금 얼마가 적당한가요?', a: '통상 연 소득 × 부양 기간(년)이 이론적 기준입니다. 현실적으로는 주택담보대출 잔액 + 자녀 교육비 + 3~5년치 생활비 합산을 기준으로 삼는 경우가 많습니다. 1억~3억원이 30~40대 일반 직장인의 주 선택 구간입니다.' },
      { q: '정기보험은 어느 나이에 가입하는 게 유리한가요?', a: '보험료는 나이가 어릴수록 낮습니다. 부양가족이 생기는 시점(결혼·출산)에 맞춰 가입하는 것이 가장 일반적입니다. 단, 30대 후반을 넘기면 비갱신형 20년 납의 경우 보험료가 눈에 띄게 올라갑니다.' },
      { q: '정기보험과 종신보험을 동시에 가입할 필요가 있나요?', a: '재무 여력이 충분하다면 정기(소득 대체 목적) + 종신(상속 재원 목적)을 나눠 가입하는 것이 목적 분리 측면에서 명확합니다. 여력이 제한적이라면 정기보험을 먼저 충분히 가입하는 것이 우선입니다.' },
      { q: '정기보험 보험금 수령 후 재가입이 가능한가요?', a: '피보험자가 사망하면 계약이 종료됩니다. 수익자(유족)가 다른 사람의 정기보험 계약자가 되는 것은 가능합니다. 단, 계약자·피보험자·수익자 설정에 따라 상속세·증여세 문제가 생길 수 있으므로 구조 확인이 필요합니다.' },
      { q: '직장인 단체보험이 있으면 정기보험이 필요 없나요?', a: '직장 단체보험은 퇴직 시 소멸됩니다. 이직·퇴직 후에도 보장을 유지하려면 개인 정기보험이 필요합니다. 단체보험이 있는 기간에는 개인 보험금 규모를 줄이고, 퇴직 예상 시점에 증액하는 방식도 있습니다.' },
      { q: '건강 고지가 걱정되는데 정기보험 가입이 어렵지 않나요?', a: '정기보험은 건강 고지 심사가 있습니다. 고혈압·당뇨 등 기저 질환이 있으면 할증·부담보 조건이 붙거나 거절될 수 있습니다. 건강 상태가 좋은 30대 초반에 먼저 가입해두는 것이 유리합니다.' },
    ]},

    { type: 'sources', items: [
      { label: '생명보험협회 공시실 — 정기보험 상품 비교', url: 'https://www.klia.or.kr', org: '생명보험협회', accessedAt: '2026-05-14' },
      { label: '금융감독원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-05-14' },
    ]},
    { type: 'medDisclaimer' },
  ]
}
module.exports = post

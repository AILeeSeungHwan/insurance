const post = {
  id: 'K0011',
  sections: [
    { type: 'intro', html: '<p><strong>간병보험(LTC·장기요양보험)은 노화·질병·사고로 스스로 일상생활을 수행하기 어려운 상태가 됐을 때 간병비를 보장하는 보험</strong>입니다. 국가가 운영하는 노인장기요양보험(건강보험공단)이 있지만, 등급 기준이 까다롭고 지원 상한이 낮아 실제 간병비의 상당 부분이 본인 부담입니다.</p><p>2026년 기준 요양원 월 비용은 지역별로 150만~300만원 수준이며, 재가 요양도 주 5회 기준 월 80만~150만원입니다. 고령화가 빨라지면서 간병보험은 60세 이상의 필수 보험으로 빠르게 자리 잡고 있습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'ltc-grade', text: '노인장기요양등급 — 국가 지원과 본인 부담' },
    { type: 'body', html: '<p>국민건강보험공단이 판정하는 장기요양등급(1~5등급 + 인지지원등급):</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">등급</th><th style="padding:8px;border:1px solid #E5E7EB">기준</th><th style="padding:8px;border:1px solid #E5E7EB">주요 급여</th><th style="padding:8px;border:1px solid #E5E7EB">본인부담율</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #E5E7EB">1등급</td><td style="padding:8px;border:1px solid #E5E7EB">최중증 (95점 이상)</td><td style="padding:8px;border:1px solid #E5E7EB">시설·재가 급여 최대</td><td style="padding:8px;border:1px solid #E5E7EB">시설 15~20%, 재가 15%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">2등급</td><td style="padding:8px;border:1px solid #E5E7EB">중증 (75~94점)</td><td style="padding:8px;border:1px solid #E5E7EB">시설·재가 급여</td><td style="padding:8px;border:1px solid #E5E7EB">동일</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">3등급</td><td style="padding:8px;border:1px solid #E5E7EB">중등도 (60~74점)</td><td style="padding:8px;border:1px solid #E5E7EB">재가 급여 중심</td><td style="padding:8px;border:1px solid #E5E7EB">동일</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">4등급</td><td style="padding:8px;border:1px solid #E5E7EB">경증 (51~59점)</td><td style="padding:8px;border:1px solid #E5E7EB">재가 급여 한정</td><td style="padding:8px;border:1px solid #E5E7EB">동일</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">5등급</td><td style="padding:8px;border:1px solid #E5E7EB">치매 특별 (45점 이상)</td><td style="padding:8px;border:1px solid #E5E7EB">치매 전용 급여</td><td style="padding:8px;border:1px solid #E5E7EB">동일</td></tr></tbody></table><p style="margin-top:8px">국가 급여 한도는 1등급 시설 기준 월 약 200만원 내외이며, 이를 초과하는 비용은 전액 본인 부담입니다. 서울 요양원은 월 250만~350만원이 일반적이므로 실제 자기부담이 큽니다.</p>' },

    { type: 'h2', id: 'vs-dementia', text: '간병보험 vs 치매보험 — 중복 가입이 필요한가' },
    { type: 'body', html: '<p>많이 혼동하는 두 상품의 차이:</p><ul><li><strong>간병보험(LTC)</strong>: 장기요양등급(1~2등급 또는 1~4등급) 판정 시 보험금 지급. 치매·뇌졸중·골절 등 다양한 원인의 요양 상태 보장. 넓은 보장 범위.</li><li><strong>치매보험</strong>: 치매 진단(경도·중등도·중증 구분) 시 진단비 지급. 치매에 특화된 상품. 장기요양등급과 별개로 지급되는 경우 많음.</li></ul><p>두 상품은 보장 트리거가 다르므로 중복 가입 효과가 있습니다. 단, 보험료 부담 측면에서 우선순위를 정해야 합니다:</p><ul><li>60세 이하 — 간병보험 선 가입 (폭넓은 보장)</li><li>65세 이상 — 치매보험 별도 추가 검토 (치매 리스크 급증)</li></ul>' },
    { type: 'info', title: '간병보험 지급 구조 주의', html: '<p>상품에 따라 ① 장기요양등급 1~2등급만 보장 vs ② 1~4등급 보장 vs ③ 일상생활장해 기준 보장 방식이 다릅니다. 보장 범위가 넓을수록 보험료가 높습니다. 반드시 지급 요건을 사전에 확인하세요.</p>' },

    { type: 'h2', id: 'cost', text: '실제 간병비 규모와 필요 보장액 계산' },
    { type: 'body', html: '<p>2026년 기준 실제 간병 비용 (지역별 편차 있음):</p><ul><li><strong>요양원(시설 입소)</strong>: 월 180만~300만원. 이 중 국가 급여 차감 후 본인 부담 60만~150만원.</li><li><strong>재가 요양</strong>: 주 5회 기준 국가 급여 후 본인 부담 월 30만~80만원.</li><li><strong>전문 간병인(24시간)</strong>: 월 280만~400만원 전액 본인 부담.</li></ul><p>평균 간병 기간은 2~3년이지만, 치매·뇌졸중 중증은 5~10년 이상입니다. 최소 3~5년치 간병 비용(150만원×36개월 = 5,400만원)을 기준으로 필요 보험금을 설정하는 것이 일반적입니다.</p>' },

    { type: 'h2', id: 'criteria', text: '간병보험 가입 시 체크포인트' },
    { type: 'body', html: '<ul><li><strong>보장 개시 연령과 납입 기간</strong>: 50세 이후 가입 시 보험료가 급등합니다. 40대에 비갱신형으로 미리 가입해 보험료를 고정하는 전략이 비용 효율적입니다.</li><li><strong>갱신형 vs 비갱신형</strong>: 간병보험도 갱신형은 장기적으로 보험료가 급등합니다. 비갱신형 권장.</li><li><strong>보장 요건 확인</strong>: 1~2등급 한정 vs 1~4등급 vs ADL(일상생활동작) 기준 — 넓은 요건일수록 좋습니다.</li><li><strong>현금 지급형 vs 서비스 연계형</strong>: 대부분 현금 지급형. 서비스 연계형은 지정 기관만 이용 가능한 제한 있음.</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '간병보험은 몇 살에 가입하는 게 좋나요?', a: '보험료 측면에서는 40대 초반이 가장 효율적입니다. 50세 이후에는 보험료가 크게 오르고, 60세 이후에는 가입 자체가 어렵거나 조건이 까다로워집니다. 부모님이 60세 이상이라면 유병자 전용 간병보험을 검토해야 합니다.' },
      { q: '노인장기요양보험이 있으면 별도 간병보험이 필요 없지 않나요?', a: '국가 장기요양보험은 등급 기준이 엄격하고, 지원 한도가 실제 간병비에 미치지 못하는 경우가 많습니다. 서울 기준 요양원 본인 부담 월 60만~150만원은 추가 보험으로 대비해야 합니다.' },
      { q: '장기요양 1~2등급 판정이 어렵다는데, 실제로 보험금 받기 힘드나요?', a: '1~2등급은 중증 이상으로 판정이 까다롭습니다. 1~4등급 또는 ADL 기준으로 지급하는 상품이 보장 범위가 넓어 보험금 수령 가능성이 높습니다. 가입 시 지급 요건을 반드시 확인하세요.' },
      { q: '치매와 간병보험을 둘 다 가입해야 하나요?', a: '치매보험은 치매 진단에 특화되고, 간병보험은 장기요양등급 전반을 커버합니다. 예산이 충분하면 둘 다 가입하는 게 좋지만, 우선순위는 간병보험 > 치매보험 순입니다. 두 보험의 지급 트리거가 다르므로 중복 수령도 가능합니다.' },
      { q: '부모님(70세)께 간병보험을 들어드릴 수 있나요?', a: '70세 이상은 일반 간병보험 가입이 어렵거나 조건이 까다로울 수 있습니다. 유병자 전용 무심사 또는 간편심사 간병보험을 검토하되, 보험료가 매우 높을 수 있습니다.' },
      { q: '재가 요양과 시설 요양 모두 보장되나요?', a: '대부분의 간병보험은 시설·재가 구분 없이 장기요양등급 판정 시 보험금을 지급합니다. 단, 일부 상품은 시설 입소(요양원) 시에만 지급하는 경우도 있으니 약관 확인이 필요합니다.' },
      { q: '간병보험 해지 시 환급금이 있나요?', a: '비갱신 저해지환급형은 납입 중 환급금이 거의 없고, 납입 완료 후 일정 수준의 환급이 있습니다. 일반형은 중도 해지 시 납입보험료 대비 손실이 큽니다. 보험료 부담 시 해지보다 감액납입·납입 유예를 먼저 검토하세요.' },
      { q: '간병보험 보험금은 일시금인가요, 월 지급인가요?', a: '상품에 따라 다릅니다. ① 일시금 (진단·등급 판정 시 한 번에 지급) ② 연금형 (매월 일정액 지급) ③ 두 가지 혼합형이 있습니다. 실제 간병 기간에 걸쳐 비용이 발생하므로 연금형(월 지급)이 현실적인 경우가 많습니다.' },
    ]},

    { type: 'sources', items: [
      { label: '국민건강보험공단 — 노인장기요양보험 등급판정 기준', url: 'https://www.nhis.or.kr', org: '국민건강보험공단', accessedAt: '2026-05-14' },
      { label: '금융감독원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-05-14' },
    ]},
    { type: 'medDisclaimer' },
  ]
}
module.exports = post

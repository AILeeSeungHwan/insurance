const post = {
  id: 'G0005',
  sections: [
    { type: 'intro', html: '<p><strong>해지환급금이 납입 보험료보다 적은 이유</strong>는 보험사가 사업비·위험률을 미리 차감하기 때문입니다. 가입 초기에는 사업비 비중이 크게 떨어지지 않아 해지하면 큰 손실이 발생합니다. "보험은 평균 5~7년 안에 해지하면 손해"라는 통념은 여기서 나옵니다.</p><p>이 글은 표준형·저해지환급형·무해지환급형의 차이, 환급률이 결정되는 구조, 해지 시 실제 손실 계산, 보험계약대출(약관대출) 활용으로 해지를 피하는 방법까지 실전 정보로 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 모든 환급률은 약관에 명시. 본 가이드는 일반적 설명이며 본인 계약은 약관·상품설명서 확인 필수.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'why-low', text: '왜 환급금이 적은가 — 사업비 구조' },
    { type: 'body', html: '<p>보험료에는 다음 비용이 포함됩니다.</p><ul><li><strong>순보험료</strong> — 보험금 지급 재원 (실제 보장 비용)</li><li><strong>사업비</strong> — 모집 수수료·운영비·인건비 (보험료의 5~25%)</li><li><strong>예정이율</strong> — 적립금 운용 수익률 (저금리 시 낮음)</li></ul><p>사업비는 가입 초기 1~3년에 집중 차감됩니다. 따라서 가입 후 1년 이내 해지하면 환급금이 거의 0이거나 매우 적습니다.</p>' },

    { type: 'h2', id: 'types', text: '환급형 3종 — 표준 vs 저해지 vs 무해지' },
    { type: 'body', html: '<h3>① 표준형 (일반)</h3><ul><li>해지 시 시점별 환급률에 따라 지급</li><li>10년 시점: 납입의 50~70%</li><li>20년 시점: 납입의 80~95%</li><li>만기: 납입 보험료 환급 (또는 그 이하)</li></ul><h3>② 저해지환급형</h3><ul><li>해지 시 환급률을 낮추는 대신 보험료를 30~40% 할인</li><li>10년 시점: 납입의 30~50%만 환급</li><li>만기 도달 시: 100% 환급 또는 보장 유지</li><li>중도 해지 시 손실이 표준형보다 큼</li></ul><h3>③ 무해지환급형 (2021년 이후 판매 제한)</h3><ul><li>해지 시 환급금 0원</li><li>보험료가 표준형의 50% 수준</li><li>금감원 권고로 신규 판매 제한적</li></ul>' },

    { type: 'h2', id: 'simulation', text: '실제 환급률 시뮬레이션 — 종신보험 가입금액 1억' },
    { type: 'body', html: '<p>30대 남성·종신보험 1억·20년 납·표준형 기준 (예시):</p><table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">해지 시점</th><th style="padding:8px;border:1px solid #E5E7EB">누적 납입</th><th style="padding:8px;border:1px solid #E5E7EB">환급금</th><th style="padding:8px;border:1px solid #E5E7EB">환급률</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">1년</td><td style="padding:8px;border:1px solid #E5E7EB">300만원</td><td style="padding:8px;border:1px solid #E5E7EB">0~50만</td><td style="padding:8px;border:1px solid #E5E7EB">~17%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">3년</td><td style="padding:8px;border:1px solid #E5E7EB">900만원</td><td style="padding:8px;border:1px solid #E5E7EB">200~400만</td><td style="padding:8px;border:1px solid #E5E7EB">~44%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">5년</td><td style="padding:8px;border:1px solid #E5E7EB">1,500만원</td><td style="padding:8px;border:1px solid #E5E7EB">600~900만</td><td style="padding:8px;border:1px solid #E5E7EB">~60%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">10년</td><td style="padding:8px;border:1px solid #E5E7EB">3,000만원</td><td style="padding:8px;border:1px solid #E5E7EB">2,000~2,400만</td><td style="padding:8px;border:1px solid #E5E7EB">~80%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">20년 (만기)</td><td style="padding:8px;border:1px solid #E5E7EB">6,000만원</td><td style="padding:8px;border:1px solid #E5E7EB">5,500~6,200만</td><td style="padding:8px;border:1px solid #E5E7EB">~95~103%</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">실제 환급률은 상품·공시이율·사업비 구조에 따라 달라짐. 약관에 명시.</p>' },

    { type: 'h2', id: 'avoid', text: '해지를 피하는 대안 — 보험계약대출 (약관대출)' },
    { type: 'body', html: '<p>해지 손실이 너무 클 때 활용할 수 있는 대안.</p><ul><li><strong>약관대출 한도</strong>: 해지환급금의 50~95%</li><li><strong>금리</strong>: 공시이율 + 가산금리 (보통 4~7%)</li><li><strong>장점</strong>: 보장은 그대로 유지, 신용평가 영향 없음</li><li><strong>단점</strong>: 이자 발생, 미상환 시 환급금에서 차감</li></ul><p>일시적 자금 필요 시 해지보다 약관대출이 유리한 경우 많음.</p>' },

    { type: 'h2', id: 'partial', text: '감액 / 보험료 납입 일시 중지' },
    { type: 'body', html: '<h3>감액 청구</h3><p>가입금액(보장 한도)을 줄여 보험료를 낮추는 방법. 보장은 줄지만 계약은 유지. 보장 1억 → 5천만원 감액 → 보험료 절반.</p><h3>실효(보험료 납입 일시 중지)</h3><p>일시적 납입 어려움 시 2~6개월 납입 일시중지 가능 (보험사별 약관). 실효 후 보험료 납입 재개로 보장 회복 가능.</p>' },

    { type: 'h2', id: 'when-cancel', text: '언제 해지가 합리적인가' },
    { type: 'body', html: '<ul><li>중복 가입 (실손 2개) — 1개 해지가 합리적</li><li>가입 후 보장 의미 없는 상품 (잘못 권유받은 경우)</li><li>건강 상태 악화로 보험료 급등이 예상되며 다른 보험으로 대체 가능</li><li>10년 이상 유지로 환급률이 80% 이상 도달한 경우</li></ul>' },

    { type: 'h2', id: 'mistakes', text: '자주 하는 실수' },
    { type: 'body', html: '<ul><li>"보험료가 부담스러워 즉시 해지" — 약관대출·감액·실효 검토 안 함</li><li>"무해지로 가입하면 더 저렴하다" — 중도 해지 시 0원 회수</li><li>"5년 만 채우면 원금 받는다" — 10~20년 유지해야 80~100% 도달</li><li>"해지 후 다시 가입" — 면책기간·연령 가산으로 보험료 더 비싸짐</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '5년 안에 해지하면 정말 50% 손해인가요?', a: '상품·납입기간·납입형(저해지·무해지)에 따라. 표준형 5년 해지 시 60%, 저해지는 30%, 무해지는 0% 수준.' },
      { q: '해지환급금에 세금이 붙나요?', a: '저축성 보험은 10년 미만 해지 시 이자소득세. 보장성 보험은 비과세.' },
      { q: '약관대출은 어떻게 받나요?', a: '보험사 앱·콜센터·영업점에서 신청. 본인 인증만 거치면 즉시 가능.' },
      { q: '실효된 계약을 부활시킬 수 있나요?', a: '실효 후 일정 기간(2~3년) 내 보험료 납입 + 부활청약서 제출. 다만 건강고지 의무 다시 부과될 수 있음.' },
      { q: '저축성 보험 10년 유지하면 비과세인가요?', a: '월적립액 150만원 이하·일시납 1억 이하 등 조건 충족 시. 그 외는 이자소득세.' },
      { q: '감액 청구 후 다시 늘릴 수 있나요?', a: '대부분 불가. 감액은 일방향. 신중히 결정.' },
      { q: '환급금이 약관 표보다 적게 나왔어요.', a: '공시이율 변동·중도 인출 등 영향. 보험사에 산정 내역서 요청 가능.' },
      { q: '해지보다 약관대출이 항상 유리한가요?', a: '단기 자금 필요 시 유리. 장기적으로 보험 자체가 무가치하면 해지가 합리적.' },
    ]},

    { type: 'sources', items: [
      { label: '금감원 보험계약 해지·환급금 안내', url: 'https://www.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '보험업감독규정 — 환급금 산정', url: 'https://www.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '생명보험협회 공시실', url: 'https://www.klia.or.kr', org: '생명보험협회', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

const post = {
  id: 'H0002',
  sections: [
    { type: 'intro', html: '<p><strong>출산·육아기는 보험 설계의 두 번째 변곡점</strong>입니다. 임신 22주 이전에 가입해야 하는 태아보험, 출생 후 30일 이내가 권장되는 자녀 실손, 부모의 사망·중대질병 보장 강화까지 동시에 검토할 일이 많습니다. 또한 이 시기 가구 재무는 자녀 양육비로 인해 압박이 큰 시점이라 보험료 비중을 신중히 정해야 합니다.</p><p>이 글은 태아보험 가입 시점, 어린이보험 보장 구조, 자녀 실손 vs 어린이보험 선택, 부모 정기보험 보장금액 재산정, 출산 직후 가구 재무 점검까지 실전 정보로 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험상품을 판매·모집하지 않습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'taeya', text: '태아보험 — 22주 이전이 핵심' },
    { type: 'body', html: '<p>태아보험은 임신 중 발견되는 선천성 이상·임신 중 위험 등을 보장합니다. 가입 시점이 중요합니다.</p><ul><li><strong>~22주 이전 가입</strong> — 임신 중 위험 보장 가능</li><li><strong>22주 이후 가입</strong> — 임신 관련 진단 보장 제한적</li><li><strong>30주 이후 가입</strong> — 가입 자체가 거절될 수 있음</li></ul><h3>주요 보장</h3><ul><li>선천성 이상 진단·수술비</li><li>저체중·미숙아 입원·NICU 치료비</li><li>출산 합병증</li><li>출생 후 자녀의 일반 보장(실손·어린이보험)으로 자동 전환되는 구조</li></ul>' },

    { type: 'h2', id: 'kids', text: '어린이보험 vs 자녀 실손' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB"></th><th style="padding:8px;border:1px solid #E5E7EB">어린이보험</th><th style="padding:8px;border:1px solid #E5E7EB">자녀 실손</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">유형</td><td style="padding:8px;border:1px solid #E5E7EB">정액형 (진단·수술·입원 정액)</td><td style="padding:8px;border:1px solid #E5E7EB">실손 (실제 의료비 비례)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">보장</td><td style="padding:8px;border:1px solid #E5E7EB">소아암·백혈병·심장수술 등</td><td style="padding:8px;border:1px solid #E5E7EB">감기·중이염 등 일상 의료비</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">월 보험료 (5세)</td><td style="padding:8px;border:1px solid #E5E7EB">3~7만원</td><td style="padding:8px;border:1px solid #E5E7EB">5천~1만원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">조합 권장</td><td style="padding:8px;border:1px solid #E5E7EB">둘 다 가입이 일반적</td><td style="padding:8px;border:1px solid #E5E7EB">둘 다 가입이 일반적</td></tr></table>' },

    { type: 'h2', id: 'parent', text: '부모 보장 강화 — 출산 후 재설계' },
    { type: 'body', html: '<p>자녀 출산 후 부모 보장도 재산정해야 합니다.</p><ul><li><strong>정기보험</strong> — 가입금액 5억 → 7~10억 상향 검토. 자녀 양육비·교육비 공백 대비.</li><li><strong>종신보험</strong> — 자녀 성인기까지 보장 필요 시 검토. 비용 부담 큼.</li><li><strong>CI보험·암보험 한도</strong> — 진단비 5천 → 1억 상향 검토.</li><li><strong>운전자보험</strong> — 자녀 동승 사고 보장 강화. 일상생활배상책임 특약 추가.</li></ul>' },

    { type: 'h2', id: 'budget', text: '출산 직후 가구 재무 — 보험료 비중 재조정' },
    { type: 'body', html: '<p>자녀 출생 후 가구 지출이 평균 30~50% 증가합니다. 보험료 비중도 재조정 필요.</p><ul><li>출산 전: 부부 합산 보험료 8~12%</li><li>출산 후 1년: 자녀 보험 추가로 합산 10~14%</li><li>주의: 보험료 부담으로 가구 비상자금 형성 못하면 위험 → 비갱신 → 갱신 전환, 보장 한도 조정 가능</li></ul>' },

    { type: 'h2', id: 'scenario', text: '가상 시나리오 (허구 예시)' },
    { type: 'body', html: '<p>※ 허구 사례입니다.</p><h3>30대 후반 부부 + 신생아 (월 수입 합산 800만원)</h3><ul><li>부부 4세대 실손: 월 28,000원</li><li>자녀 4세대 실손: 월 8,000원</li><li>자녀 어린이보험: 월 35,000원</li><li>부모 정기보험 7억(남편)·3억(아내): 월 75,000원</li><li>부부 암보험 1억 비갱신: 월 160,000원</li><li>자동차+운전자보험: 월 80,000원</li><li>합계 월 약 386,000원 (수입의 4.8%)</li><li>나머지 5~7%는 자녀 양육비 + 부부 IRP/연금저축</li></ul>' },

    { type: 'h2', id: 'often-missed', text: '출산기 자주 놓치는 보장' },
    { type: 'body', html: '<ul><li>임신 후 22주 임박해 태아보험 가입 시도 → 거절 또는 보장 제한</li><li>자녀 출생 후 실손 가입 지연 → 면책기간 90일 동안 보장 공백</li><li>어린이보험만 가입하고 실손 미가입 → 일상 의료비 부담 큼</li><li>아빠 정기보험 그대로 유지 (자녀 출생 전 5억) → 자녀 양육비 7억+ 공백</li><li>일상생활배상책임 특약 누락 — 자녀가 타인 다치게 한 경우</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '태아보험은 언제 가입해야 하나요?', a: '임신 16~22주 사이 권장. 22주 이후는 보장 제한.' },
      { q: '어린이보험 만기는 몇 살까지?', a: '대부분 30세·35세·100세 만기. 30세 만기 후 성인 종신·실손으로 전환 권장.' },
      { q: '자녀 실손은 언제 가입?', a: '출생 후 30일 이내 권장. 임신 중 가입한 태아보험에서 자동 전환되는 상품도 있음.' },
      { q: '어린이보험 1개에 다 통합되어 있나요?', a: '대부분 어린이 종합보험은 실손·정기·암 등 통합. 단 4세대 실손은 별도 가입이 일반적.' },
      { q: '부모 정기보험 가입금액 적정선?', a: '자녀 1인당 양육·교육비 공백 약 3억. 자녀 2명이면 6~10억 권장.' },
      { q: '아내 출산휴가 동안 보험료 부담 어렵습니다.', a: '일시 납입 중지(실효) 후 재개. 또는 약관대출로 임시 자금 조달.' },
      { q: '저축성 보험으로 자녀 학자금 준비?', a: '보험상품보다 연금저축·청년형 펀드가 효율 좋은 경우 많음.' },
      { q: '쌍둥이는 어떻게 가입?', a: '각자 독립 계약. 어린이보험·실손 모두 1인당 가입.' },
    ]},

    { type: 'sources', items: [
      { label: '금감원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '보건복지부 — 임산부·영유아 보장', url: 'https://www.mohw.go.kr', org: '보건복지부', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

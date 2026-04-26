const post = {
  id: 'H0005',
  sections: [
    { type: 'intro', html: '<p><strong>60세 이후 시니어의 보험 설계는 "보장 강화"가 아니라 "기존 보험 점검 + 노후 라이프스테이지 맞춤 보강"</strong>이 핵심입니다. 새로 가입하는 보장은 보험료가 비싸 효율이 낮고, 기존에 가입한 것을 잘 유지하면서 부족한 영역(간병·치아·실손)만 보강하는 것이 합리적입니다.</p><p>이 글은 시니어 라이프스테이지의 5대 보험 우선순위(실버 실손·간병·치아·CI·상속 대비), 자녀 부양 부담 차원의 종신·정기 재산정, 신규 가입 시 유의 사항, 자녀와의 보험 합의(상속 대비)까지 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험상품을 판매·모집하지 않습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'context', text: '60세 이후 라이프스테이지 — 보장 변화' },
    { type: 'body', html: '<ul><li><strong>의료비 증가</strong> — 만성질환·고가 검사·수술 빈도 상승</li><li><strong>간병·요양 가능성</strong> — 치매·중증 간병 비용은 가구 재무를 흔드는 위험</li><li><strong>자녀 부양 부담 감소</strong> — 자녀 성인 → 정기·종신 보장 한도 재산정</li><li><strong>상속 대비</strong> — 종신보험 비과세 자산으로 활용 가능</li><li><strong>소득 단절</strong> — 은퇴로 보험료 부담 능력 제한</li></ul>' },

    { type: 'h2', id: 'priority', text: '시니어 보험 우선순위' },
    { type: 'body', html: '<h3>1순위. 실버 실손 (유병자 실손)</h3><p>일반 실손 가입이 어려운 만성질환 보유 시니어용. 고혈압·당뇨·고지혈증 등 보유자도 가입 가능. 보험료는 일반 실손의 1.5~2배.</p><h3>2순위. 간병·장기요양보험</h3><p>국가 장기요양 등급 인정 시 보장. 65세 이상 노인장기요양보험(국가)은 본인부담 15~20%. 민간 간병보험은 본인부담 보전 + 일당 정액.</p><h3>3순위. 치아보험 (가능한 한 빠른 가입)</h3><p>50대 후반~60대 초반에 가입 가능. 결손치·면책기간 고려해 신중히. 70대 신규 가입은 거절 가능성.</p><h3>4순위. CI보험 (중대질병)</h3><p>이미 보유하고 있으면 유지. 신규 가입은 보험료가 매우 비쌈. 진단비 1억 가입 시 60대 월 30만원 이상.</p><h3>5순위. 상속 대비 종신보험</h3><p>종신 사망보험금은 비과세. 상속세 재원 마련 가능. 재산 10억 이상 시 검토.</p>' },

    { type: 'h2', id: 'long-term-care', text: '장기요양보험 — 가장 큰 시니어 리스크' },
    { type: 'body', html: '<h3>국가 노인장기요양보험</h3><ul><li>65세 이상 또는 노인성 질병 보유자</li><li>장기요양 등급(1~5급·인지지원) 판정 시 시설·재가·요양보호사 이용</li><li>본인부담 시설 20%, 재가 15%</li><li>월 본인부담 평균 15~50만원</li></ul><h3>민간 간병보험</h3><ul><li>국가 장기요양 등급에 따라 정액 일시금 또는 일당 보장</li><li>치매 진단비 정액(2~5천만원)</li><li>가입 가능 연령 70~80세까지</li><li>가입 후 90일~2년 면책기간</li></ul>' },

    { type: 'h2', id: 'preexisting', text: '유병자도 가입 가능한 상품' },
    { type: 'body', html: '<ul><li>유병자 실손 — 만성질환 보유 시니어 대상</li><li>유병자 종신·정기 — 인수 심사 완화</li><li>3·5년 유병자 — 최근 3·5년 이내 치료 이력만 면책</li><li>간편 고지 상품 — 18~28개 질문 + Yes/No 응답</li></ul><p>일반 상품 대비 보험료 1.3~2배. 보장 일부 제한.</p>' },

    { type: 'h2', id: 'restructure', text: '60대 보험 점검 — 정리할 것 vs 유지할 것' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">상품</th><th style="padding:8px;border:1px solid #E5E7EB">권장 액션</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">1·2세대 실손</td><td style="padding:8px;border:1px solid #E5E7EB">유지 (보장 강도 우수)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">고가 정기보험</td><td style="padding:8px;border:1px solid #E5E7EB">자녀 성인기 도래 시 감액·만기 종료</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">암보험·CI</td><td style="padding:8px;border:1px solid #E5E7EB">기존 유지 (신규는 보험료 부담)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">변액·연금</td><td style="padding:8px;border:1px solid #E5E7EB">수령 시점·세제 활용 검토</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">치아보험</td><td style="padding:8px;border:1px solid #E5E7EB">미가입자 60대 초반에 시도</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">간병보험</td><td style="padding:8px;border:1px solid #E5E7EB">미가입자 60대 초반에 시도</td></tr></table>' },

    { type: 'h2', id: 'scenario', text: '가상 시나리오 (허구 예시)' },
    { type: 'body', html: '<p>※ 허구 사례입니다.</p><h3>62세 부부 (은퇴, 연금·예금 자산)</h3><ul><li>1세대 실손 (1990년대 가입) — 유지. 월 부부 합산 12만원</li><li>간병보험 (60세 가입): 월 부부 합산 25만원</li><li>치아보험 (60세 가입, 결손치 4개 평생 면책): 월 부부 합산 18만원</li><li>기존 종신·CI 유지: 월 부부 합산 15만원 (납입 만료 임박)</li><li>합계 월 약 70만원</li></ul><p>이 시점에서 신규 가입보다는 기존 유지·연금 수령 전략·상속 대비 종신 보험금 활용이 핵심.</p>' },

    { type: 'h2', id: 'estate', text: '상속 대비 — 종신보험 활용' },
    { type: 'body', html: '<p>재산 10억 이상이면 상속세 부담 발생. 종신 사망보험금은 비과세 자산이므로 상속세 재원 마련 또는 자녀에게 비과세 자산 이전 도구로 활용 가능.</p><ul><li>종신보험 가입금액 = 예상 상속세 수준</li><li>피보험자 본인 + 수익자 자녀</li><li>비과세 한도 (월 적립 150만원·일시납 1억) 내 운영</li><li>세무 전문가 상담 권장</li></ul>' },

    { type: 'h2', id: 'often-missed', text: '시니어가 자주 놓치는 항목' },
    { type: 'body', html: '<ul><li>국가 노인장기요양보험 신청 — 65세 이후 거동 불편 시 등급 신청</li><li>건강보험 임의계속가입 — 직장 가입 종료 후 지역가입 변경 시 임의계속 1년 유지 가능</li><li>유병자 실손 — 일반 실손 거절자 차선책</li><li>운전자보험 갱신 시 보험료 — 70대 보험료 급등, 갱신 vs 비갱신 재검토</li><li>치매·중증 진단 시 보험금 청구 위임 절차 (성년후견·임의대리)</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '60대에 신규 보험 가입이 의미 있나요?', a: '일반 보험은 보험료 부담 큼. 간병·치아·유병자 실손은 60대 초반 신규 가입이 합리적.' },
      { q: '치매 진단 후 보험 가입 가능한가요?', a: '대부분 인수 거절. 가족 중 치매 가족력 있어도 가입 시점에 심사 강화.' },
      { q: '실버 실손이 일반 실손보다 보장이 약한가요?', a: '자기부담률·보장 한도가 일부 낮음. 다만 만성질환 보유자에게는 거의 유일한 선택지.' },
      { q: '국가 장기요양 등급은 어떻게 받나요?', a: '국민건강보험공단 신청 → 방문 조사 → 등급 판정. 평균 30일 소요.' },
      { q: '종신보험을 해지하면 손해인가요?', a: '20년 납 완료 직전이면 만기 직전 환급률 90%+. 5~10년 차에 해지하면 큰 손해.' },
      { q: '간병보험 90일 면책 안에 진단되면?', a: '대부분 면책. 가입 직후 진단된 치매·중증은 보장 제외.' },
      { q: '자녀가 보험료를 대신 납입하면 세금 문제 있나요?', a: '연 1,000만원 이하 증여세 비과세 한도 내. 초과 시 증여세 신고.' },
      { q: '부부 중 한쪽만 사망 보험 가입해도 되나요?', a: '가구 부양 비중에 따라. 한쪽이 주 부양자라면 그쪽 우선. 둘 다 비슷하면 둘 다 권장.' },
    ]},

    { type: 'sources', items: [
      { label: '국민건강보험공단 노인장기요양보험', url: 'https://www.longtermcare.or.kr', org: '국민건강보험공단', accessedAt: '2026-04-27' },
      { label: '금감원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '국세청 — 상속·증여세', url: 'https://www.nts.go.kr', org: '국세청', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

const post = {
  id: 'M0001',
  sections: [
    { type: 'intro', html: '<p><strong>2026년 4세대 실손의료보험은 5대 손해보험사(삼성화재·현대해상·DB손해보험·KB손해보험·메리츠화재)가 동일한 표준약관을 사용</strong>합니다. 즉 보장 범위·자기부담률·연간 한도는 회사 간 차이가 없습니다. 그렇다면 어디서 차이가 발생하는가? 보험료(다이렉트 채널 할인 조합), 청구 시스템(앱·OCR·간소화법 적용), 갱신 손해율, 고객 민원 지표, 직접 정산 제휴 병원 수에서 차이가 납니다.</p><p>이 글은 5대 손해보험사 4세대 실손을 동일 조건(30대 남성·주계약+3대 비급여 특약)으로 비교한 매트릭스, 회사별 차별 포인트, 청구 편의성 평가, 갈아탈 때 체크해야 할 손익 분기점까지 공시 자료를 기준으로 정리합니다. 본 사이트는 보험상품을 판매·모집하지 않으며, 모든 수치는 공시 기준일 2026-01-01의 일반적 범위 추정입니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 실제 청약 보험료는 인수 기준·건강고지·기존 가입 이력·다이렉트 할인 조합에 따라 달라집니다. 정확한 견적은 각 회사 공시실·다이렉트 채널에서 확인하세요.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'standard', text: '4세대 실손 — 회사 간 동일한 항목' },
    { type: 'body', html: '<p>다음 항목은 보험업감독규정에 의해 모든 손해보험사가 동일하게 적용합니다. "어느 회사가 보장이 더 좋다"는 명제는 4세대에서는 성립하지 않습니다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">표준 내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">자기부담률</td><td style="padding:8px;border:1px solid #E5E7EB">급여 20% / 비급여 30%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">최소 공제금액</td><td style="padding:8px;border:1px solid #E5E7EB">외래 1만(의원)~2만(상급종합), 응급실 비응급 3만, 처방 8천</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">연간 한도</td><td style="padding:8px;border:1px solid #E5E7EB">급여 5,000만원 / 비급여 5,000만원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">3대 비급여 특약 한도</td><td style="padding:8px;border:1px solid #E5E7EB">도수치료 350만/350회, 주사제 250만/50회, MRI 300만</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">비급여 1~4등급제</td><td style="padding:8px;border:1px solid #E5E7EB">동일 (할인 -5% ~ 할증 +300%)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">갱신 / 재가입</td><td style="padding:8px;border:1px solid #E5E7EB">갱신 1년 / 재가입 5년</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">면책기간</td><td style="padding:8px;border:1px solid #E5E7EB">90일</td></tr></table>' },

    { type: 'h2', id: 'matrix', text: '5대사 비교 매트릭스 — 30대 남성 기준' },
    { type: 'body', html: '<p>2026-01-01 공시 기준의 일반적 범위를 정리한 추정표입니다. 다이렉트 가입·기본 할인 조합 적용. 실제 보험료는 인수 심사 후 결정됩니다.</p><table style="width:100%;border-collapse:collapse;font-size:13px"><tr style="background:#F3F4F6"><th style="padding:6px;border:1px solid #E5E7EB">보험사</th><th style="padding:6px;border:1px solid #E5E7EB">주계약 월</th><th style="padding:6px;border:1px solid #E5E7EB">3대 특약 포함 월</th><th style="padding:6px;border:1px solid #E5E7EB">청구 앱</th><th style="padding:6px;border:1px solid #E5E7EB">간소화법</th></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">삼성화재</td><td style="padding:6px;border:1px solid #E5E7EB">9,000~11,000</td><td style="padding:6px;border:1px solid #E5E7EB">13,000~16,000</td><td style="padding:6px;border:1px solid #E5E7EB">다이렉트 앱</td><td style="padding:6px;border:1px solid #E5E7EB">적용</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">현대해상</td><td style="padding:6px;border:1px solid #E5E7EB">9,500~11,500</td><td style="padding:6px;border:1px solid #E5E7EB">13,500~16,500</td><td style="padding:6px;border:1px solid #E5E7EB">Hi-Care</td><td style="padding:6px;border:1px solid #E5E7EB">적용</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">DB손해보험</td><td style="padding:6px;border:1px solid #E5E7EB">9,000~11,000</td><td style="padding:6px;border:1px solid #E5E7EB">13,000~16,000</td><td style="padding:6px;border:1px solid #E5E7EB">프로미앱</td><td style="padding:6px;border:1px solid #E5E7EB">적용</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">KB손해보험</td><td style="padding:6px;border:1px solid #E5E7EB">9,500~11,500</td><td style="padding:6px;border:1px solid #E5E7EB">13,500~16,500</td><td style="padding:6px;border:1px solid #E5E7EB">스타뱅킹/KB앱</td><td style="padding:6px;border:1px solid #E5E7EB">적용</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">메리츠화재</td><td style="padding:6px;border:1px solid #E5E7EB">9,000~11,500</td><td style="padding:6px;border:1px solid #E5E7EB">13,000~17,000</td><td style="padding:6px;border:1px solid #E5E7EB">메리츠 다이렉트</td><td style="padding:6px;border:1px solid #E5E7EB">적용</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">※ 개인별 인수 결과·할인 조합에 따라 ±20% 변동 가능. 보험료 차이는 평균 5~15% 수준이며 청구 편의성·민원 처리 속도가 실제 만족도에 더 큰 영향.</p>' },

    { type: 'h2', id: 'differentiation', text: '회사별 실제 차별 포인트' },
    { type: 'body', html: '<h3>삼성화재</h3><p>점유율 1위. 다이렉트 채널 사업비가 낮아 전반적으로 가격 경쟁력. AI OCR 청구 자동화 인식률 우수. 사고 처리 직원망 전국 최다.</p><h3>현대해상</h3><p>Hi-Care 앱이 청구·진료 추적 기능 통합. 다이렉트 자동차보험과 묶음 가입 시 추가 할인. 콜센터 응대 평가 양호.</p><h3>DB손해보험</h3><p>운전자·암 등 장기보험 라인업 강세. 실손 단독 가입자에게도 다른 장기상품 묶음 할인 제안. 청구 처리 평균 영업일 짧은 편.</p><h3>KB손해보험</h3><p>KB금융그룹 시너지 — KB스타뱅킹 앱과 연계. 농어촌·지방 영업점망 활용. 직장 단체실손 시장 점유율 상위.</p><h3>메리츠화재</h3><p>치아·간병 장기보험 강자. 실손은 다이렉트 채널 가격이 보수적. 분쟁 시 고객지원실 응대 평판 양호.</p>' },

    { type: 'h2', id: 'min-yuan', text: '고객 민원 지표 비교 (참고)' },
    { type: 'body', html: '<p>금감원·손해보험협회 공개 자료 기준 보험소비자 민원평가지표. 회사별로 미세한 차이가 있으나 모두 양호 등급에 속합니다. 분기별 변동이 있어 최신 자료는 협회 공시실에서 직접 확인 권장.</p><ul><li>금감원 보험소비자 민원평가 — fss.or.kr</li><li>손해보험협회 공시실 — knia.or.kr</li></ul>' },

    { type: 'h2', id: 'switch', text: '갈아타기 — 손익 분기점' },
    { type: 'body', html: '<p>1·2·3세대에서 4세대로 전환을 검토 중이라면 다음을 동시 고려해야 합니다.</p><ol><li><strong>비급여 이용 빈도</strong> — 도수치료·MRI 등 연 100만원 이상 비급여 이용자는 전환 시 자기부담 증가로 손해 가능성</li><li><strong>현재 보험료</strong> — 1세대는 보험료가 4세대의 2~3배 수준이지만 보장 강도가 높음</li><li><strong>가입자 연령</strong> — 50대 이후 신규 가입은 보험료가 급격히 올라감</li><li><strong>건강 상태</strong> — 만성질환·치료 이력 보유 시 신규 4세대 가입이 거절되거나 부담보 조건이 붙을 수 있음</li><li><strong>재가입 5년 변동</strong> — 4세대는 5년마다 약관이 바뀔 수 있음</li></ol>' },
    { type: 'warning', title: '갈아타기는 신중', html: '<p>"4세대가 무조건 저렴해서 유리하다"는 일반화는 위험합니다. 비급여 이용량이 많거나 만성질환자는 기존 세대 유지가 나은 경우가 많습니다. 전환 전 보험사 공식 상담·약관 비교 필수.</p>' },

    { type: 'h2', id: 'choose', text: '어떻게 선택해야 하나' },
    { type: 'body', html: '<p>이 비교 페이지는 "어느 회사가 최고"라는 단정을 하지 않습니다. 다만 다음 우선순위로 검토하는 것이 합리적입니다.</p><ol><li>2~3개 보험사에서 동일 조건 견적 직접 받기</li><li>보험료 차이 5% 이내라면 청구 편의성·앱 UX·콜센터 응대 우선</li><li>장기 묶음 가입 (자동차+실손, 운전자+실손) 시 할인 검토</li><li>비급여 이용 빈도 예측 후 특약 가입 여부 결정</li><li>5년 후 재가입 시점의 약관 변경 가능성 인지</li></ol>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '5대사 중 가장 저렴한 회사는?', a: '4세대 표준약관 동일이라 5~15% 내외 차이만 발생. 단정적 1위는 의미 없으며 본인 조건으로 직접 견적 비교 권장.' },
      { q: '실손 청구 간소화법은 모든 회사 적용되나요?', a: '5대사 모두 시스템 적용. 단 환자 동의 + 해당 병원의 시스템 연동이 전제. 모든 병원 즉시 적용은 아님.' },
      { q: '회사 간 청구 처리 속도 차이가 큰가요?', a: '평균 영업일 3~5일로 차이가 작음. 다만 분쟁 건 처리 속도는 회사별 상이.' },
      { q: '다이렉트와 설계사 채널 보장이 다른가요?', a: '약관·보장 동일. 사업비 차이로 다이렉트가 5~15% 저렴.' },
      { q: '갱신 시 회사를 옮겨도 되나요?', a: '재가입 시점에 다른 회사로 옮기는 것은 불가능. 다만 기존 계약 해지 후 신규 가입은 가능 (단 면책기간 90일 다시 적용).' },
      { q: '직장 단체실손이 있는데 4세대 별도 가입해야 하나요?', a: '단체실손은 퇴직 시 종료. 퇴직 시점 또는 그 직전에 개인 4세대 가입 검토 필수.' },
      { q: '5세대가 곧 나오나요?', a: '5년 단위 표준약관 개정이 일반적. 차세대 약관 도입 시기는 금감원 정책 발표 참조.' },
      { q: '비급여 등급제는 회사가 임의 조정 가능한가요?', a: '아니오. 표준약관에 명시되어 5대사 모두 동일.' },
    ]},

    { type: 'sources', items: [
      { label: '금감원 금융상품통합비교공시 — 실손의료보험', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '손해보험협회 공시실', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-27' },
      { label: '보험업감독규정 — 4세대 실손 표준약관', url: 'https://www.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '실손보험 청구 간소화법 시행 안내', url: 'https://www.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

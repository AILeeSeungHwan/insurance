const post = {
  id: 'G0003',
  sections: [
    { type: 'intro', html: '<p><strong>보험과 관련된 세액공제는 크게 세 종류</strong>입니다. ① 보장성 보험료 연 100만원 한도 13.2% 공제 ② 연금저축·IRP 합산 연 900만원 한도 13.2~16.5% 공제 ③ 퇴직연금(DB·DC) 별도 한도. 잘 활용하면 연말정산에서 약 100~150만원 환급이 가능하지만, 한도·중복공제 룰을 모르면 손해를 보거나 과세 대상이 될 수 있습니다.</p><p>이 글은 보장성 보험료 세액공제, 연금저축·IRP 세액공제, 연금 수령 시 과세, 자주 발생하는 누락·오류, 연말정산 자동 자료 확인 방법까지 실전 안내로 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 세제 규정은 매년 개정될 수 있습니다. 최신 정보는 국세청 홈택스 또는 세무사 상담을 권장합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'background', text: '보험 세액공제 3대 카테고리' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">카테고리</th><th style="padding:8px;border:1px solid #E5E7EB">한도</th><th style="padding:8px;border:1px solid #E5E7EB">공제율</th><th style="padding:8px;border:1px solid #E5E7EB">최대 환급</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">보장성 보험료</td><td style="padding:8px;border:1px solid #E5E7EB">연 100만원</td><td style="padding:8px;border:1px solid #E5E7EB">13.2% (장애인 16.5%)</td><td style="padding:8px;border:1px solid #E5E7EB">132,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">연금저축</td><td style="padding:8px;border:1px solid #E5E7EB">연 600만원</td><td style="padding:8px;border:1px solid #E5E7EB">13.2~16.5%</td><td style="padding:8px;border:1px solid #E5E7EB">792,000~990,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">IRP (연금저축 합산)</td><td style="padding:8px;border:1px solid #E5E7EB">연 900만원 합산</td><td style="padding:8px;border:1px solid #E5E7EB">13.2~16.5%</td><td style="padding:8px;border:1px solid #E5E7EB">1,188,000~1,485,000원</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">공제율은 종합소득금액에 따라 차등(5,500만원 이하 16.5%, 초과 13.2%).</p>' },

    { type: 'h2', id: 'protective', text: '① 보장성 보험료 세액공제' },
    { type: 'body', html: '<h3>대상 — 보장성 보험만</h3><p>실손의료보험, 암보험, 종신보험, 정기보험, 운전자보험, 자동차보험(상해 부분), 화재보험 등 <strong>위험을 보장하는 보험</strong>이 대상. 저축성 보험·연금보험은 별도.</p><h3>한도와 계산</h3><ul><li>연 100만원 한도</li><li>일반: 13.2% (지방세 1.2% 포함) → 최대 132,000원 환급</li><li>장애인 전용 보장성: 16.5% → 최대 165,000원 환급</li></ul><h3>예시</h3><p>월 보험료 10만원 납부 → 연 120만원 → 100만원 한도 내 13.2% = <strong>132,000원 환급</strong>.</p>' },

    { type: 'h2', id: 'pension', text: '② 연금저축·IRP 세액공제' },
    { type: 'body', html: '<h3>대상 — 세제적격 연금</h3><p>연금저축보험·연금저축펀드·IRP(개인형 퇴직연금). 일반 연금보험(세제비적격)은 대상 아님.</p><h3>합산 한도 — 연 900만원</h3><ul><li>연금저축 단독 한도: 연 600만원</li><li>연금저축 + IRP 합산 한도: 연 900만원</li><li>예: 연금저축 600 + IRP 300 = 900만원 모두 공제</li></ul><h3>공제율</h3><ul><li>총급여 5,500만원 이하 또는 종합소득 4,500만원 이하: 16.5%</li><li>초과: 13.2%</li></ul><h3>최대 환급</h3><ul><li>16.5%: 900만원 × 16.5% = 1,485,000원</li><li>13.2%: 900만원 × 13.2% = 1,188,000원</li></ul>' },

    { type: 'h2', id: 'ratax', text: '③ 연금 수령 시 과세' },
    { type: 'body', html: '<p>세제적격 연금(연금저축·IRP)은 적립 시 세액공제를 받지만 수령 시 과세됩니다. 단 일반 소득세보다 낮은 저율 분리과세입니다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">수령 방식</th><th style="padding:8px;border:1px solid #E5E7EB">세율</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">연금 수령(55세 이후, 10년 이상)</td><td style="padding:8px;border:1px solid #E5E7EB">3.3~5.5% 저율 분리과세</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">한도 초과 일시 수령</td><td style="padding:8px;border:1px solid #E5E7EB">기타소득세 16.5%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">중도 해지(55세 전)</td><td style="padding:8px;border:1px solid #E5E7EB">기타소득세 16.5% + 환급금 추가 과세</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">연금 1,500만원 이하는 분리과세 선택 가능, 초과 시 종합과세.</p>' },

    { type: 'h2', id: 'check', text: '연말정산 체크리스트' },
    { type: 'callout', html: '<ul><li>☐ 보장성 보험료 영수증 — 보험사 마이페이지에서 다운로드</li><li>☐ 연금저축·IRP 납입증명서 — 운용사 발급</li><li>☐ 가족 보험료 합산 — 부양가족(자녀·배우자·부모) 보험료 합산 가능</li><li>☐ 자동차보험은 상해특약 부분만 공제 대상 (자기차량 부분 제외)</li><li>☐ 홈택스 연말정산 간소화 자료 확인 — 누락 시 직접 추가</li><li>☐ 의료비·교육비 등 다른 공제와 중복 점검</li></ul>' },

    { type: 'h2', id: 'mistakes', text: '자주 하는 실수' },
    { type: 'body', html: '<ul><li><strong>저축성 보험을 보장성으로 신고</strong> — 거절. 약관에 저축성·보장성 명시</li><li><strong>가족 보험료 합산 누락</strong> — 부양가족 명의 보험료도 합산 가능</li><li><strong>자동차보험 전체 공제 신고</strong> — 상해 특약 부분만 가능</li><li><strong>연금저축 600 + IRP 600 = 1,200 신고</strong> — 합산 900 한도 초과분은 공제 불가</li><li><strong>중도 해지 후 다음 해 가입 → 공제</strong> — 해지로 받은 환급금에 추가 과세</li></ul>' },

    { type: 'h2', id: 'tip', text: '절세 활용 팁' },
    { type: 'body', html: '<ol><li>맞벌이 부부는 소득이 높은 쪽에 보장성 보험료 몰아주기</li><li>연금저축 600 + IRP 300으로 분산해 합산 한도 900 모두 사용</li><li>자영업자는 노란우산공제(연 600만원 한도) 별도 활용</li><li>퇴직연금(DC형) 추가 납입 — IRP와 별도 한도</li><li>연금 수령은 55세 이후 10년 이상 분할로 세율 최저화</li></ol>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '실손과 자동차보험을 다 합쳐서 100만원 넘으면?', a: '한도 100만원까지만 공제. 초과분은 공제 불가.' },
      { q: '연금저축보험과 연금저축펀드의 공제는 다른가요?', a: '동일. 둘 다 세제적격으로 합산 한도 600만원.' },
      { q: '50세 이후 연금저축 추가 한도가 있다고 들었어요.', a: '50세 이상 연금저축 추가 200만원 한도 확대 (총 800만원)는 한시적 제도. 매년 적용 여부 확인 필요.' },
      { q: '회사가 IRP에 매칭해주는 건도 공제 대상인가요?', a: '회사 부담분은 본인 공제 대상 아님. 본인 추가 납입분만 공제.' },
      { q: '연금저축 중도 해지하면 세제 혜택은 어떻게 되나요?', a: '해지 시점까지 받은 세액공제 + 운용수익에 기타소득세 16.5% 부과. 5년 이내 해지는 추징.' },
      { q: '연금 수령 시 1,500만원 초과는 종합과세인가요?', a: '연 1,500만원 초과 시 종합과세 또는 분리과세(15.4%) 선택 가능.' },
      { q: '보장성과 연금 둘 다 가입하면 두 한도 모두 받나요?', a: '예. 보장성 100만 + 연금 900만은 별도 한도. 합산 1,000만원 한도 내에서 모두 공제 가능.' },
      { q: '연말정산 안 했는데 추가 환급 가능한가요?', a: '5월 종합소득세 신고 시 환급 신청 가능. 5년 이내 경정청구로도 환급 가능.' },
    ]},

    { type: 'sources', items: [
      { label: '국세청 홈택스 — 연금·보험료 세액공제', url: 'https://www.hometax.go.kr', org: '국세청', accessedAt: '2026-04-27' },
      { label: '소득세법 시행령', url: 'https://www.law.go.kr', org: '국가법령정보센터', accessedAt: '2026-04-27' },
      { label: '금융감독원 연금 안내', url: 'https://www.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

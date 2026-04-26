const post = {
  id: 'G0006',
  sections: [
    { type: 'intro', html: '<p><strong>보험금 청구가 거절·감액되면 4단계 대응 절차가 있습니다</strong>. ① 보험사 내부 민원 → ② 금감원 금융분쟁조정 → ③ 한국소비자원 → ④ 민사 소송. 각 단계마다 비용·기간·성공 가능성이 다릅니다. 90% 이상의 분쟁은 ②단계 금감원 분쟁조정에서 해결되며, 평균 처리 기간은 60일입니다.</p><p>이 글은 분쟁 대응 4단계의 정확한 절차, 필요 서류, 평균 소요 기간, 자주 발생하는 분쟁 유형, 분쟁조정 신청서 작성 요령까지 실전 정보로 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 가이드는 일반적 안내입니다. 개별 사안의 정확한 대응은 변호사·금감원·소비자원 직접 상담을 권장합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'background', text: '주요 분쟁 유형' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">분쟁 유형</th><th style="padding:8px;border:1px solid #E5E7EB">예시</th><th style="padding:8px;border:1px solid #E5E7EB">빈도</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">고지의무 위반 주장</td><td style="padding:8px;border:1px solid #E5E7EB">5/10년 룰 위반으로 보험금 거절</td><td style="padding:8px;border:1px solid #E5E7EB">매우 높음</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">약관 면책 사유 해석</td><td style="padding:8px;border:1px solid #E5E7EB">미용·외상·사전 발현 질환</td><td style="padding:8px;border:1px solid #E5E7EB">높음</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">진단 분류 (암 분류)</td><td style="padding:8px;border:1px solid #E5E7EB">갑상선암 일반암 vs 유사암</td><td style="padding:8px;border:1px solid #E5E7EB">높음</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">교통사고 과실비율</td><td style="padding:8px;border:1px solid #E5E7EB">상호 다른 주장</td><td style="padding:8px;border:1px solid #E5E7EB">높음</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">상해·재해 인정</td><td style="padding:8px;border:1px solid #E5E7EB">자해·자살 의심</td><td style="padding:8px;border:1px solid #E5E7EB">중간</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">의학적 필요성 (비급여)</td><td style="padding:8px;border:1px solid #E5E7EB">도수치료·MRI 부적정</td><td style="padding:8px;border:1px solid #E5E7EB">중간</td></tr></table>' },

    { type: 'h2', id: 'step1', text: '1단계 — 보험사 내부 민원' },
    { type: 'body', html: '<h3>절차</h3><ol><li>거절 사유서 서면 요청</li><li>보험사 민원실 또는 고객지원실에 이의 신청</li><li>추가 서류 제출 (의사 소견서·진료 기록·약관 해석 자료)</li><li>재심사 → 결과 통보</li></ol><h3>소요 기간</h3><p>2~4주.</p><h3>장점·단점</h3><ul><li>장점: 비용 무료, 가장 빠름. 회사가 명백한 오류라면 재심사 통과 가능.</li><li>단점: 본질적 분쟁(약관 해석)은 여기서 해결 안 됨.</li></ul>' },

    { type: 'h2', id: 'step2', text: '2단계 — 금감원 금융분쟁조정 (핵심)' },
    { type: 'body', html: '<h3>금감원 금융분쟁조정위원회</h3><p>금융감독원이 운영하는 무료 분쟁조정 절차. 90% 이상의 보험 분쟁이 이 단계에서 해결.</p><h3>신청 방법</h3><ul><li>금감원 홈페이지(www.fss.or.kr) → 민원·분쟁조정 → 분쟁조정 신청</li><li>전화 1332</li><li>방문 (금감원 본원·지원)</li></ul><h3>제출 서류</h3><ul><li>분쟁조정 신청서</li><li>보험증권·약관 사본</li><li>거절 사유서·청구 서류 사본</li><li>의료 기록·진단서</li><li>보험사 민원 답변서</li></ul><h3>처리 기간</h3><p>평균 60일. 복잡한 사안은 90~120일.</p><h3>결과</h3><ul><li>조정안 제시 → 양 당사자 수락 시 종료</li><li>거부 시 다음 단계 진행</li><li>2,000만원 이하 사건은 보험사가 조정안을 거부할 수 없는 의무 수락 제도 (2020년 시행)</li></ul>' },

    { type: 'h2', id: 'step3', text: '3단계 — 한국소비자원' },
    { type: 'body', html: '<p>금감원 분쟁조정과 별도로 한국소비자원도 보험 관련 피해 구제 신청 가능. 다만 분쟁조정 효력 측면에서 금감원이 더 강함.</p><ul><li>신청: www.kca.go.kr</li><li>전화: 1372</li><li>처리 기간: 30~90일</li><li>비용: 무료</li></ul>' },

    { type: 'h2', id: 'step4', text: '4단계 — 민사 소송' },
    { type: 'body', html: '<p>위 단계에서 해결되지 않으면 민사 소송. 소장 접수 → 1심 → 항소심 → 상고심.</p><h3>비용</h3><ul><li>인지대·송달료: 청구액의 약 1~2%</li><li>변호사 선임비: 청구액의 5~15% (소장 작성·1심 변론 기준)</li><li>패소 시 상대방 변호사비 일부 부담</li></ul><h3>기간</h3><p>1심 6~12개월, 항소심 추가 6~12개월. 상고는 6~18개월.</p><h3>사전 검토</h3><p>변호사 무료상담(법률구조공단·대한변협 무료법률상담), 승소 가능성 평가 필수. 청구액 1,000만원 이하면 소송 비용이 더 많이 들 수 있음.</p>' },

    { type: 'h2', id: 'tips', text: '분쟁조정 성공 팁' },
    { type: 'body', html: '<ol><li><strong>약관 인용 정확히</strong> — 약관 해석 분쟁은 약관 조문을 직접 인용</li><li><strong>의사 소견서 보강</strong> — 의학적 필요성 분쟁은 의사 의견이 결정적</li><li><strong>유사 판례 첨부</strong> — 금감원·법원 판례 검색해 유사 사례 인용</li><li><strong>감정적 호소 자제</strong> — 사실·근거·법리 중심 서술</li><li><strong>시기 우선</strong> — 청구권 소멸시효 3년 안에 진행</li></ol>' },

    { type: 'h2', id: 'goji', text: '특별 주제 — 고지의무 위반 분쟁' },
    { type: 'body', html: '<p>가장 많은 분쟁 유형. 보험사가 "고지의무 위반"을 사유로 보장 거절 + 계약 해지하는 경우.</p><h3>고지의무 5/10년 룰</h3><ul><li>최근 3개월 — 의사 진료·진단·치료·검사 권유</li><li>최근 1년 — 추가검사·재검사</li><li>최근 5년 — 입원·수술·7일 이상 통원·30일 이상 약물 복용</li><li>최근 10년 — 암·뇌혈관·심혈관·간경화·당뇨 등</li></ul><h3>분쟁 핵심</h3><ul><li>인과관계 입증 — 위반 사항이 보험사고와 직접 인과 있는지</li><li>중과실 vs 단순 누락 — 의도성 여부</li><li>전문 의학 자료로 반박 가능</li></ul>' },

    { type: 'h2', id: 'mistakes', text: '자주 하는 실수' },
    { type: 'body', html: '<ul><li>거절 통보 후 6개월 방치 → 청구권 소멸시효 3년 임박 시 분쟁조정 어려움</li><li>감정적 항의 → 객관적 자료 제시 부족</li><li>변호사 선임 즉시 → 1·2단계 무료 절차 건너뜀</li><li>의사 소견서 없이 분쟁조정 신청 → 기각 가능</li><li>약관을 본 적 없음 → 분쟁의 출발점은 약관 해석</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '보험사 거절 후 어디부터 신청해야 하나요?', a: '보험사 민원 → 금감원 분쟁조정 순서. 변호사 즉시 선임은 비효율.' },
      { q: '금감원 분쟁조정이 무료인가요?', a: '네. 무료. 인지대·송달료·변호사비 모두 없음.' },
      { q: '분쟁조정 결과를 보험사가 거부하면?', a: '2,000만원 이하 사건은 보험사 의무 수락. 그 외는 거부 가능 → 소송으로.' },
      { q: '청구 거절 사유서를 안 줘요.', a: '보험사 약관상 거절 사유 통보 의무. 서면 요청 가능. 거부 시 금감원에 민원.' },
      { q: '소송 가는 게 의미가 있나요?', a: '청구액 1,000만원 이상 + 명백한 약관 위반이면 의미. 그 이하는 비용 대비 효용 낮음.' },
      { q: '고지의무 위반은 어떻게 인정·반박되나요?', a: '인과관계 + 중과실 입증이 핵심. 의학 자료로 반박. 단순 누락은 위반 아님.' },
      { q: '치료 중인데 분쟁 걸리면 어떻게 해야 하나요?', a: '치료는 우선 진행. 분쟁조정은 별도. 분쟁 결과에 따라 추후 보험금 정산.' },
      { q: '분쟁 기간 동안 다른 보험사로 옮기면 영향 있나요?', a: '진행 중인 분쟁은 계속됨. 새 가입은 별도. 단 분쟁 이력이 신규 인수 심사에 영향 가능.' },
    ]},

    { type: 'sources', items: [
      { label: '금감원 금융분쟁조정위원회', url: 'https://www.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '한국소비자원', url: 'https://www.kca.go.kr', org: '한국소비자원', accessedAt: '2026-04-27' },
      { label: '대한법률구조공단 무료법률상담', url: 'https://www.klac.or.kr', org: '대한법률구조공단', accessedAt: '2026-04-27' },
      { label: '상법 — 보험금 청구권 소멸시효', url: 'https://www.law.go.kr', org: '국가법령정보센터', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

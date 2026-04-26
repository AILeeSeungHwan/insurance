const post = {
  id: 'G0001',
  sections: [
    { type: 'intro', html: '<p><strong>실손의료보험 청구는 영수증·세부내역서·진단서를 보험사에 제출하면 영업일 3~5일 내 지급</strong>되는 절차입니다. 다만 30만원 이상 고액 청구는 진단서가 필요하고, 비급여 항목은 의학적 필요성 입증이 요구됩니다. 2024년 10월 25일 시행된 <strong>실손보험 청구 간소화법</strong>으로 환자 동의 시 병원이 직접 보험사로 진료정보를 전송할 수 있어, 단순 외래 청구는 거의 자동화되었습니다.</p><p>이 글은 실손 청구의 단계별 절차, 필요 서류, 청구 경로(앱·간소화법·종이), 자주 거절되는 사례와 재청구 방법, 보험금 청구권 소멸시효(3년)까지 실전 정보로 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험상품을 판매·모집하지 않습니다. 청구 시 약관에 따라 보험사별 세부 절차가 다를 수 있습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'background', text: '실손 청구 시스템 — 2024년 이후 큰 변화' },
    { type: 'body', html: '<p>2024년 10월 25일부터 시행된 <strong>실손보험 청구 간소화법</strong>(보험업법 일부개정)으로 환자가 동의하면 병원이 직접 보험사 시스템에 진료 정보를 전송할 수 있게 됐습니다. 환자는 영수증·세부내역서를 별도로 모을 필요 없이 모바일 앱에서 청구가 자동 처리됩니다.</p><p>다만 모든 병원이 동일 시점에 시스템 연동된 것은 아니며, 단계적 확대 중입니다. 종합병원·상급종합병원은 우선 적용, 의원급은 점진 적용. 청구 전 해당 병원이 간소화 시스템에 가입했는지 확인 권장.</p>' },

    { type: 'h2', id: 'steps', text: '단계별 청구 절차' },
    { type: 'body', html: '<ol><li><strong>진료·치료 후 영수증 수령</strong> — 병원·약국에서 진료비 영수증 (원본). 30만원 이상이면 진료비 세부내역서 동시 요청.</li><li><strong>진단서 발급 (해당 시)</strong> — 입원·고액·반복 청구는 진단서 추가. 발급 비용 약 1~3만원.</li><li><strong>청구 경로 선택</strong> — 앱(소액·간소화법) / 팩스 / 우편 / 청구 간소화 자동 전송 중 선택.</li><li><strong>청구 접수</strong> — 보험사 앱에 영수증·세부내역서 사진 업로드 또는 자동 전송 동의.</li><li><strong>심사</strong> — 영업일 3~5일. 추가 서류 요청 시 지연 가능.</li><li><strong>지급</strong> — 등록된 본인 계좌로 입금. 지급 명세서는 앱에서 확인.</li></ol>' },

    { type: 'h2', id: 'documents', text: '청구 시 필요 서류' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">청구 유형</th><th style="padding:8px;border:1px solid #E5E7EB">필수 서류</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">3만원 이하 외래</td><td style="padding:8px;border:1px solid #E5E7EB">영수증 사진만 (간소화법 적용 시 자동)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">3~30만원 외래</td><td style="padding:8px;border:1px solid #E5E7EB">영수증 + 진료비 세부내역서</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">30만원 이상 외래</td><td style="padding:8px;border:1px solid #E5E7EB">영수증 + 세부내역서 + 진단서 또는 소견서</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">입원</td><td style="padding:8px;border:1px solid #E5E7EB">영수증 + 세부내역서 + 진단서 + 입퇴원 확인서</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">처방조제</td><td style="padding:8px;border:1px solid #E5E7EB">약제비 영수증 + 처방전 사본</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">비급여(도수·MRI·주사)</td><td style="padding:8px;border:1px solid #E5E7EB">위 + 의학적 필요성 소견서 권장</td></tr></table>' },

    { type: 'h2', id: 'channels', text: '청구 경로별 비교' },
    { type: 'body', html: '<h3>① 모바일 앱 (가장 빠름)</h3><p>각 보험사 다이렉트 앱에서 영수증 사진 업로드. AI OCR로 자동 입력. 30만원 이하 소액은 영업일 1~3일 내 지급.</p><h3>② 청구 간소화 시스템 (자동)</h3><p>2024.10.25 시행. 병원에서 환자 동의 시 자동 전송. 환자는 별도 서류 제출 불필요. 단순 외래·소액 청구에 최적.</p><h3>③ 우편·팩스 (전통 방식)</h3><p>고액·복잡한 청구나 분쟁 사례에 적합. 원본 서류 보관 가능. 영업일 5~10일 소요.</p><h3>④ 콜센터 + 종이 청구</h3><p>고령 가입자·디지털 어려움 시. 보험사 콜센터 상담 후 청구서 양식 우편 송부.</p>' },

    { type: 'h2', id: 'check', text: '청구 전 체크리스트' },
    { type: 'callout', html: '<ul><li>☐ 영수증 원본 보관 (분실 시 재발급 1~2주 소요)</li><li>☐ 진료비 세부내역서 발급 받았는가 (30만원 이상 필수)</li><li>☐ 비급여 항목은 의학적 필요성 소견서 받았는가</li><li>☐ 입원이면 입퇴원 확인서 포함</li><li>☐ 보험금 수령 계좌가 본인 명의인가 (가족 계좌 불가)</li><li>☐ 청구권 소멸시효 3년 이내인가</li></ul>' },

    { type: 'h2', id: 'mistakes', text: '자주 발생하는 거절 사례' },
    { type: 'body', html: '<h3>1. 진료비 세부내역서 미제출</h3><p>30만원 이상 청구에서 세부내역서가 빠지면 거절. 병원 원무과·발급 창구에서 재발급 받아 재청구.</p><h3>2. 미용 목적 시술 면책</h3><p>비급여 영양제·태반주사·라식·라섹·비만 시술은 약관상 면책. 치료 목적임이 명확한 경우 의사 소견서 첨부 후 재심사 가능.</p><h3>3. 가입 전 발현 질환</h3><p>가입일로부터 5년 이전 진단된 만성질환의 후속 치료는 면책 가능성. 의사 소견서로 인과관계 입증 시도.</p><h3>4. 면책기간 내 진단</h3><p>가입 후 90일 내 진단된 질환은 보장 제한. 1년 이내라면 50% 감액 가능.</p><h3>5. 한방·외상 치과·정신질환 일부</h3><p>약관 면책 항목은 청구 시 거절. 표준약관에 보장 가능 항목 명시되어 있음.</p>' },

    { type: 'h2', id: 'reapply', text: '거절 후 재청구·이의 신청' },
    { type: 'body', html: '<ol><li>거절 사유서 받기 — 보험사에 서면 요청 가능</li><li>추가 서류 보강 — 의사 소견서·진료 기록·약관 해석 자료</li><li>재청구 — 동일 사유로 한 번 더 가능</li><li>보험사 민원실 → 금감원 분쟁조정 신청 → 한국소비자원 → 소송 단계로 확대</li></ol><p>자세한 분쟁 대응은 <a href="/guides/claim-dispute-guide/">보험금 분쟁 대응 가이드</a> 참조.</p>' },

    { type: 'h2', id: 'limit', text: '청구권 소멸시효와 한도' },
    { type: 'body', html: '<ul><li><strong>청구권 소멸시효</strong> — 사고일로부터 <strong>3년</strong> (상법). 3년 경과 시 청구 불가.</li><li><strong>4세대 연간 한도</strong> — 급여 5,000만원 + 비급여 5,000만원</li><li><strong>비급여 특약 한도</strong> — 도수치료 350만원/350회, 주사제 250만/50회, MRI 300만원</li><li><strong>최소 공제</strong> — 외래 1만(의원)~2만(상급종합), 응급실 비응급 3만, 처방 8천</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '간소화법으로 자동 전송되면 모든 병원에서 가능한가요?', a: '단계적 확대 중입니다. 종합병원·상급종합은 우선 적용. 의원급은 점진 적용. 병원에 사전 확인 권장.' },
      { q: '영수증을 잃어버렸어요. 어떻게 하나요?', a: '병원·약국에서 재발급 가능. 발급 수수료 1~3천원. 통상 1~2주 소요.' },
      { q: '아이 진료비도 부모가 청구할 수 있나요?', a: '가입자가 아이라면 부모가 위임장으로 대리 청구 가능. 위임장 + 가족관계증명서 첨부.' },
      { q: '실손 청구 후 보험료가 오르나요?', a: '4세대는 비급여 청구액·횟수에 따라 등급제(1~4) 적용. 비급여 100만원 이상이면 다음 갱신 보험료 100% 인상 가능. 주계약(급여)은 영향 없음.' },
      { q: '청구 거절 사유서를 못 받았어요.', a: '보험사에 서면 요청 가능. 약관상 거절 사유 통보 의무가 있음.' },
      { q: '도수치료를 매주 받았는데 갑자기 거절됐어요.', a: '의학적 필요성을 인정받지 못한 경우. 의사 소견서·치료 계획서 첨부 후 재청구 가능.' },
      { q: '청구 후 지급까지 얼마나 걸리나요?', a: '3만원 이하 앱 청구: 영업일 1~3일. 30만원 이상 진단서 첨부: 5~7일. 분쟁 건은 2~4주 이상.' },
      { q: '여러 보험사 실손 청구가 가능한가요?', a: '실손은 1인 1실손 원칙으로 동시 가입 불가. 단체+개인 실손이 있더라도 분담 지급(비례).' },
    ]},

    { type: 'sources', items: [
      { label: '실손보험 청구 간소화 — 보험업법 개정', url: 'https://www.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '4세대 실손의료보험 표준약관', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-27' },
      { label: '상법 — 보험금청구권 소멸시효', url: 'https://www.law.go.kr', org: '국가법령정보센터', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

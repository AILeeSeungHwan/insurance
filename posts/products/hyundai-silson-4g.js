const post = {
  id: 'P0002',
  sections: [
    { type: 'intro', html: '<p><strong>현대해상 4세대 실손의료보험은 2021년 7월 이후 시행된 표준약관을 따르는 재가입형(5년) 실손 상품</strong>입니다. 4세대 실손은 보장 약관 자체가 보험업감독규정에 따라 모든 손해보험사 동일하지만, <strong>비급여 3대 특약의 한도·자기부담률·갱신 손해율</strong>에서 회사별 차이가 발생합니다. 또한 청구 시스템(앱·직접정산 제휴 병원망), 콜센터 응대, 분쟁 시 대응 속도가 가입자 체감 만족도에 큰 영향을 줍니다.</p><p>이 글은 현대해상 4세대 실손의 보장 구조, 자기부담금 계산법, 비급여 특약 3종, 30~50대 연령별 월 보험료 예시(공시 기준), 면책기간·재가입·할인할증 등 가입 전 반드시 확인할 사항을 정리합니다. 본 사이트는 이 상품을 판매·모집하지 않으며, 게재 정보는 일반적 설명입니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 최종 가입 조건·보험료는 현대해상 공시실 및 상품설명서를 직접 확인해야 합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>상품 정식명</strong></td><td style="padding:8px;border:1px solid #E5E7EB">스마트건강보험(4세대 실손)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>보험사</strong></td><td style="padding:8px;border:1px solid #E5E7EB">현대해상화재보험</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>세대 / 약관</strong></td><td style="padding:8px;border:1px solid #E5E7EB">4세대 (2021년 7월 표준약관 시행)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>갱신 / 재가입 주기</strong></td><td style="padding:8px;border:1px solid #E5E7EB">갱신 1년 / 재가입 5년</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>가입 가능 연령</strong></td><td style="padding:8px;border:1px solid #E5E7EB">0세~65세 (만 나이 기준, 일부 채널 70세까지)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>자기부담률</strong></td><td style="padding:8px;border:1px solid #E5E7EB">급여 20% / 비급여 30% (4세대 표준)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>최소 공제금액</strong></td><td style="padding:8px;border:1px solid #E5E7EB">외래 1만원(의원)~2만원(상급종합), 응급실 비응급 3만원, 처방 8천원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>연간 보장한도</strong></td><td style="padding:8px;border:1px solid #E5E7EB">급여 5,000만원 / 비급여 5,000만원 (입원·통원 합산)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>면책기간</strong></td><td style="padding:8px;border:1px solid #E5E7EB">90일 (보장 개시일 이후)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>공시 기준일</strong></td><td style="padding:8px;border:1px solid #E5E7EB">2026-01-01</td></tr></table>' },

    { type: 'h2', id: 'what', text: '4세대 실손이란' },
    { type: 'body', html: '<p>4세대 실손의료보험은 2021년 7월 1일 이후 모든 손해보험사가 따라야 하는 <strong>표준화된 약관</strong>입니다. 보험업감독규정에 따라 보장 범위·자기부담률·재가입 주기는 회사 간 동일합니다. 이전 세대(1·2·3세대)와 가장 다른 점은 다음 세 가지입니다.</p><ul><li><strong>급여·비급여 분리</strong>: 주계약(급여)과 특약(비급여 3종) 구조로 분리</li><li><strong>자기부담률 상향</strong>: 급여 20%, 비급여 30% (이전은 10~20%)</li><li><strong>비급여 이용량 등급제</strong>: 비급여 청구 횟수·금액에 따라 갱신 보험료 1~4등급 차등 (할인 ~5%, 할증 +100~300%)</li></ul><p>현대해상 스마트건강보험은 이 표준약관을 그대로 따르되, <strong>현대해상 다이렉트 채널의 할인·청구 시스템(Hi-Care 앱)</strong> 등에서 회사 고유의 가입자 편의 기능을 제공합니다.</p>' },

    { type: 'h2', id: 'main-cover', text: '주계약 보장 — 급여 의료비' },
    { type: 'body', html: '<h3 id="m1">입원 급여 의료비</h3><p>국민건강보험 적용 후 본인부담금의 <strong>80%를 보상</strong>(연 5,000만원 한도). 자기부담은 20%이며, 별도의 최소 공제금액은 없습니다. 상급종합병원 입원 시에도 동일 비율 적용.</p><h3 id="m2">통원 급여 의료비</h3><p>외래 진료비 본인부담금의 80%를 보상하되, <strong>최소 공제금액 1~2만원</strong>(의원 1만/병원 1.5만/상급종합 2만)을 차감하고 지급. 일 1회 한도, 연 180회까지.</p><h3 id="m3">처방조제 급여 의료비</h3><p>약국 처방 약제비 본인부담금의 80%를 보상하되, <strong>건당 최소 공제 8,000원</strong>. 연 180회까지.</p><h3 id="m4">응급실 비응급 — 자기부담 가중</h3><p>응급의료센터에 비응급으로 방문할 경우 자기부담 비율이 올라갑니다(최소 공제 3만원). 대학병원·상급종합 응급실 비응급 방문은 가능한 피하는 것이 합리적입니다.</p>' },

    { type: 'h2', id: 'riders', text: '비급여 3대 특약 — 회사 간 차이가 발생하는 영역' },
    { type: 'body', html: '<p>4세대 실손에서 회사별 차이가 발생하는 핵심 영역입니다. 보장 한도·자기부담률은 표준약관 범위 내에서 회사가 일부 조정 가능합니다.</p><h3 id="r1">① 비급여 도수치료·체외충격파·증식치료 특약</h3><ul><li>연간 보장한도: <strong>350만원 (350회까지)</strong></li><li>자기부담률 30% + 회당 최소 공제 3만원</li><li>물리치료·통증의학과·정형외과에서 자주 청구되는 항목</li></ul><h3 id="r2">② 비급여 주사제 특약</h3><ul><li>연간 보장한도: <strong>250만원 (50회까지)</strong></li><li>자기부담률 30% + 회당 최소 공제 3만원</li><li>비타민·마늘·태반 주사 등은 식약처 허가 범위 외 사용 시 제외 가능</li></ul><h3 id="r3">③ 비급여 자기공명영상진단(MRI/MRA) 특약</h3><ul><li>연간 보장한도: <strong>300만원</strong></li><li>자기부담률 30%</li><li>의학적 필요성 인정 검사만 보장 (단순 검진 목적은 면책)</li></ul>' },
    { type: 'info', title: '특약은 선택 가입', html: '<p>3대 비급여 특약은 별도로 가입 여부를 선택할 수 있습니다. 비급여 이용이 거의 없다면 주계약만 가입하는 편이 보험료가 30~40% 저렴합니다.</p>' },

    { type: 'h2', id: 'grade', text: '비급여 이용량 1~4등급 — 갱신 보험료 영향' },
    { type: 'body', html: '<p>4세대 실손은 직전 1년간의 비급여 청구 실적에 따라 다음 갱신 시 1~4등급으로 분류되어 보험료가 차등 적용됩니다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">등급</th><th style="padding:8px;border:1px solid #E5E7EB">조건 (직전 1년 비급여)</th><th style="padding:8px;border:1px solid #E5E7EB">갱신 보험료 영향</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB;text-align:center">1등급</td><td style="padding:8px;border:1px solid #E5E7EB">비급여 청구 0건</td><td style="padding:8px;border:1px solid #E5E7EB">기준 보험료의 약 -5%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB;text-align:center">2등급</td><td style="padding:8px;border:1px solid #E5E7EB">100만원 미만</td><td style="padding:8px;border:1px solid #E5E7EB">기준 보험료 (할인·할증 없음)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB;text-align:center">3등급</td><td style="padding:8px;border:1px solid #E5E7EB">100~300만원</td><td style="padding:8px;border:1px solid #E5E7EB">+100% 수준</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB;text-align:center">4등급</td><td style="padding:8px;border:1px solid #E5E7EB">300만원 이상</td><td style="padding:8px;border:1px solid #E5E7EB">+300% 수준</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">※ 등급제는 비급여 특약에만 적용되며 주계약(급여) 보험료는 영향받지 않습니다.</p>' },

    { type: 'h2', id: 'premium', text: '연령·성별별 월 보험료 예시 (공시 기준일 2026-01-01)' },
    { type: 'body', html: '<p>다음은 현대해상 공시실 자료를 바탕으로 추정한 일반적 범위입니다. 실제 보험료는 직업급수·건강고지·기존 가입 이력에 따라 ±10~30% 달라질 수 있습니다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">연령·성별</th><th style="padding:8px;border:1px solid #E5E7EB">주계약만 (월)</th><th style="padding:8px;border:1px solid #E5E7EB">3대 특약 포함 (월)</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">30대 남성</td><td style="padding:8px;border:1px solid #E5E7EB">9,500~11,500원</td><td style="padding:8px;border:1px solid #E5E7EB">13,500~16,500원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">30대 여성</td><td style="padding:8px;border:1px solid #E5E7EB">10,500~12,500원</td><td style="padding:8px;border:1px solid #E5E7EB">14,500~17,500원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">40대 남성</td><td style="padding:8px;border:1px solid #E5E7EB">12,500~15,000원</td><td style="padding:8px;border:1px solid #E5E7EB">17,500~21,500원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">40대 여성</td><td style="padding:8px;border:1px solid #E5E7EB">13,000~15,500원</td><td style="padding:8px;border:1px solid #E5E7EB">18,000~22,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">50대 남성</td><td style="padding:8px;border:1px solid #E5E7EB">19,000~24,000원</td><td style="padding:8px;border:1px solid #E5E7EB">26,500~32,500원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">50대 여성</td><td style="padding:8px;border:1px solid #E5E7EB">19,500~24,500원</td><td style="padding:8px;border:1px solid #E5E7EB">27,000~33,000원</td></tr></table>' },

    { type: 'h2', id: 'enrollment', text: '가입 조건 / 건강고지 / 직업급수' },
    { type: 'body', html: '<h3>건강고지 의무 — 5년 / 10년 룰</h3><ul><li>최근 <strong>3개월 이내</strong> 의사 진료·진단·치료·투약·검사 권유 사실</li><li>최근 <strong>1년 이내</strong> 추가검사·재검사 받은 사실</li><li>최근 <strong>5년 이내</strong> 입원·수술·7일 이상 통원·30일 이상 약물 복용</li><li>최근 <strong>10년 이내</strong> 암·뇌혈관·심혈관·간경화·당뇨 등 중대질환 진단</li></ul><p>고지 누락은 보장 거절 또는 계약 해지 사유가 됩니다. 모호하면 청약서에 "기록함"으로 기재하고 인수 심사를 받는 것이 안전합니다.</p><h3>직업급수 — 1~3급 가입 가능</h3><p>위험직군(고소작업·광산·항공·잠수 등 4~5급)은 가입 제한 또는 보험료 가산. 사무직·대부분 서비스직은 1급으로 표준 보험료가 적용됩니다.</p>' },

    { type: 'warning', title: '면책사항·주의 — 4세대 표준', html: '<ul><li>미용·성형·라식·라섹·비만 관련 시술 (비급여 영양제·태반주사 일부 제외)</li><li>일반 건강검진·예방접종 (법정 전염병 치료 제외)</li><li>치과 임플란트·치과 교정·치아 미백</li><li>한약·한방 비급여 (건강보험 적용 한약은 일부 보장)</li><li>면책기간(90일) 내 진단된 질환의 후속 치료</li><li>가입 전 발현 질환 — 고지 누락 시 보장 거절</li><li>해외 진료비 (별도 해외여행자보험 영역)</li></ul>' },

    { type: 'h2', id: 'claim', text: '청구 절차 — Hi-Care 앱 중심' },
    { type: 'body', html: '<h3>3만원 이하 소액 — 앱 간편청구</h3><p>현대해상 Hi-Care 앱에서 영수증·진료비 세부내역서 사진을 업로드하면 영업일 기준 3~5일 내 지급. 별도 서류 없이 모바일로 완결.</p><h3>30만원 이상 고액 — 진단서 필요</h3><p>진단서·진료비 영수증·세부내역서·약제비 영수증을 모두 첨부. 입원 시 입퇴원 확인서 추가. 앱 또는 우편·팩스 제출 가능.</p><h3>실손보험 청구 간소화법 — 2024년 시행</h3><p>2024년 10월 25일부터 시행된 실손보험 청구 간소화법에 따라 환자가 동의하면 병원이 직접 보험사로 진료 정보를 전송할 수 있게 됐습니다. 다만 모든 병원이 즉시 적용되는 것은 아니므로 해당 병원에 사전 확인 필요.</p><p>자세한 단계는 <a href="/guides/silson-claim-howto/">실손 청구 단계별 가이드</a>를 참조하세요.</p>' },

    { type: 'h2', id: 'compare', text: '타사 4세대 실손과의 차이' },
    { type: 'body', html: '<p>4세대 표준약관이라 보장 자체는 동일하지만 다음 항목에서 차이가 발생합니다.</p><ul><li><strong>비급여 특약 한도 표시 방식</strong> — 연 한도/회당 한도 분배 차이</li><li><strong>청구 시스템 편의성</strong> — 앱 UI, 직접 정산 제휴 병원 수, AI OCR 인식률</li><li><strong>갱신 보험료 손해율</strong> — 직전 사업연도 회사 손해율에 따라 갱신 변동폭</li><li><strong>다이렉트 채널 할인</strong> — 보험사별 다이렉트 가입 시 5~15% 추가 할인</li><li><strong>고객 민원 지표</strong> — 금감원 보험소비자 민원평가 지표 참조</li></ul><p>회사별 정량 비교는 <a href="/compare/silson-2026/">2026 실손의료보험 비교</a>를 확인하세요.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '기존 1·2·3세대 실손과 동시 가입 가능한가요?', a: '불가능합니다. 실손은 1인 1실손 원칙으로 한 사람이 동시에 두 개 가입할 수 없습니다. 4세대로 갈아탈 경우 기존 계약 해지가 선결됩니다.' },
      { q: '갈아타면 면책기간 90일이 초기화되나요?', a: '네. 신규 가입과 동일하게 가입일로부터 90일 면책이 적용됩니다. 다만 기존 실손에서 보장받던 동일 질환의 연속 치료는 일정 조건에서 면책 예외가 인정될 수 있습니다.' },
      { q: '비급여 도수치료를 자주 받으면 어떻게 되나요?', a: '직전 1년 비급여 청구액이 100만원 이상이면 3등급(+100%), 300만원 이상이면 4등급(+300%)으로 분류됩니다. 등급은 비급여 특약 보험료에만 적용되며 주계약은 영향 없습니다.' },
      { q: '재가입 5년이 되면 새 약관이 적용되나요?', a: '네. 재가입 시점의 표준약관(예: 5세대가 나오면 5세대 약관)이 적용될 수 있습니다. 단 재가입은 무심사 보장 연속이 원칙입니다.' },
      { q: '도수치료 1회 비용이 10만원이면 얼마 받나요?', a: '회당 최소 공제 3만원을 차감 후 70%를 보상합니다. 10만원 - 3만원 = 7만원 × 70% = 약 4만 9천원 지급.' },
      { q: 'Hi-Care 앱은 안드로이드·iOS 모두 가능한가요?', a: '네. 양 플랫폼 모두 지원하며 카카오·네이버 간편로그인이 가능합니다.' },
      { q: '다른 회사 실손에서 옮길 때 손실이 큰가요?', a: '4세대로 옮기면 자기부담률이 올라가 보장 강도는 줄지만 보험료가 낮아집니다. 비급여 이용이 적으면 유리, 많으면 불리합니다.' },
      { q: '직장 단체실손이 있는데 추가 가입해야 하나요?', a: '단체실손은 퇴직 시 종료됩니다. 퇴직 전 개인실손 전환 또는 신규 가입을 검토해야 보장 공백이 없습니다.' },
    ]},

    { type: 'sources', items: [
      { label: '현대해상 공시실 — 스마트건강보험', url: 'https://www.hi.co.kr', org: '현대해상화재보험', accessedAt: '2026-04-27' },
      { label: '손해보험협회 공시실 — 실손의료보험', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-27' },
      { label: '금융감독원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '보험업감독규정 — 4세대 실손 표준약관', url: 'https://www.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

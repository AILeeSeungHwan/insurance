const post = {
  id: 'P0001',
  sections: [
    { type: 'intro', html: '<p><strong>삼성화재 착한실손의료비보험은 4세대 실손의료보험 표준약관을 따르는 손해보험사 1위 회사의 대표 상품</strong>입니다. 4세대 실손은 보장 약관이 모든 보험사에 표준화되어 있어 보장 범위 자체는 동일하지만, <strong>비급여 특약 한도, 다이렉트 할인, 청구 시스템(애니카·앱), 갱신 손해율, 민원 처리 속도</strong>에서 회사별 차이가 발생합니다.</p><p>이 글은 삼성화재 4세대 실손의 보장 구조, 자기부담금 계산, 비급여 3대 특약, 30~50대 연령별 월 보험료 예시(공시 기준일 2026-01-01), 면책기간·재가입·비급여 등급제까지 가입 전 반드시 확인할 사항을 정리합니다. 본 사이트는 이 상품을 판매·모집하지 않습니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 최종 가입 조건·보험료는 삼성화재 공시실 및 상품설명서를 직접 확인해야 합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>상품 정식명</strong></td><td style="padding:8px;border:1px solid #E5E7EB">착한실손의료비보험(4세대)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>보험사</strong></td><td style="padding:8px;border:1px solid #E5E7EB">삼성화재해상보험</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>세대 / 약관</strong></td><td style="padding:8px;border:1px solid #E5E7EB">4세대 (2021년 7월 표준약관 시행)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>갱신 / 재가입 주기</strong></td><td style="padding:8px;border:1px solid #E5E7EB">갱신 1년 / 재가입 5년</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>가입 가능 연령</strong></td><td style="padding:8px;border:1px solid #E5E7EB">0세~65세 (다이렉트 채널 70세까지)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>자기부담률</strong></td><td style="padding:8px;border:1px solid #E5E7EB">급여 20% / 비급여 30%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>최소 공제금액</strong></td><td style="padding:8px;border:1px solid #E5E7EB">외래 1만원(의원)~2만원(상급종합), 응급실 비응급 3만원, 처방 8천원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>연간 보장한도</strong></td><td style="padding:8px;border:1px solid #E5E7EB">급여 5,000만원 / 비급여 5,000만원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>면책기간</strong></td><td style="padding:8px;border:1px solid #E5E7EB">90일 (보장 개시 후)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>공시 기준일</strong></td><td style="padding:8px;border:1px solid #E5E7EB">2026-01-01</td></tr></table>' },

    { type: 'h2', id: 'what', text: '4세대 표준약관 — 회사 간 동일한 부분' },
    { type: 'body', html: '<p>4세대 실손은 보험업감독규정에 따라 모든 손해보험사가 동일한 표준약관을 사용합니다. 다음 항목은 삼성화재·현대해상·DB손해보험·KB손해보험·메리츠화재 모두 동일합니다.</p><ul><li>주계약(급여)·특약(비급여) 분리 구조</li><li>자기부담률 (급여 20% / 비급여 30%)</li><li>연간 보장한도 (급여 5,000 / 비급여 5,000만원)</li><li>최소 공제금액 (외래·처방·응급실)</li><li>비급여 3대 특약(도수치료·주사제·MRI) 한도 상한</li><li>비급여 이용량 1~4등급 차등 보험료</li><li>면책기간 90일</li><li>재가입 주기 5년</li></ul><p>따라서 "어느 회사가 더 보장이 좋다"는 명제는 4세대에서는 성립하지 않으며, 차별 포인트는 보험료·청구 편의성·갱신 손해율·고객만족 지표에서 발생합니다.</p>' },

    { type: 'h2', id: 'main-cover', text: '주계약 보장 — 급여 의료비' },
    { type: 'body', html: '<h3 id="m1">입원 급여 의료비</h3><p>국민건강보험 적용 후 본인부담금의 <strong>80%를 보상</strong>(연 5,000만원 한도). 자기부담은 20%이며 별도 최소 공제금액은 없습니다. 입원실 차액(상급병실료)은 50%만 보상되고 1일 10만원 한도.</p><h3 id="m2">통원 급여 의료비</h3><p>외래 진료비 본인부담금의 80%, 단 <strong>최소 공제금액 1~2만원</strong>(의원 1만/병원 1.5만/상급종합 2만)을 차감. 일 1회, 연 180회까지.</p><h3 id="m3">처방조제 급여 의료비</h3><p>약국 처방 약제비 본인부담금의 80%, 건당 최소 공제 8,000원. 연 180회.</p><h3 id="m4">응급실 비응급 — 자기부담 가중</h3><p>응급의료센터를 비응급 사유로 방문 시 최소 공제 3만원 차감. 단순 감기·소화불량 등으로 응급실을 이용하면 사실상 자기부담이 큽니다.</p>' },

    { type: 'h2', id: 'riders', text: '비급여 3대 특약 — 회사별 차이 발생' },
    { type: 'body', html: '<h3 id="r1">① 도수치료·체외충격파·증식치료 특약</h3><ul><li>연간 보장한도 <strong>350만원 (350회)</strong></li><li>자기부담률 30% + 회당 최소 공제 3만원</li><li>예: 도수치료 10만원 → 3만원 공제 후 7만원 × 70% = 49,000원 지급</li></ul><h3 id="r2">② 비급여 주사제 특약</h3><ul><li>연간 보장한도 <strong>250만원 (50회)</strong></li><li>자기부담률 30% + 회당 최소 공제 3만원</li><li>식약처 허가 범위 외(미용 목적 비타민·태반 주사 등)는 면책</li></ul><h3 id="r3">③ 비급여 MRI/MRA 특약</h3><ul><li>연간 보장한도 <strong>300만원</strong></li><li>자기부담률 30%</li><li>의학적 필요성 입증 (단순 검진은 면책)</li></ul>' },
    { type: 'info', title: '비급여 특약은 선택 가입', html: '<p>비급여 이용 빈도가 낮은 분은 주계약만 가입하면 보험료가 30~40% 저렴합니다. 단 도수치료·MRI 등 큰 비용이 발생할 가능성이 있다면 특약 추가가 안전합니다.</p>' },

    { type: 'h2', id: 'grade', text: '비급여 등급제 — 갱신 보험료 1~4등급' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">등급</th><th style="padding:8px;border:1px solid #E5E7EB">조건</th><th style="padding:8px;border:1px solid #E5E7EB">갱신 영향</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB;text-align:center">1</td><td style="padding:8px;border:1px solid #E5E7EB">비급여 청구 0건</td><td style="padding:8px;border:1px solid #E5E7EB">약 -5%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB;text-align:center">2</td><td style="padding:8px;border:1px solid #E5E7EB">100만원 미만</td><td style="padding:8px;border:1px solid #E5E7EB">기준</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB;text-align:center">3</td><td style="padding:8px;border:1px solid #E5E7EB">100~300만원</td><td style="padding:8px;border:1px solid #E5E7EB">+100%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB;text-align:center">4</td><td style="padding:8px;border:1px solid #E5E7EB">300만원 이상</td><td style="padding:8px;border:1px solid #E5E7EB">+300%</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">등급제는 비급여 특약 보험료에만 적용됩니다.</p>' },

    { type: 'h2', id: 'premium', text: '연령·성별별 월 보험료 (공시 기준일 2026-01-01)' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">연령·성별</th><th style="padding:8px;border:1px solid #E5E7EB">주계약만</th><th style="padding:8px;border:1px solid #E5E7EB">3대 특약 포함</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">30대 남성</td><td style="padding:8px;border:1px solid #E5E7EB">9,000~11,000원</td><td style="padding:8px;border:1px solid #E5E7EB">13,000~16,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">30대 여성</td><td style="padding:8px;border:1px solid #E5E7EB">10,000~12,000원</td><td style="padding:8px;border:1px solid #E5E7EB">14,000~17,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">40대 남성</td><td style="padding:8px;border:1px solid #E5E7EB">12,000~14,500원</td><td style="padding:8px;border:1px solid #E5E7EB">17,000~21,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">40대 여성</td><td style="padding:8px;border:1px solid #E5E7EB">12,500~15,000원</td><td style="padding:8px;border:1px solid #E5E7EB">17,500~21,500원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">50대 남성</td><td style="padding:8px;border:1px solid #E5E7EB">18,500~23,500원</td><td style="padding:8px;border:1px solid #E5E7EB">26,000~32,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">50대 여성</td><td style="padding:8px;border:1px solid #E5E7EB">19,000~24,000원</td><td style="padding:8px;border:1px solid #E5E7EB">26,500~32,500원</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">실제 보험료는 직업급수·건강고지·기존 가입이력에 따라 ±10~30% 달라집니다.</p>' },

    { type: 'h2', id: 'enrollment', text: '가입 조건 / 건강고지' },
    { type: 'body', html: '<h3>건강고지 — 5/10년 룰</h3><ul><li>최근 3개월 — 의사 진료·진단·치료·투약·검사 권유</li><li>최근 1년 — 추가검사·재검사</li><li>최근 5년 — 입원·수술·7일 이상 통원·30일 이상 약물 복용</li><li>최근 10년 — 암·뇌혈관·심혈관·간경화·당뇨 등 중대질환</li></ul><p>고지 누락은 보장 거절·계약 해지 사유. 모호하면 청약서에 기재 후 인수 심사를 받는 것이 안전합니다.</p><h3>다이렉트 채널 가입 시 추가 할인</h3><p>삼성화재 다이렉트 가입 시 5~10% 추가 할인 가능. 대면 채널 대비 사업비가 낮아 보험료가 저렴합니다.</p>' },

    { type: 'warning', title: '면책사항·주의', html: '<ul><li>미용·성형·라식·라섹·비만 시술</li><li>일반 건강검진·예방접종 (법정 전염병 치료 제외)</li><li>치과 임플란트·교정·미백</li><li>한방 비급여 (건강보험 적용 일부만 보장)</li><li>면책기간(90일) 내 진단된 질환의 후속 치료</li><li>해외 치료비 (별도 해외여행자보험 영역)</li><li>고지 누락 질환 — 보장 거절 + 계약 해지 가능</li></ul>' },

    { type: 'h2', id: 'claim', text: '청구 절차 — 다이렉트 앱·전화·우편' },
    { type: 'body', html: '<h3>3만원 이하 — 모바일 간편청구</h3><p>삼성화재 다이렉트 앱에서 영수증·세부내역서 사진 업로드. 영업일 3~5일 내 지급. AI OCR 인식으로 입력 자동화.</p><h3>30만원 이상 — 진단서 첨부</h3><p>진단서·진료비 영수증·세부내역서·약제비 영수증 모두 제출. 입원은 입퇴원 확인서 추가.</p><h3>실손보험 청구 간소화 — 2024.10 시행</h3><p>병원이 직접 보험사로 진료정보를 전송하는 구조. 환자 동의 + 해당 병원 시스템 연동 시 가능.</p><p>자세한 단계: <a href="/guides/silson-claim-howto/">실손 청구 단계별 가이드</a></p>' },

    { type: 'h2', id: 'compare', text: '타사 4세대와 비교 시 보는 포인트' },
    { type: 'body', html: '<ul><li>비급여 특약 한도 한도 분배 방식</li><li>다이렉트 채널 할인폭</li><li>앱 청구 편의성 / 직접 정산 제휴 병원 수</li><li>갱신 보험료 손해율 (직전 사업연도)</li><li>고객 민원 지표 (금감원 보험소비자 민원평가)</li></ul><p>회사별 정량 비교: <a href="/compare/silson-2026/">2026 실손의료보험 비교</a></p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '기존 1·2·3세대 실손과 동시 가입 가능한가요?', a: '불가능. 1인 1실손 원칙. 4세대 가입 시 기존 계약 해지 필요.' },
      { q: '갈아타면 면책기간 90일이 다시 적용되나요?', a: '네. 신규 가입과 동일하게 90일 면책. 단 동일 질환 연속 치료는 일정 조건에서 면책 예외 인정 가능.' },
      { q: '비급여 도수치료를 자주 받으면 보험료가 얼마나 오르나요?', a: '직전 1년 100~300만원이면 3등급(+100%), 300만원 이상이면 4등급(+300%). 비급여 특약 보험료에만 적용.' },
      { q: '재가입 5년 시점에 거절될 수 있나요?', a: '재가입은 무심사·계속가입이 원칙입니다. 약관은 그 시점 표준약관으로 변경 가능.' },
      { q: '도수치료 1회 10만원이면 얼마 받나요?', a: '회당 공제 3만원 차감 후 70%: (10만원 - 3만원) × 70% = 49,000원.' },
      { q: '직장 단체실손이 있으면 추가 가입 안 해도 되나요?', a: '단체실손은 퇴직 시 종료. 퇴직 전 개인실손 전환 또는 신규 가입 검토 필요.' },
      { q: '가입 후 직업이 위험직군으로 바뀌면?', a: '직업 변경 사실은 보험사에 통지해야 합니다. 통지 누락 시 보험금 지급 거절 사유.' },
      { q: '실손은 2개 가입하면 두 배 받나요?', a: '실손은 비례보상. 2개 가입했더라도 실제 의료비 한도 내에서만 분담 지급됩니다.' },
    ]},

    { type: 'sources', items: [
      { label: '삼성화재 공시실', url: 'https://www.samsungfire.com', org: '삼성화재해상보험', accessedAt: '2026-04-27' },
      { label: '손해보험협회 공시실 — 실손의료보험', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-27' },
      { label: '금융감독원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '보험업감독규정 — 4세대 실손 표준약관', url: 'https://www.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

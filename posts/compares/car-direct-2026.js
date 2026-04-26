const post = {
  id: 'M0002',
  sections: [
    { type: 'intro', html: '<p><strong>2026년 자동차보험 다이렉트 시장은 삼성화재·현대해상·DB손해보험·KB손해보험·메리츠화재 5대 손해보험사가 80% 이상 점유</strong>합니다. 자동차보험은 약관·담보가 사실상 표준화되어 있어 보장 자체에는 회사 간 차이가 거의 없습니다. 차별 포인트는 다이렉트 사업비 절감폭, 할인 조합(마일리지·티맵·블랙박스 등), 사고 출동 응대 시간, 보험금 분쟁 처리 속도, 운전자보험·실손 묶음 가입 시 할인 등에서 발생합니다.</p><p>이 글은 5대 손해보험사 다이렉트 자동차보험을 동일 조건(30대 남성·중형차·무사고 3년)으로 비교한 매트릭스, 회사별 차별 포인트, 할인 조합 효율, 사고 처리 평균 응대 시간을 공시 자료 기준으로 정리합니다. 본 사이트는 보험상품을 판매·모집하지 않으며, 모든 수치는 공시 기준일 2026-01-01의 일반적 범위 추정입니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 실제 청약 보험료는 차량등급·운전경력·할인 조합·사고이력에 따라 ±30~50% 변동 가능. 정확한 견적은 각 회사 다이렉트에서 확인하세요.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'standard', text: '담보 자체는 회사 간 거의 동일' },
    { type: 'body', html: '<p>자동차보험은 자동차손해배상보장법(자배법)과 표준약관에 따라 다음 항목이 모든 회사 동일합니다.</p><ul><li>대인배상Ⅰ 의무가입 한도 (사망 1.5억, 부상 1급 3,000만)</li><li>대물 의무가입 최소 한도 2,000만원</li><li>대인Ⅱ 무한 가입 가능 (임의보험)</li><li>자기차량·자기신체·자동차상해·무보험차상해 약관</li><li>할인할증등급 시스템 (보험사 간 공유)</li><li>임시운전자·가족한정·1인한정 특약 약관</li></ul><p>따라서 "어느 회사가 더 잘 보장한다"는 단정은 자동차보험에서도 성립하지 않습니다.</p>' },

    { type: 'h2', id: 'matrix', text: '5대 다이렉트 비교 매트릭스 — 30대 남성·중형·무사고 3년' },
    { type: 'body', html: '<p>아래는 일반적 범위 추정. 차량등급·운전경력·할인 조합·지역·차량연식에 따라 ±30% 변동 가능.</p><table style="width:100%;border-collapse:collapse;font-size:13px"><tr style="background:#F3F4F6"><th style="padding:6px;border:1px solid #E5E7EB">보험사</th><th style="padding:6px;border:1px solid #E5E7EB">기본 견적 (연)</th><th style="padding:6px;border:1px solid #E5E7EB">풀할인 (연)</th><th style="padding:6px;border:1px solid #E5E7EB">대표 안전운전 앱</th><th style="padding:6px;border:1px solid #E5E7EB">출동 평균</th></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">삼성화재 애니카</td><td style="padding:6px;border:1px solid #E5E7EB">75~95만원</td><td style="padding:6px;border:1px solid #E5E7EB">55~75만원</td><td style="padding:6px;border:1px solid #E5E7EB">티맵 안전운전</td><td style="padding:6px;border:1px solid #E5E7EB">30~60분</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">현대해상 하이카</td><td style="padding:6px;border:1px solid #E5E7EB">75~95만원</td><td style="padding:6px;border:1px solid #E5E7EB">55~75만원</td><td style="padding:6px;border:1px solid #E5E7EB">Hi-Car Drive</td><td style="padding:6px;border:1px solid #E5E7EB">30~60분</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">DB손해보험 다이렉트</td><td style="padding:6px;border:1px solid #E5E7EB">73~92만원</td><td style="padding:6px;border:1px solid #E5E7EB">53~72만원</td><td style="padding:6px;border:1px solid #E5E7EB">프로미 안전운전</td><td style="padding:6px;border:1px solid #E5E7EB">30~70분</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">KB손해보험 다이렉트</td><td style="padding:6px;border:1px solid #E5E7EB">75~95만원</td><td style="padding:6px;border:1px solid #E5E7EB">55~75만원</td><td style="padding:6px;border:1px solid #E5E7EB">KB Smart 운전</td><td style="padding:6px;border:1px solid #E5E7EB">30~70분</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">메리츠 다이렉트</td><td style="padding:6px;border:1px solid #E5E7EB">73~92만원</td><td style="padding:6px;border:1px solid #E5E7EB">53~72만원</td><td style="padding:6px;border:1px solid #E5E7EB">메리츠 운전점수</td><td style="padding:6px;border:1px solid #E5E7EB">35~80분</td></tr></table>' },

    { type: 'h2', id: 'discount-compare', text: '할인 조합 효율 비교' },
    { type: 'body', html: '<p>5대사 모두 다음 할인을 운영하지만 적용 조건·할인폭은 회사별 상이합니다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">할인 종류</th><th style="padding:8px;border:1px solid #E5E7EB">5대사 일반 범위</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">마일리지 (연 5천~1.5만 km)</td><td style="padding:8px;border:1px solid #E5E7EB">2~13%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">안전운전 (앱 점수 70+)</td><td style="padding:8px;border:1px solid #E5E7EB">5~10%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">블랙박스</td><td style="padding:8px;border:1px solid #E5E7EB">2~5%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">자녀 (만 13세 미만)</td><td style="padding:8px;border:1px solid #E5E7EB">3~7%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">친환경차 (전기·수소)</td><td style="padding:8px;border:1px solid #E5E7EB">3~10%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대중교통 실적</td><td style="padding:8px;border:1px solid #E5E7EB">3~6%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">장기 무사고 우대 (7년 이상)</td><td style="padding:8px;border:1px solid #E5E7EB">5~15%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">서민우대 (다둥이·연속가입 등)</td><td style="padding:8px;border:1px solid #E5E7EB">5%</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">중복 적용 가능 항목과 상호배타 항목이 회사별로 다릅니다. 마일리지+티맵+블랙박스+자녀를 모두 적용하면 30~40% 할인이 가능한 경우도 있습니다.</p>' },

    { type: 'h2', id: 'compare-by', text: '회사별 차별 포인트' },
    { type: 'body', html: '<h3>삼성화재 애니카</h3><p>전국 사고 처리 직원망 가장 넓음. 사고 처리 평판 안정적. 다이렉트 사업비 효율 높음. 티맵 모빌리티(SK텔레콤)와 안전운전 점수 연동.</p><h3>현대해상 하이카</h3><p>Hi-Car Drive 자체 안전운전 측정. 현대자동차 그룹 차량과의 텔레매틱스 연동 검토. 콜센터 응대 평가 양호.</p><h3>DB손해보험 다이렉트</h3><p>가격 경쟁력 강함. 운전자보험·장기손해보험 묶음 할인. 사고 처리 평균 시간 짧은 편.</p><h3>KB손해보험 다이렉트</h3><p>KB금융그룹 시너지 — KB Pay·KB스타뱅킹 연계. 직장단체보험 영업 강함.</p><h3>메리츠화재 다이렉트</h3><p>가격 경쟁력. 운전자·치아·간병 등 장기보험 묶음 할인. 분쟁 시 고객지원실 응대 평가 양호.</p>' },

    { type: 'h2', id: 'recommended', text: '권장 담보 한도 (모든 회사 동일 적용)' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">담보</th><th style="padding:8px;border:1px solid #E5E7EB">권장 한도</th><th style="padding:8px;border:1px solid #E5E7EB">사유</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대인Ⅰ</td><td style="padding:8px;border:1px solid #E5E7EB">의무</td><td style="padding:8px;border:1px solid #E5E7EB">자배법</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대인Ⅱ</td><td style="padding:8px;border:1px solid #E5E7EB">무한</td><td style="padding:8px;border:1px solid #E5E7EB">사망·중상해 사고 핵심 보호</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대물</td><td style="padding:8px;border:1px solid #E5E7EB">2~5억</td><td style="padding:8px;border:1px solid #E5E7EB">고가 수입차·시설물 대비. 한도 차이당 1~3만원/년</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">자기차량</td><td style="padding:8px;border:1px solid #E5E7EB">차량가액</td><td style="padding:8px;border:1px solid #E5E7EB">자기부담 30만 표준</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">자동차상해</td><td style="padding:8px;border:1px solid #E5E7EB">3억</td><td style="padding:8px;border:1px solid #E5E7EB">자기신체보다 보장 넓음</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">무보험차상해</td><td style="padding:8px;border:1px solid #E5E7EB">2억</td><td style="padding:8px;border:1px solid #E5E7EB">뺑소니·무보험 가해 대비</td></tr></table>' },

    { type: 'h2', id: 'choose', text: '비교 후 어떻게 선택할 것인가' },
    { type: 'body', html: '<ol><li>5대사 중 3사 이상에서 동일 조건 견적 직접 받기</li><li>보험료 차이가 5% 이내라면 사고 출동 응대 시간·고객지원 평가 우선</li><li>티맵·블랙박스·자녀·친환경차 등 본인 적용 가능 할인 조합 점검</li><li>운전자·실손 등 다른 보험과 묶음 할인 가능 회사 검토</li><li>갱신 시 보험료 인상폭 (직전 사업연도 손해율) 참고</li></ol>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '5대사 중 가장 저렴한 회사는?', a: '동일 조건이라도 차량등급·운전경력·할인 조합에 따라 1위가 바뀝니다. 직접 견적 비교가 유일한 정답.' },
      { q: '다이렉트와 설계사 채널 사고 처리가 다른가요?', a: '약관 동일. 다이렉트는 본인이 사고 접수·합의 진행. 설계사 채널은 설계사 보조 받음. 처리 결과 자체는 차이 적음.' },
      { q: '같은 보험사에서 갱신해야 무사고 경력 유지되나요?', a: '아닙니다. 무사고 경력은 보험사 간 공유. 옮겨도 유지됩니다.' },
      { q: '사고 발생 후 다음 해 보험료가 얼마나 오르나요?', a: '대인 사고 1건당 할증 1~3등급, 보험료 10~30% 증가. 자차 단독 사고는 영향 작음.' },
      { q: '운전자보험·실손과 묶음 가입이 정말 유리한가요?', a: '회사별 5~10% 묶음 할인 가능. 다만 묶음 가입 후 1개만 해지가 어려워질 수 있어 주의.' },
      { q: '갱신 안내를 못 받으면 어떻게 되나요?', a: '만기 30일 전 안내가 표준이지만 본인이 챙겨야. 만기 익일 사고는 무보험.' },
      { q: '전기차는 5대사 중 어디가 유리한가요?', a: '친환경차 할인은 모든 회사 적용. 단 자차 보험료는 배터리 수리비 영향으로 평균 10~25% 높음.' },
      { q: '20대 초보 운전자는 어디가 유리한가요?', a: '회사 간 차이보다는 가족한정·연령한정 특약 활용이 더 큰 절감 효과.' },
    ]},

    { type: 'sources', items: [
      { label: '금감원 금융상품통합비교공시 — 자동차보험', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '손해보험협회 자동차보험 공시', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-27' },
      { label: '자동차손해배상보장법', url: 'https://www.law.go.kr', org: '국가법령정보센터', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

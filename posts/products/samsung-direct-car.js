const post = {
  id: 'P0003',
  sections: [
    { type: 'intro', html: '<p><strong>삼성화재 애니카 다이렉트 자동차보험</strong>은 한국 손해보험 점유율 1위 회사의 온라인 가입 채널 대표 상품입니다. 자동차보험은 보장 자체가 표준화되어 있어 회사별 차이가 크지 않지만, <strong>다이렉트 사업비·할인 조합·사고처리 네트워크·앱 편의성</strong>에서 실제 가입자 비용·만족도 차이가 발생합니다.</p><p>이 글은 애니카 다이렉트의 담보 구성, 권장 한도, 30~40대 중형차 기준 연 보험료 예시(공시 기준일 2026-01-01), 마일리지·티맵·블랙박스·자녀·전기차 할인 구조, 사고 시 출동·합의 프로세스까지 가입 전 반드시 확인할 사항을 정리합니다. 본 사이트는 이 상품을 판매·모집하지 않습니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 최종 보험료는 차량등급·운전경력·할인 조합에 따라 크게 달라집니다. 공식 견적은 삼성화재 다이렉트에서 확인하세요.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>상품 정식명</strong></td><td style="padding:8px;border:1px solid #E5E7EB">애니카다이렉트 자동차보험</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>보험사</strong></td><td style="padding:8px;border:1px solid #E5E7EB">삼성화재해상보험</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>판매 채널</strong></td><td style="padding:8px;border:1px solid #E5E7EB">온라인·모바일·전화 (사업비 ↓)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>의무가입 담보</strong></td><td style="padding:8px;border:1px solid #E5E7EB">대인배상Ⅰ + 대물 2,000만원 (자배법)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>임의가입 담보</strong></td><td style="padding:8px;border:1px solid #E5E7EB">대인Ⅱ·자기차량·자기신체·자동차상해·무보험차상해</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>긴급출동 서비스</strong></td><td style="padding:8px;border:1px solid #E5E7EB">기본 또는 특약(연 5~7회)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>공시 기준일</strong></td><td style="padding:8px;border:1px solid #E5E7EB">2026-01-01</td></tr></table>' },

    { type: 'h2', id: 'covers', text: '담보별 권장 한도' },
    { type: 'h3', id: 'c1', text: '대인배상Ⅰ (의무·법정 한도)' },
    { type: 'body', html: '<p>자동차손해배상보장법상 의무 가입. 사망 1.5억원, 부상 1급 3,000만원 등 법정 한도 내 보상.</p>' },
    { type: 'h3', id: 'c2', text: '대인배상Ⅱ (사고처리의 핵심)' },
    { type: 'body', html: '<p>대인Ⅰ 한도 초과분을 무한 보상하는 임의보험. <strong>사망·중상해 사고 비용의 거의 전부를 대인Ⅱ가 부담</strong>합니다. 무한 가입이 표준입니다. 대인Ⅱ 미가입 상태에서 사망사고 발생 시 본인이 수억 원을 배상해야 할 수 있습니다.</p>' },
    { type: 'h3', id: 'c3', text: '대물배상' },
    { type: 'body', html: '<p>상대 차량·시설물 손해 보상. 한도 1억은 부족하며 <strong>2~5억 원 권장</strong>. 고가 수입차·공공시설물 사고 대비. 한도 차이당 연 보험료 차이는 1~3만원 수준이라 상향이 합리적입니다.</p>' },
    { type: 'h3', id: 'c4', text: '자기차량손해 (자차)' },
    { type: 'body', html: '<p>내 차 수리비 보상. 차량가액 기준 책정. 자기부담금은 20만/30만/50만 중 선택. <strong>자기부담 30만원이 표준</strong>이며 20만원 선택 시 보험료 약 5~10% 가산.</p>' },
    { type: 'h3', id: 'c5', text: '자기신체사고 / 자동차상해' },
    { type: 'body', html: '<p>본인·동승자 부상 보상. <strong>"자동차상해"가 자기신체보다 보상 범위가 넓고 과실상계 기준이 유리</strong>합니다. 자동차상해 3억 권장.</p>' },
    { type: 'h3', id: 'c6', text: '무보험차상해' },
    { type: 'body', html: '<p>상대 운전자가 무보험·뺑소니인 경우 대신 보상. 2억 가입이 일반적이며 보험료 부담은 작습니다.</p>' },

    { type: 'h2', id: 'discount', text: '할인 제도 — 다이렉트 채널의 진짜 가치' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">할인 종류</th><th style="padding:8px;border:1px solid #E5E7EB">조건</th><th style="padding:8px;border:1px solid #E5E7EB">할인폭</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">마일리지 할인</td><td style="padding:8px;border:1px solid #E5E7EB">연 5천 / 7천 / 1만 / 1.5만 km 미만</td><td style="padding:8px;border:1px solid #E5E7EB">2~13%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">티맵 안전운전</td><td style="padding:8px;border:1px solid #E5E7EB">티맵 점수 70점 이상</td><td style="padding:8px;border:1px solid #E5E7EB">5~10%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">블랙박스</td><td style="padding:8px;border:1px solid #E5E7EB">2채널 이상 장착</td><td style="padding:8px;border:1px solid #E5E7EB">2~5%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">자녀 할인</td><td style="padding:8px;border:1px solid #E5E7EB">만 13세 미만 자녀</td><td style="padding:8px;border:1px solid #E5E7EB">3~7%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">친환경차</td><td style="padding:8px;border:1px solid #E5E7EB">전기·수소차</td><td style="padding:8px;border:1px solid #E5E7EB">3~10%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대중교통</td><td style="padding:8px;border:1px solid #E5E7EB">교통카드 사용 실적</td><td style="padding:8px;border:1px solid #E5E7EB">3~6%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">서민우대(다둥이/장기연속)</td><td style="padding:8px;border:1px solid #E5E7EB">조건부</td><td style="padding:8px;border:1px solid #E5E7EB">5%</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">※ 할인은 중복 적용 가능하지만 일부는 상호배타. 실제 적용은 견적 시 확인.</p>' },

    { type: 'h2', id: 'premium', text: '연 보험료 예시 (공시 기준일 2026-01-01)' },
    { type: 'body', html: '<p>아래는 일반적 범위 추정. 차량 등급·운전경력·할인 조합에 따라 ±20~40% 달라집니다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">조건</th><th style="padding:8px;border:1px solid #E5E7EB">연 보험료 범위</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">30대 남성·중형·무사고 3년·기본할인</td><td style="padding:8px;border:1px solid #E5E7EB">55~75만원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">30대 여성·중형·무사고 5년·티맵+마일리지</td><td style="padding:8px;border:1px solid #E5E7EB">45~65만원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">40대 남성·SUV·무사고 7년·블랙박스</td><td style="padding:8px;border:1px solid #E5E7EB">65~90만원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">20대 남성·소형·운전 1년차</td><td style="padding:8px;border:1px solid #E5E7EB">110~160만원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">50대 남성·전기차·무사고 10년+</td><td style="padding:8px;border:1px solid #E5E7EB">60~85만원</td></tr></table>' },

    { type: 'h2', id: 'process', text: '사고 처리 절차 — 출동·접수·합의·지급' },
    { type: 'body', html: '<ol><li><strong>안전 조치 + 사진 촬영</strong> — 비상등·삼각대·사고 차량과 도로의 위치 관계, 파손 부위 근접 사진 다수.</li><li><strong>112·119 신고</strong> — 인사사고 시 필수.</li><li><strong>삼성화재 1588-5114 또는 앱 접수</strong> — 접수 즉시 현장출동 또는 견인 콜.</li><li><strong>현장 도착 사고 처리 직원</strong> — 평균 30분~1시간(도시 기준).</li><li><strong>과실비율 협의</strong> — 보험사 간 과실 분담. 분쟁 시 손해보험협회 분쟁심의 신청 가능.</li><li><strong>치료·수리·합의 → 보험금 지급</strong>.</li></ol>' },

    { type: 'h2', id: 'mistakes', text: '자주 하는 실수' },
    { type: 'body', html: '<ul><li><strong>의무보험만 가입</strong> — 대인Ⅱ 미가입 상태에서 사망사고 발생 시 본인 부담 수억</li><li><strong>대물 1억으로 설정</strong> — 고가 수입차·공공시설물 사고 시 부족</li><li><strong>자차 미가입</strong> — 단독사고·홍수·차량파손 무보상</li><li><strong>운전자 한정 특약 미신청</strong> — 가족·임시 운전자 사고 시 보장 거절 가능</li><li><strong>블랙박스 미장착</strong> — 과실비율 입증 어려움 + 할인 손실</li></ul>' },

    { type: 'h2', id: 'compare', text: '타사와의 비교 시 보는 포인트' },
    { type: 'body', html: '<ul><li>같은 조건 견적 비교 (대인Ⅱ 무한·대물 2억·자동차상해 3억 동일 기준)</li><li>각 회사 다이렉트 할인 조합 차이</li><li>현장 출동 평균 시간·전국 사고처리 직원 수</li><li>고객만족도·민원 처리 지표 (손해보험협회·금감원)</li></ul><p>회사별 정량 비교: <a href="/compare/car-direct-2026/">2026 자동차보험 다이렉트 비교</a></p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '다이렉트와 설계사 채널 보장이 다른가요?', a: '담보·약관은 동일합니다. 다이렉트가 사업비가 낮아 보험료가 5~15% 저렴한 편.' },
      { q: '보험료 갱신 시 자동으로 옮겨가나요?', a: '네. 별도 변경이 없으면 같은 보험사로 자동 갱신. 만기 30일 전 안내문 발송.' },
      { q: '무사고 경력은 회사 옮길 때 유지되나요?', a: '유지됩니다. 할인할증 등급은 보험사 간 공유 정보.' },
      { q: '가족 운전자 추가 시 보험료가 얼마나 오르나요?', a: '연령·운전경력에 따라 다릅니다. 만 26세 이상 가족 추가는 기본 보험료의 5~15% 가산.' },
      { q: '블랙박스 할인은 어떻게 인정되나요?', a: '구입 영수증과 차량 장착 사진 제출. 일부 보험사는 인증 모델만 인정.' },
      { q: '사고 후 다음 해 보험료가 얼마나 오르나요?', a: '대인 사고 1회당 할증 등급 1~3등급 상승, 보험료 10~30% 증가.' },
      { q: '서로 보험사가 같으면 사고 처리가 빠르나요?', a: '아닙니다. 같은 보험사라도 절차는 동일. 다만 분쟁 협의는 다소 신속.' },
      { q: '전기차는 자차 보험료가 더 비쌉니까?', a: '배터리 수리비가 비싸 평균 10~25% 높지만 친환경차 할인이 일부 상쇄.' },
    ]},

    { type: 'sources', items: [
      { label: '삼성화재 다이렉트 공시실', url: 'https://www.samsungfire.com', org: '삼성화재', accessedAt: '2026-04-27' },
      { label: '손해보험협회 자동차보험 공시', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-27' },
      { label: '금감원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

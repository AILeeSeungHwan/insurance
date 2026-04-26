const post = {
  id: 'H0006',
  sections: [
    { type: 'intro', html: '<p><strong>첫차 구입 직후가 운전 관련 보험 설계의 골든타임</strong>입니다. 자동차보험 가입은 의무이지만 어떤 한도로 어떻게 구성하느냐가 사고 시 본인 부담을 좌우합니다. 또한 자동차보험만 있고 운전자보험을 빼먹으면 12대 중과실 사고에서 본인이 수천만원을 부담해야 할 수 있습니다.</p><p>이 글은 첫차 운전자가 가입해야 할 보험 4종(자동차·운전자·소득보장·블랙박스 할인 활용), 권장 담보 한도 표, 20대 초보 운전자의 보험료 절감 팁, 출퇴근 PM(전동킥보드·자전거) 사고 보장까지 실전 정보로 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험상품을 판매·모집하지 않습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'priority', text: '첫차 보험 우선순위' },
    { type: 'body', html: '<h3>1순위. 자동차보험 (의무 + 임의)</h3><p>의무는 대인Ⅰ + 대물 2,000만원. 다만 임의 대인Ⅱ 무한·대물 2~5억·자동차상해 3억 추가 가입이 표준. 임의 빠진 자동차보험은 사실상 무방비.</p><h3>2순위. 운전자보험 (형사 책임)</h3><p>12대 중과실 사고에서 형사합의금·변호사선임비·벌금 보장. 자동차보험은 민사만 다룸.</p><h3>3순위. 소득보장 (입원일당)</h3><p>사고로 입원·근로 중단 시 일당 정액 지급. 본인 직장 단체보험에 일당 보장이 부족하면 추가.</p><h3>4순위. PM 사고 특약</h3><p>전동킥보드·자전거 사고 → 별도 특약 가입. 퇴근 후 따릉이·공유 킥보드 이용자라면 거의 필수.</p>' },

    { type: 'h2', id: 'recommended', text: '권장 담보 한도 (모든 보험사 동일)' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">담보</th><th style="padding:8px;border:1px solid #E5E7EB">권장 한도</th><th style="padding:8px;border:1px solid #E5E7EB">사유</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대인Ⅰ</td><td style="padding:8px;border:1px solid #E5E7EB">의무</td><td style="padding:8px;border:1px solid #E5E7EB">자배법 법정</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대인Ⅱ</td><td style="padding:8px;border:1px solid #E5E7EB">무한</td><td style="padding:8px;border:1px solid #E5E7EB">사망·중상해 핵심</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대물</td><td style="padding:8px;border:1px solid #E5E7EB">2~5억</td><td style="padding:8px;border:1px solid #E5E7EB">수입차·시설물 대비</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">자기차량</td><td style="padding:8px;border:1px solid #E5E7EB">차량가액</td><td style="padding:8px;border:1px solid #E5E7EB">자기부담 30만 표준</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">자동차상해</td><td style="padding:8px;border:1px solid #E5E7EB">3억</td><td style="padding:8px;border:1px solid #E5E7EB">자기신체보다 보장 넓음</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">무보험차상해</td><td style="padding:8px;border:1px solid #E5E7EB">2억</td><td style="padding:8px;border:1px solid #E5E7EB">뺑소니·무보험 가해 대비</td></tr></table>' },

    { type: 'h2', id: 'discount', text: '20대 초보 운전자 보험료 절감 팁' },
    { type: 'body', html: '<p>20대 운전 1년차 보험료는 사고율 통계 기반으로 30대 평균의 1.5~2배. 다음 방법으로 절감 가능.</p><ol><li><strong>가족한정 특약 + 운전자 연령한정</strong> — 부모 명의 차량의 경우 26세 이상 한정 등 활용</li><li><strong>마일리지 할인</strong> — 연 7,000km 이하면 최대 13% 할인</li><li><strong>티맵·Hi-Car Drive 안전운전 점수 70+</strong> — 5~10% 할인</li><li><strong>블랙박스 장착</strong> — 2~5% 할인 + 사고 시 과실 입증</li><li><strong>대중교통 실적</strong> — 교통카드 사용 → 3~6% 할인</li><li><strong>자녀 할인 (만 13세 미만 자녀가 있을 때)</strong> — 결혼·자녀 출생 시</li></ol>' },

    { type: 'h2', id: 'driver-must', text: '운전자보험 — 첫차 운전자에게 필수인 이유' },
    { type: 'body', html: '<p>자동차보험은 상대 차량·신체 배상(민사). 운전자보험은 본인 형사 책임을 보장합니다.</p><h3>12대 중과실 사고 시 본인 부담</h3><ul><li>벌금: 1,000~3,000만원</li><li>변호사 선임비: 500~1,000만원</li><li>형사 합의금(피해자 사망 시): 1억~3억</li></ul><p>이 비용 모두 자동차보험에서는 보상 안 됨. 운전자보험 미가입 시 본인 부담. 월 보험료 1.5~2.5만원으로 이 모든 부담을 막을 수 있음.</p>' },

    { type: 'h2', id: 'pm', text: 'PM(전동킥보드·자전거) 사고 보장' },
    { type: 'body', html: '<p>출퇴근에 따릉이·공유 킥보드를 이용하는 첫차 운전자라면 별도 PM 특약 가입 권장.</p><ul><li>운전자보험 PM 특약: 월 1~3천원</li><li>일상생활배상책임 특약과 결합</li><li>법적으로는 PM도 차량으로 분류 (도로교통법) → 자동차 사고 처리 절차 적용</li></ul>' },

    { type: 'h2', id: 'scenario', text: '가상 시나리오 (허구 예시)' },
    { type: 'body', html: '<p>※ 허구 사례입니다.</p><h3>27세 첫차 구매자 (소형 SUV·연 1만 km)</h3><ul><li>다이렉트 자동차보험 (마일리지+티맵+블랙박스): 연 95만원 (월 80,000원)</li><li>운전자보험 (3대 담보 풀 + 자전거 특약): 월 22,000원</li><li>합계 월 약 102,000원</li><li>블랙박스 + 안전운전 앱으로 다음 해 무사고 갱신 시 추가 5~10% 할인</li></ul>' },

    { type: 'h2', id: 'often-missed', text: '첫차가 자주 놓치는 항목' },
    { type: 'body', html: '<ul><li>자기차량손해 자기부담 — 50만/30만/20만 중 선택. 사고 시 본인 부담 차이</li><li>운전자 한정 특약 미신청 — 가족·친구 운전 사고 보장 거절 가능</li><li>긴급출동 서비스 한도 — 무제한 X. 연 5~7회 한도가 일반</li><li>차량 대물·차량가액 산정 오류 — 시세보다 낮게 산정 시 보상 부족</li><li>운전자보험 자전거·킥보드 특약 누락</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '20대 첫차 보험료가 너무 비싼데 줄일 방법?', a: '부모 명의 차량 + 가족한정 + 26세 이상 운전자 특약 활용. 또는 본인 명의로 가입 후 무사고 경력 쌓기.' },
      { q: '자동차보험과 운전자보험 동시 가입 시 할인되나요?', a: '같은 회사 동시 가입 시 5~10% 묶음 할인 가능.' },
      { q: '블랙박스는 정말 효과가 있나요?', a: '보험료 할인은 2~5%로 작지만 사고 시 과실비율 입증에 결정적. 미장착 시 본인 과실로 인정될 위험 큼.' },
      { q: '대물 1억 vs 2억 가입 차이는?', a: '연 보험료 차이 1~3만원. 고가 수입차 사고 시 1억 한도는 부족. 2억 권장.' },
      { q: '자기차량 자기부담을 20만으로 낮추면?', a: '연 보험료 5~10% 인상. 사고 발생 시 본인 부담은 적어지지만 평소 보험료가 비싸짐.' },
      { q: '운전자보험 가입금 액수는?', a: '교통사고처리지원금 2억 + 변호사 1,000만 + 벌금 2,000만 권장. 월 1.5~2.5만원.' },
      { q: '사고 후 보험료가 얼마나 오르나요?', a: '대인 사고 1건당 할증 1~3등급, 보험료 10~30% 인상. 자차 단독 사고는 영향 작음.' },
      { q: '갱신 시 다른 회사로 옮겨도 되나요?', a: '예. 무사고 경력은 유지됨. 매년 견적 비교 권장.' },
    ]},

    { type: 'sources', items: [
      { label: '금감원 금융상품통합비교공시 — 자동차보험', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '손해보험협회 자동차보험 공시', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-27' },
      { label: '도로교통공단 안전운전', url: 'https://www.koroad.or.kr', org: '도로교통공단', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

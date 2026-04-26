const post = {
  id: 'M0005',
  sections: [
    { type: 'intro', html: '<p><strong>운전자보험은 자동차보험과 별개로 가입하는 형사·행정 책임 보장</strong>입니다. DB손해보험·삼성화재·현대해상·메리츠화재·KB손해보험 5대사가 시장을 주도하며, 3대 핵심 담보(교통사고처리지원금·변호사선임비·벌금) 한도와 12대 중과실 특약, 자전거·전동킥보드 사고 보장 여부에서 차이가 발생합니다.</p><p>이 글은 5대 손해보험사 운전자보험을 동일 조건(30대 남성·기본 3대 담보·20년 만기)으로 비교한 매트릭스, 12대 중과실 특약 적용 범위, 자전거·킥보드 보장 여부, 갱신형 vs 비갱신형 구조까지 공시 자료 기준으로 정리합니다. 본 사이트는 보험상품을 판매·모집하지 않습니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 모든 수치는 일반적 범위. 정확한 한도·보험료는 각 회사 공시실 직접 확인.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'why', text: '자동차보험과 운전자보험의 역할 분리' },
    { type: 'body', html: '<p>자동차보험은 <strong>민사 책임</strong>(상대 차량·신체 배상)을, 운전자보험은 <strong>형사·행정 책임</strong>(벌금·합의금·변호사비)을 담당합니다. 12대 중과실 사고에서는 운전자보험의 가치가 두드러집니다.</p>' },

    { type: 'h2', id: 'matrix', text: '5대사 비교 매트릭스 — 30대 남성 기본 3대 담보' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:13px"><tr style="background:#F3F4F6"><th style="padding:6px;border:1px solid #E5E7EB">보험사</th><th style="padding:6px;border:1px solid #E5E7EB">교통사고처리지원금</th><th style="padding:6px;border:1px solid #E5E7EB">변호사선임비</th><th style="padding:6px;border:1px solid #E5E7EB">벌금</th><th style="padding:6px;border:1px solid #E5E7EB">월 보험료</th></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">DB손해보험</td><td style="padding:6px;border:1px solid #E5E7EB">1억~3억</td><td style="padding:6px;border:1px solid #E5E7EB">500~1,000만</td><td style="padding:6px;border:1px solid #E5E7EB">2,000만 (대인)</td><td style="padding:6px;border:1px solid #E5E7EB">15,000~22,000</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">삼성화재</td><td style="padding:6px;border:1px solid #E5E7EB">1억~3억</td><td style="padding:6px;border:1px solid #E5E7EB">500~1,000만</td><td style="padding:6px;border:1px solid #E5E7EB">2,000만</td><td style="padding:6px;border:1px solid #E5E7EB">15,500~22,500</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">현대해상</td><td style="padding:6px;border:1px solid #E5E7EB">1억~3억</td><td style="padding:6px;border:1px solid #E5E7EB">500~1,000만</td><td style="padding:6px;border:1px solid #E5E7EB">2,000만</td><td style="padding:6px;border:1px solid #E5E7EB">15,000~22,000</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">메리츠화재</td><td style="padding:6px;border:1px solid #E5E7EB">1억~3억</td><td style="padding:6px;border:1px solid #E5E7EB">500~1,000만</td><td style="padding:6px;border:1px solid #E5E7EB">2,000만</td><td style="padding:6px;border:1px solid #E5E7EB">14,500~21,500</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">KB손해보험</td><td style="padding:6px;border:1px solid #E5E7EB">1억~3억</td><td style="padding:6px;border:1px solid #E5E7EB">500~1,000만</td><td style="padding:6px;border:1px solid #E5E7EB">2,000만</td><td style="padding:6px;border:1px solid #E5E7EB">15,500~22,500</td></tr></table>' },

    { type: 'h2', id: 'twelve', text: '12대 중과실 특약 적용' },
    { type: 'body', html: '<p>5대사 모두 12대 중과실 특약을 운영합니다. 단 음주·뺑소니 등 일부 사고는 약관상 면책되는 점은 모든 회사 동일.</p><ol><li>신호 위반 / 중앙선 침범</li><li>속도위반 (20km/h 초과)</li><li>앞지르기·철길 건널목 위반</li><li>횡단보도 사고</li><li>무면허 / 음주 (대부분 면책)</li><li>보도 침범</li><li>승객 추락 방지 의무 위반</li><li>어린이보호구역 사고</li><li>화물 고정 의무 위반</li></ol>' },

    { type: 'h2', id: 'addons', text: '주요 특약 비교' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">특약</th><th style="padding:8px;border:1px solid #E5E7EB">필요성</th><th style="padding:8px;border:1px solid #E5E7EB">5대사 일반 적용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">자전거·전동킥보드 사고</td><td style="padding:8px;border:1px solid #E5E7EB">출퇴근 PM 이용자 필수</td><td style="padding:8px;border:1px solid #E5E7EB">대부분 별도 특약</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">스쿨존 가중처벌</td><td style="padding:8px;border:1px solid #E5E7EB">어린이보호구역 사고 한도 상향</td><td style="padding:8px;border:1px solid #E5E7EB">5대사 모두</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대중교통 이용 중 상해</td><td style="padding:8px;border:1px solid #E5E7EB">운전 외 일상 보장</td><td style="padding:8px;border:1px solid #E5E7EB">대부분</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">일상생활배상책임</td><td style="padding:8px;border:1px solid #E5E7EB">제3자 피해 일상 보장</td><td style="padding:8px;border:1px solid #E5E7EB">대부분</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">골절 진단·수술비</td><td style="padding:8px;border:1px solid #E5E7EB">상해 보장</td><td style="padding:8px;border:1px solid #E5E7EB">대부분</td></tr></table>' },

    { type: 'h2', id: 'renew-vs', text: '갱신형 vs 비갱신형' },
    { type: 'body', html: '<p>운전자보험도 갱신형(5~10년)과 비갱신형(20·30년·100세) 선택이 가능합니다. 초기 보험료는 갱신형이 30~50% 저렴하지만 50대 이후 보험료가 급등합니다.</p><ul><li><strong>갱신형</strong>: 30대 시작 가입자가 단기 가성비를 중시하면 유리</li><li><strong>비갱신형</strong>: 평생 동일 보험료. 50대 이후 보험료 안정성 중시 시 유리</li></ul>' },

    { type: 'h2', id: 'choose', text: '선택 시 핵심 우선순위' },
    { type: 'body', html: '<ol><li>3대 담보 한도 — 교통사고처리지원금 2억 이상 권장</li><li>12대 중과실 모든 항목 포함 여부 (음주·뺑소니 면책은 5대사 동일)</li><li>자전거·전동킥보드 특약 (이용자라면 필수)</li><li>스쿨존 가중처벌 특약 (한도 상향)</li><li>갱신형/비갱신형 — 본인 가입 시점 연령 고려</li><li>자동차보험과 묶음 가입 시 할인 가능 회사</li></ol>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '5대사 중 가장 저렴한 회사는?', a: '약관·한도 거의 동일. 5~10% 차이라 본인 조건 견적 비교가 답.' },
      { q: '음주 운전 사고도 보장되나요?', a: '5대사 모두 음주·뺑소니는 약관상 면책. 보험으로 막을 수 없음.' },
      { q: '자동차보험만 있으면 부족한가요?', a: '자동차보험은 민사. 운전자보험은 형사·행정. 12대 중과실에서 운전자보험 없으면 본인 부담 수천만원.' },
      { q: '자전거 사고도 보장되나요?', a: '대부분 별도 특약 가입 필요. 출퇴근 자전거·전동킥보드 이용자는 추가 권장.' },
      { q: '운전자보험 중복 가입 가능한가요?', a: '교통사고처리지원금·벌금은 정액형이라 중복 수령 가능. 변호사선임비는 실비 분담.' },
      { q: '스쿨존 사고 가중처벌 특약은 무엇인가요?', a: '어린이보호구역 사고 시 형사 처벌·벌금이 가중되어 한도가 추가로 필요. 특약 가입으로 한도 상향.' },
      { q: '대인배상 한도가 무한이면 운전자보험 안 사도 되나요?', a: '아닙니다. 대인배상은 민사. 형사 벌금·변호사비·합의금은 자동차보험에서 안 나옵니다.' },
      { q: '갱신 시점에 보험료가 너무 올라요. 해지하면?', a: '해지 후 비갱신형 신규 가입 검토. 다만 가입 연령에 따라 보험료가 더 비쌀 수 있음.' },
    ]},

    { type: 'sources', items: [
      { label: '금감원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '손해보험협회 공시실', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-27' },
      { label: '교통사고처리 특례법', url: 'https://www.law.go.kr', org: '국가법령정보센터', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

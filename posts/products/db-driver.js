const post = {
  id: 'P0006',
  sections: [
    { type: 'intro', html: '<p><strong>DB손해보험 프로미드라이브 운전자보험</strong>은 운전자보험 시장 점유율 상위권 상품으로, 자동차보험이 다루지 않는 형사·행정 책임을 보장합니다. 12대 중과실 사고에서 형사합의금·변호사 선임비·벌금까지 한 번에 보장하는 3대 담보 구조가 핵심이며, 사망·중상해 사고 발생 시 개인이 부담해야 할 수천만~수억 원을 사전 차단하는 역할을 합니다.</p><p>이 글은 프로미드라이브의 3대 담보 한도, 12대 중과실 특약, 30~40대 남성 월 보험료 예시(공시 기준일 2026-01-01), 자전거·킥보드 사고 보장 여부, 갱신·납입기간 선택 가이드, 면책 사유까지 정리합니다. 본 사이트는 이 상품을 판매·모집하지 않습니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 최종 보험료는 DB손해보험 공시실 및 상품설명서를 확인해야 합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>상품 정식명</strong></td><td style="padding:8px;border:1px solid #E5E7EB">프로미드라이브 운전자보험</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>보험사</strong></td><td style="padding:8px;border:1px solid #E5E7EB">DB손해보험</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>유형</strong></td><td style="padding:8px;border:1px solid #E5E7EB">갱신형 / 만기 20·30년·100세</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>가입 연령</strong></td><td style="padding:8px;border:1px solid #E5E7EB">19세~70세</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>핵심 담보</strong></td><td style="padding:8px;border:1px solid #E5E7EB">교통사고처리지원금·변호사선임비·벌금</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>공시 기준일</strong></td><td style="padding:8px;border:1px solid #E5E7EB">2026-01-01</td></tr></table>' },

    { type: 'h2', id: 'three', text: '3대 핵심 담보' },
    { type: 'body', html: '<h3 id="t1">교통사고처리지원금</h3><p>피해자가 사망 또는 42일 이상 진단(중상해)을 받은 사고에서 형사합의금 사전 지급. 한도 1억~3억 원이 일반적. 이 담보는 12대 중과실 사고에 특히 중요합니다.</p><h3 id="t2">변호사 선임비</h3><p>형사 입건·기소 시 변호사 비용 보상. 한도 1,000~2,000만 원. 약식 기소·정식 재판 모두 적용.</p><h3 id="t3">벌금</h3><p>형사 벌금 확정 시 보험금 지급. 대인 벌금 최대 3,000만 원, 대물 벌금 최대 500만 원이 일반적.</p>' },

    { type: 'h2', id: 'twelve', text: '12대 중과실 특약 — 가입 시 반드시 확인' },
    { type: 'body', html: '<p>교통사고처리 특례법상 12대 중과실 사고는 피해자 합의와 무관하게 형사처벌 대상입니다. 운전자보험의 진가는 이때 발휘됩니다.</p><ol><li>신호 위반</li><li>중앙선 침범</li><li>속도위반(20km/h 초과)</li><li>앞지르기 위반</li><li>철길 건널목 통과 위반</li><li>횡단보도 사고</li><li>무면허 운전</li><li>음주 운전</li><li>보도 침범</li><li>승객 추락 방지 의무 위반</li><li>어린이보호구역 사고</li><li>화물 고정 의무 위반</li></ol><p>이 중 음주·뺑소니 등 일부는 약관상 면책 처리되는 경우가 많아, 가입 전 면책 사유를 정확히 확인해야 합니다.</p>' },
    { type: 'risk', title: '음주 운전은 대부분 면책', html: '<p>음주·약물·뺑소니 사고는 운전자보험에서도 대부분 면책됩니다. 보험으로 막을 수 없는 영역이라 운전 자체를 피해야 합니다.</p>' },

    { type: 'h2', id: 'addons', text: '주요 특약' },
    { type: 'body', html: '<ul><li>자전거·전동킥보드 운전자 사고 특약</li><li>대중교통 이용 중 상해</li><li>일상생활배상책임 특약</li><li>골절 진단비·수술비</li><li>스쿨존 가중처벌 특약 (어린이보호구역 사고 한도 상향)</li><li>음주측정 거부·뺑소니 면책 보강 특약 (한정적 적용)</li></ul>' },

    { type: 'h2', id: 'premium', text: '월 보험료 예시 (공시 기준일 2026-01-01)' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">조건</th><th style="padding:8px;border:1px solid #E5E7EB">월 보험료</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">30대 남성·기본 3대 담보·20년 만기</td><td style="padding:8px;border:1px solid #E5E7EB">15,000~22,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">30대 여성·기본 3대 담보·20년 만기</td><td style="padding:8px;border:1px solid #E5E7EB">12,000~18,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">40대 남성·12대 중과실 풀·30년 만기</td><td style="padding:8px;border:1px solid #E5E7EB">22,000~32,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">40대 여성·기본 + 자전거 특약</td><td style="padding:8px;border:1px solid #E5E7EB">15,000~22,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">50대 남성·100세 만기·풀 옵션</td><td style="padding:8px;border:1px solid #E5E7EB">30,000~45,000원</td></tr></table>' },

    { type: 'h2', id: 'choose', text: '선택 시 핵심 포인트' },
    { type: 'body', html: '<ol><li>3대 담보 한도 — 교통사고처리지원금 2억 이상 권장</li><li>12대 중과실 모든 항목 포함 여부</li><li>자전거·전동킥보드 사고 포함 여부 (출퇴근에 이용한다면 필수)</li><li>스쿨존 가중처벌 특약 (어린이보호구역 사고 시 부담 큼)</li><li>갱신형/비갱신형 — 갱신형은 5~10년마다 보험료 재산정</li><li>만기 — 20년·30년·100세 중 가구 재무 상황에 맞춰 선택</li></ol>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '자동차보험이 있는데 운전자보험이 또 필요한가요?', a: '필요합니다. 자동차보험은 민사 책임(상대방 배상)을, 운전자보험은 형사·행정 책임(벌금·합의금·변호사비)을 다룹니다. 보완재.' },
      { q: '교통사고처리지원금은 항상 지급되나요?', a: '피해자가 사망 또는 42일 이상 진단을 받은 경우 + 형사합의 진행 시 지급. 경상해는 대상 외.' },
      { q: '벌금이 1,000만원 나왔는데 전액 지급되나요?', a: '한도 내 실비 보상. 대부분 상품 한도 2,000~3,000만원. 단, 음주·뺑소니는 면책.' },
      { q: '변호사 선임비는 셀프 변호사도 가능한가요?', a: '약관상 변호사가 변호한 경우. 본인 직접 대응은 미적용.' },
      { q: '자전거·킥보드 사고도 보장되나요?', a: '특약 가입 필수. 기본 약관에는 자동차 사고만 포함된 경우가 많음.' },
      { q: '운전자보험 중복 가입하면 두 배 받나요?', a: '교통사고처리지원금·벌금은 정액형이라 중복 수령 가능. 변호사선임비는 실비 보상으로 분담 지급.' },
      { q: '갱신형이 더 유리한가요?', a: '초기 보험료는 갱신형이 저렴. 50대 이후 보험료가 급등하므로 장기 유지 시 비갱신형이 유리한 경우 많음.' },
      { q: '뺑소니 가해자가 됐을 때 보장되나요?', a: '뺑소니는 대부분 면책. 사고 후 즉시 신고·구호 조치가 필수.' },
    ]},

    { type: 'sources', items: [
      { label: 'DB손해보험 공시실', url: 'https://www.directdb.co.kr', org: 'DB손해보험', accessedAt: '2026-04-27' },
      { label: '손해보험협회 공시실', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-27' },
      { label: '교통사고처리 특례법', url: 'https://www.law.go.kr', org: '국가법령정보센터', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

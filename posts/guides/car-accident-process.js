const post = {
  id: 'G0002',
  sections: [
    { type: 'intro', html: '<p><strong>교통사고 발생 시 초동조치 5분이 사고 처리 결과 70%를 좌우</strong>합니다. 안전 확보·증거 수집·즉시 신고를 빠뜨리면 과실비율이 불리해지거나 형사 처벌 대상이 됩니다. 또한 자동차보험(민사)과 운전자보험(형사)이 어느 단계에 어떻게 개입하는지 정확히 알아야 보장을 받을 수 있습니다.</p><p>이 글은 사고 직후 초동조치 7단계, 자동차보험·운전자보험 개입 시점, 과실비율 협의 절차, 12대 중과실 사고 시 형사 대응, 합의·치료·보험금 수령까지 단계별로 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 사고 처리 절차는 사안에 따라 다를 수 있습니다. 본 가이드는 일반적 안내이며 개별 사안은 보험사·변호사에게 확인하세요.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'first-5min', text: '사고 직후 초동조치 — 5분이 결정' },
    { type: 'body', html: '<ol><li><strong>안전 확보</strong> — 비상등 점멸·삼각대 설치(주간 100m, 야간 200m). 2차 사고 방지 최우선.</li><li><strong>부상자 확인</strong> — 인사사고 시 즉시 119 신고. 부상자 임의 이동 금지(척추 손상 우려).</li><li><strong>다각도 사진 촬영</strong> — 사고 차량과 도로 위치 관계, 파손 부위 근접, 신호등·노면 상태, 상대 차량번호. 최소 10장 이상.</li><li><strong>112 / 119 신고</strong> — 인사사고는 의무. 단순 물피사고도 가급적 경찰 신고.</li><li><strong>상대방 정보 확인</strong> — 신분증·차량등록증·보험증서 사진 촬영.</li><li><strong>본인 보험사 접수</strong> — 자동차보험 콜센터(예: 1588-5114) 또는 앱.</li><li><strong>현장 진술</strong> — 경찰 출동 시 사실 그대로 진술. 과장·축소 금지.</li></ol>' },

    { type: 'risk', title: '뺑소니 형사처벌', html: '<p>인사사고 후 구호 조치 없이 현장을 이탈하면 도주차량(뺑소니)으로 형사처벌 대상. 운전자보험·자동차보험 모두 면책. 경상해라도 즉시 신고·구호가 원칙.</p>' },

    { type: 'h2', id: 'insurance-roles', text: '자동차보험 vs 운전자보험 — 어느 단계에 무엇을 보장?' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">단계</th><th style="padding:8px;border:1px solid #E5E7EB">자동차보험 (민사)</th><th style="padding:8px;border:1px solid #E5E7EB">운전자보험 (형사·행정)</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">상대 차량·신체 배상</td><td style="padding:8px;border:1px solid #E5E7EB">대인·대물 한도 내 보상</td><td style="padding:8px;border:1px solid #E5E7EB">무관</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">내 차 수리비</td><td style="padding:8px;border:1px solid #E5E7EB">자기차량 한도 내 보상</td><td style="padding:8px;border:1px solid #E5E7EB">무관</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">내 부상 치료</td><td style="padding:8px;border:1px solid #E5E7EB">자동차상해 한도 내 보상</td><td style="padding:8px;border:1px solid #E5E7EB">골절 진단·수술 특약 시 정액</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">12대 중과실 형사 합의금</td><td style="padding:8px;border:1px solid #E5E7EB">미보장</td><td style="padding:8px;border:1px solid #E5E7EB">교통사고처리지원금</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">변호사 선임비</td><td style="padding:8px;border:1px solid #E5E7EB">미보장</td><td style="padding:8px;border:1px solid #E5E7EB">변호사선임비 한도 내</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">형사 벌금</td><td style="padding:8px;border:1px solid #E5E7EB">미보장</td><td style="padding:8px;border:1px solid #E5E7EB">벌금 한도 내</td></tr></table>' },

    { type: 'h2', id: 'fault', text: '과실비율 협의' },
    { type: 'body', html: '<p>과실비율은 사고 당사자가 각자 잘못한 비율. 보험사가 1차 협의를 진행하고 분쟁 시 손해보험협회 분쟁심의위원회로 신청 가능. 과실비율은 도로교통법·판례 기준이며, 본인이 100% 무과실이라고 단정하지 않는 것이 합리적 협상 자세입니다.</p><h3>분쟁심의 신청</h3><ul><li>손해보험협회 자동차사고과실비율 분쟁심의위원회</li><li>신청은 보험사 또는 본인이 가능</li><li>심의 기간 약 2~4개월</li></ul>' },

    { type: 'h2', id: 'twelve', text: '12대 중과실 사고 시 형사 대응' },
    { type: 'body', html: '<p>교통사고처리 특례법상 12대 중과실 사고는 피해자 합의와 무관하게 형사처벌 대상이 됩니다.</p><ol><li>신호 위반 / 중앙선 침범</li><li>속도위반(20km/h 초과)</li><li>앞지르기·철길 건널목·횡단보도 사고</li><li>무면허·음주 운전</li><li>보도 침범·승객 추락 의무 위반</li><li>어린이보호구역 사고</li><li>화물 고정 의무 위반</li></ol><p>이 중 음주·뺑소니는 보험 면책. 12대 중과실 사고 발생 시 운전자보험의 진가가 발휘됩니다.</p>' },

    { type: 'h2', id: 'criminal', text: '형사 절차 — 사고 후 시간순' },
    { type: 'body', html: '<ol><li>사고 발생 → 경찰 출동·조사</li><li>피해자 진단(부상 정도 확인) → 형사 입건 여부 결정</li><li>경찰 조사 → 검찰 송치</li><li>검찰 약식 기소 또는 정식 재판 결정</li><li>약식: 벌금형 → 운전자보험 벌금 담보 청구</li><li>정식 재판: 변호사 선임 → 운전자보험 변호사 선임비 담보 청구</li><li>형 확정 → 벌금 납부 또는 형 집행</li></ol>' },

    { type: 'h2', id: 'settle', text: '합의·치료·보험금 수령' },
    { type: 'body', html: '<p>피해자 치료가 어느 정도 진행되면 보험사 간 합의 단계로 진행됩니다.</p><ul><li>보험사 손해사정인이 치료비·소득 손실·위자료 산정</li><li>가해자 자동차보험에서 피해자에게 합의금 지급</li><li>운전자보험은 가해자(본인)에게 형사 합의금 사전 지급</li><li>치료 중 가해자 본인의 부상은 자동차상해 또는 본인 자동차 의료비특약</li></ul>' },

    { type: 'h2', id: 'mistakes', text: '자주 하는 실수' },
    { type: 'body', html: '<ul><li><strong>현장 사진 부족</strong> — 과실비율 입증 어려워짐</li><li><strong>경찰 신고 생략</strong> — 인사사고를 단순 물피로 처리하다 후일 분쟁</li><li><strong>섣부른 합의</strong> — 후유증·재발 가능성 미반영</li><li><strong>음주 후 사고 신고 회피</strong> — 뺑소니로 처리되어 처벌 가중</li><li><strong>운전자보험 미가입</strong> — 12대 중과실 사고 시 본인 부담 수천만원</li><li><strong>본인 진술 모순</strong> — 경찰 진술과 보험사 신고 내용이 다르면 분쟁 사유</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '경상해 사고도 경찰 신고해야 하나요?', a: '인사사고는 의무 신고. 단순 물피라도 분쟁 대비 가급적 신고 권장.' },
      { q: '블랙박스 영상은 보험사가 자동으로 받나요?', a: '아닙니다. 본인이 영상 파일을 보험사에 직접 제출해야 합니다.' },
      { q: '가해자 보험사가 합의를 미루면?', a: '본인 보험사를 통해 손해보험협회 분쟁심의 또는 금감원 민원 신청.' },
      { q: '음주 운전자에게 사고를 당했어요. 어떻게 받나요?', a: '가해자 자동차보험에서 보상. 가해자 음주는 본인 운전자보험 면책 사유이지 피해자 보상에는 무관.' },
      { q: '뺑소니 피해자가 됐어요.', a: '본인 자동차보험의 무보험차상해 담보 활용. 한도 2억이 일반적.' },
      { q: '12대 중과실 사고로 형사 입건됐어요. 변호사를 꼭 써야 하나요?', a: '약식 기소면 본인 대응 가능. 정식 재판으로 가면 변호사 권장. 운전자보험 변호사선임비 활용.' },
      { q: '치료비를 자동차보험과 실손에서 둘 다 받을 수 있나요?', a: '교통사고 의료비는 자동차보험 우선. 자동차보험 치료비 보상 후 부족분에 한해 실손 청구 가능.' },
      { q: '사고 후 보험료가 얼마나 오르나요?', a: '대인 사고 1건당 할증 1~3등급, 자동차보험료 10~30% 인상.' },
    ]},

    { type: 'sources', items: [
      { label: '교통사고처리 특례법', url: 'https://www.law.go.kr', org: '국가법령정보센터', accessedAt: '2026-04-27' },
      { label: '손해보험협회 자동차사고 과실비율 분쟁심의', url: 'https://accident.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-27' },
      { label: '도로교통법', url: 'https://www.law.go.kr', org: '국가법령정보센터', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

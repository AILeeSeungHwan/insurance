// data/addons.js — 보조 생활 콘텐츠(Addon) 메타 — Level C / 쿠팡 파트너스 전용
// 보험상품 자체에는 쿠팡 링크 금지. Addon에만 연결.

const addons = [
  {
    id: 'A0001', slug: 'blackbox', category: 'addon',
    title: '블랙박스 구매 가이드 — 자동차보험·운전자보험 할인과 사고처리 필수품',
    description: '블랙박스 장착 시 다이렉트 자동차보험 2~5% 할인 + 사고 과실비율 입증의 핵심. 전방·후방 2채널, 주차녹화, 배터리 방전 방지 등 선택 기준을 정리합니다.',
    addonCategory: 'dashcam', relatedInsuranceCategorySlugs: ['car','driver'],
    coupangSearchQuery: '블랙박스 2채널', coupangProductKey: '블랙박스',
    ymylLevel: 'C', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['블랙박스','자동차보험'],
  },
  {
    id: 'A0002', slug: 'car-emergency-hammer', category: 'addon',
    title: '차량 비상탈출용 해머·안전벨트 커터 — 운전자보험의 물리적 보완재',
    description: '침수·전복 시 유리창 깨기 및 안전벨트 절단을 위한 비상용품. 운전자보험 가입과 함께 챙기면 좋은 실물 안전장비의 선택 기준을 정리합니다.',
    addonCategory: 'car-safety', relatedInsuranceCategorySlugs: ['car','driver'],
    coupangSearchQuery: '비상탈출 망치', coupangProductKey: '비상탈출망치',
    ymylLevel: 'C', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['비상탈출','안전용품'],
  },
  {
    id: 'A0003', slug: 'car-air-purifier', category: 'addon',
    title: '차량용 공기청정기 — 장시간 운전자의 호흡기 건강 보조',
    description: '차량 실내 공기질과 운전 피로도 관계, 센서 표시·HEPA 필터 등급·소음 기준으로 제품 선택 가이드를 정리합니다.',
    addonCategory: 'car-accessory', relatedInsuranceCategorySlugs: ['car'],
    coupangSearchQuery: '차량용 공기청정기 HEPA', coupangProductKey: '공기청정기',
    ymylLevel: 'C', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['공기청정기','차량'],
  },
  {
    id: 'A0004', slug: 'baby-car-seat', category: 'addon',
    title: '유아 카시트 선택 가이드 — 태아·어린이보험 가입 전후 체크리스트',
    description: '유럽 R129(i-Size)·국내 KC 인증 기준, 체중·신장별 단계 선택, ISOFIX·서포트레그 차이 등 안전 기준을 정리합니다.',
    addonCategory: 'baby-safety', relatedInsuranceCategorySlugs: [],
    coupangSearchQuery: '유아 카시트 ISOFIX', coupangProductKey: '카시트',
    ymylLevel: 'C', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['카시트','유아안전'],
  },
  {
    id: 'A0005', slug: 'senior-fall-prevention', category: 'addon',
    title: '시니어 낙상방지 용품 — 간병·장기요양보험과 함께 챙기는 생활 안전',
    description: '욕실 미끄럼 방지·손잡이·바닥 매트·비상벨 등 집 내 낙상 리스크를 줄이는 용품 선택 가이드. 낙상 한 번은 장기 요양으로 이어질 수 있습니다.',
    addonCategory: 'senior-care', relatedInsuranceCategorySlugs: [],
    coupangSearchQuery: '욕실 미끄럼방지 매트 손잡이', coupangProductKey: '미끄럼방지',
    ymylLevel: 'C', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['시니어','낙상방지'],
  },
  {
    id: 'A0006', slug: 'travel-safety-belt', category: 'addon',
    title: '해외여행용 복대·안전용품 — 여행자보험과 함께 챙기는 도난 대비',
    description: '복대·목걸이형 지갑·자물쇠·여행용 약상자 등 해외여행 필수 안전용품의 선택 기준과 여행자보험 휴대품 담보와의 관계.',
    addonCategory: 'travel-safety', relatedInsuranceCategorySlugs: ['travel'],
    coupangSearchQuery: '여행용 복대', coupangProductKey: '여행복대',
    ymylLevel: 'C', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['여행','안전용품'],
  },
  {
    id: 'A0007', slug: 'pet-health-checker', category: 'addon',
    title: '반려동물 건강체크 용품 — 펫보험 청구 시 유용한 관찰 도구',
    description: '체온계·체중계·구강 체크 도구 등 반려동물의 상태를 일상적으로 관찰할 수 있는 용품 선택 가이드. 조기 발견은 펫보험 청구·치료 성공률에 직결됩니다.',
    addonCategory: 'pet-care', relatedInsuranceCategorySlugs: ['pet'],
    coupangSearchQuery: '반려동물 체온계 체중계', coupangProductKey: '반려동물체온계',
    ymylLevel: 'C', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['반려동물','건강체크'],
  },
  {
    id: 'A0008', slug: 'home-blood-pressure', category: 'addon',
    title: '가정용 혈압계 — 심혈관계 보험 진단 전후 자가 모니터링',
    description: '고혈압·심혈관 관련 보험 가입 시 고지사항과 관련된 자가 측정의 의미, 팔뚝형·손목형 차이, 정확도 높은 제품 선택 기준.',
    addonCategory: 'health-tool', relatedInsuranceCategorySlugs: ['cancer'],
    coupangSearchQuery: '가정용 혈압계 팔뚝형', coupangProductKey: '혈압계',
    ymylLevel: 'C', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['혈압계','가정용의료기기'],
  },
]

module.exports = addons

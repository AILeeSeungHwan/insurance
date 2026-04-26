const tools = [
  {
    id: 'T0001', slug: 'silson-premium', category: 'tool', calculator: 'silson-premium',
    title: '실손의료보험료 추정 계산기 — 4세대 기준 성별·연령별',
    description: '성별·연령·갱신주기를 입력하면 4세대 실손의료보험의 월 보험료를 추정합니다. 공시 통계 범위 내 대략값으로 실제 보험료는 인수 기준에 따라 달라집니다.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['실손','계산기'],
  },
  {
    id: 'T0002', slug: 'car-premium', category: 'tool', calculator: 'car-premium',
    title: '자동차보험료 간이 추정기 — 연령·차량등급·주행거리 기반',
    description: '연령대·차량 등급·연간 주행거리·무사고 연수를 입력하면 자동차보험 연 보험료를 추정합니다. 실제 보험료는 다이렉트 보험사 공식 견적과 다를 수 있습니다.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['자동차','계산기'],
  },
  {
    id: 'T0003', slug: 'cancer-coverage-need', category: 'tool', calculator: 'cancer-coverage-need',
    title: '암 진단비 적정선 계산기 — 가계 재무 기반 권장 한도',
    description: '월 소득·지출·치료기간·저축을 기반으로 암 진단 시 필요한 진단비 한도를 추정합니다. 실제 필요액은 암 종류와 치료법 선택에 따라 크게 달라집니다.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['암보험','진단비','계산기'],
  },
  {
    id: 'T0004', slug: 'driver-liability-need', category: 'tool', calculator: 'driver-liability-need',
    title: '운전자보험 필요 한도 계산기 — 주행강도·상업용 여부 기반',
    description: '주행 강도와 상업용 주행 여부에 따라 벌금·변호사선임비·교통사고처리지원금 권장 한도를 제시합니다. 12대 중과실 사고에 대비한 최소 기준 참고용.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['운전자보험','계산기'],
  },
  {
    id: 'T0005', slug: 'premium-tax-credit', category: 'tool', calculator: 'premium-tax-credit',
    title: '보험료 세액공제 절세 계산기 — 보장성 연 100만원 한도',
    description: '월 납입 보장성 보험료를 입력하면 연 100만원 한도 내 세액공제 환급액(13.2%)을 계산합니다. 장애인 전용은 16.5%로 계산됩니다.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['세액공제','절세','계산기'],
  },
  {
    id: 'T0006', slug: 'pension-retirement-need', category: 'tool', calculator: 'pension-retirement-need',
    title: '연금보험 노후자금 필요액 계산기 — 3층 연금 구조 기반',
    description: '은퇴 후 월 필요 생활비·노후기간·예상 국민연금·퇴직연금 수령액을 입력하면 추가로 필요한 노후자금을 추정합니다. 인플레이션 별도 고려 필요.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['연금','노후','계산기'],
  },
  {
    id: 'T0007', slug: 'surrender-value-compare', category: 'tool', calculator: 'surrender-value-compare',
    title: '해지환급금 vs 납입보험료 계산기 — 상품 유형별 환급률',
    description: '순수 보장 갱신형, 비갱신 저해지, 종신·저축성 등 상품 유형별 대략적 해지환급률을 바탕으로 해지 시 손실액을 계산합니다.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['해지환급','계산기'],
  },
  {
    id: 'T0008', slug: 'inflation-renewal', category: 'tool', calculator: 'inflation-renewal',
    title: '갱신형 보험료 인플레이션 시뮬레이션 — 장기 총 납입액 예측',
    description: '현재 월 보험료에 5년 주기 N% 인상이 반복될 때 15~30년 후 보험료가 어디까지 오를 수 있는지 시뮬레이션합니다. 갱신형 vs 비갱신형 선택에 참고.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['갱신형','인플레이션','계산기'],
  },
  {
    id: 'T0009', slug: 'pet-insurance-premium', category: 'tool', calculator: 'pet-insurance-premium',
    title: '펫보험 예상 보험료 계산기 — 강아지·고양이·플랜별',
    description: '반려동물 종류·나이·플랜(일반/프리미엄)에 따른 월 보험료를 추정합니다. 품종·과거 병력·갱신 경과에 따라 실제 보험료는 달라집니다.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['펫보험','계산기'],
  },
  {
    id: 'T0010', slug: 'copayment', category: 'tool', calculator: 'copayment',
    title: '실손보험 자기부담금 계산기 — 4세대 급여·비급여 구분',
    description: '4세대 실손보험 기준 급여 20%·비급여 30% 자기부담 구조와 외래·입원·응급실 최소 공제금액을 반영해 실손 청구 가능액을 추정합니다.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['실손','자기부담금','계산기'],
  },
]

module.exports = tools

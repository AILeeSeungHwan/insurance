const guides = [
  {
    id: 'G0001', slug: 'silson-claim-howto', category: 'guide', guideType: 'claim',
    title: '실손의료보험 청구 방법 — 모바일 앱·종이 제출 단계별 가이드',
    description: '실손 청구에 필요한 영수증·세부내역서·진료비 세부내역서 발급 순서, 보험사 앱·팩스·우편 제출 경로, 소액(3만원 이하) 간소화 청구까지 단계별로 정리합니다.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['실손청구','영수증','청구절차'],
    steps: [
      { name: '진료·영수증 확보', text: '병원·약국에서 진료비 영수증과 진료비 세부내역서를 받습니다. 30만원 이상 비급여는 세부내역서 필수.' },
      { name: '진단서 발급 (해당 시)', text: '입원·고액 청구는 진단서 또는 소견서가 필요할 수 있습니다.' },
      { name: '청구 경로 선택', text: '보험사 앱(사진 업로드) · 팩스 · 우편 중 선택. 소액은 앱이 빠릅니다.' },
      { name: '심사·지급', text: '보통 영업일 기준 3~5일. 추가 서류 요청 시 지연될 수 있음.' },
    ],
    relatedCategorySlug: 'silson', relatedToolSlugs: ['copayment'],
  },
  {
    id: 'G0002', slug: 'car-accident-process', category: 'guide', guideType: 'howto',
    title: '교통사고 사고처리 단계별 대응 — 초동조치부터 보험금 수령까지',
    description: '사고 직후 안전·사진·진술서 작성부터, 경찰신고·보험사 접수·과실비율 협의·치료·합의·보험금 수령까지 단계별로 정리합니다. 자동차보험과 운전자보험 개입 지점까지.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['교통사고','사고처리','과실비율'],
    relatedCategorySlug: 'car', relatedToolSlugs: ['driver-liability-need'],
  },
  {
    id: 'G0003', slug: 'tax-credit-guide', category: 'guide', guideType: 'tax',
    title: '보험료 세액공제·연말정산 활용 — 보장성·연금 공제 한도 총정리',
    description: '보장성 보험료 100만원 한도 13.2% 세액공제, 연금저축·IRP 900만원 한도 13.2~16.5% 세액공제 구조와 실제 환급액 계산 방법, 중복공제 주의사항을 정리합니다.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['세액공제','연말정산','IRP'],
    relatedCategorySlug: 'pension', relatedToolSlugs: ['premium-tax-credit'],
  },
  {
    id: 'G0004', slug: 'renewal-vs-non-renewal', category: 'guide', guideType: 'explainer',
    title: '갱신형 vs 비갱신형 보험 — 장기적으로 누가 더 유리한가',
    description: '갱신형의 초기 저렴함과 장기 보험료 급등 구조, 비갱신형의 초기 부담과 장기 안정성을 실제 인상 사례와 함께 비교. 상품별 적합성 판단 기준을 정리합니다.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['갱신형','비갱신형','장기보험'],
    relatedCategorySlug: 'cancer', relatedToolSlugs: ['inflation-renewal','surrender-value-compare'],
  },
  {
    id: 'G0005', slug: 'surrender-refund-understanding', category: 'guide', guideType: 'explainer',
    title: '해지환급금 완전 이해 — 저해지·표준형·무해지 구조 비교',
    description: '저해지환급형(해지 시 50~70% 환급)이 왜 보험료가 낮은지, 무해지는 왜 판매가 제한되는지, 표준형과 비교했을 때 어떤 케이스에 유리한지를 실제 수치로 정리합니다.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['해지환급','저해지','무해지'],
    relatedToolSlugs: ['surrender-value-compare'],
  },
  {
    id: 'G0006', slug: 'claim-dispute-guide', category: 'guide', guideType: 'howto',
    title: '보험금 분쟁 대응 — 금감원 분쟁조정·소비자원·소송 단계별 절차',
    description: '보험금 지급 거절·감액 시 대응 절차. 보험사 내부 민원 → 금감원 금융분쟁조정 신청 → 소비자원·소송으로 이어지는 단계와 필요 서류, 평균 소요 기간을 정리합니다.',
    ymylLevel: 'B', publishedAt: '2026-04-25', updatedAt: '2026-04-25',
    tags: ['보험금분쟁','분쟁조정','민원'],
    relatedCategorySlug: 'cancer',
  },
]

module.exports = guides

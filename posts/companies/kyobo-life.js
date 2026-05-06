const post = {
  id: 'C0003',
  sections: [
    { type: 'intro', html: '<p><strong>교보생명보험은 1958년 설립된 한국의 대표적 생명보험사 중 하나</strong>로, 종신·변액·연금 등 전통적 생명보험 라인업과 더불어 광화문 교보문고로 잘 알려진 교보그룹의 핵심 계열사입니다. 자산총계 기준 생명보험 빅3에 속하며, 변액보험 운용 능력에서 시장 인지도를 가지고 있습니다.</p><p>이 글은 교보생명의 회사 개요·재무건전성·주력 상품군·청구 채널을 정리합니다. 본 사이트는 이 보험사의 상품을 판매·모집하지 않습니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 모든 수치는 공시 자료 기준. 정확한 지표는 교보생명 공시실에서 확인.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">정식 명칭</td><td style="padding:8px;border:1px solid #E5E7EB">교보생명보험 주식회사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">분류</td><td style="padding:8px;border:1px solid #E5E7EB">생명보험사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">설립</td><td style="padding:8px;border:1px solid #E5E7EB">1958년</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">시장 위치</td><td style="padding:8px;border:1px solid #E5E7EB">생명보험 빅3 (자산 기준)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">공식 웹사이트</td><td style="padding:8px;border:1px solid #E5E7EB"><a href="https://www.kyobo.co.kr" target="_blank" rel="noopener noreferrer">www.kyobo.co.kr</a></td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">고객센터</td><td style="padding:8px;border:1px solid #E5E7EB">1588-1001</td></tr></table>' },

    { type: 'h2', id: 'history', text: '회사 개요' },
    { type: 'body', html: '<p>교보생명은 보유 계약 수에서 업계 상위권을 유지하며, 변액보험·종신보험에 강점을 가진 회사로 평가됩니다. 영업조직과 디지털 채널을 함께 운영하며 교보문고·교보생명빌딩 등 그룹 자산을 통한 브랜드 인지도가 높습니다.</p>' },

    { type: 'h2', id: 'soundness', text: '재무건전성 (공시 기반)' },
    { type: 'info', title: '재무 지표 기준', html: '<p>K-ICS·자본 규모 등 정확한 수치는 교보생명 공시실 또는 <a href="https://fisis.fss.or.kr" target="_blank" rel="noopener noreferrer">FISIS</a>에서 확인.</p>' },
    { type: 'body', html: '<p>교보생명은 K-ICS 규제 기준 이상의 지급여력비율을 유지하는 것으로 공시됩니다. 자산 규모는 빅3에 속하며 신용평가 등급도 상위권. 민원 지표는 보유계약 대비 양호 수준.</p>' },

    { type: 'h2', id: 'products', text: '주요 상품 카테고리' },
    { type: 'body', html: '<ul><li><strong>종신·정기보험</strong> — 전통 사망 보장</li><li><strong>변액보험·변액연금</strong> — 펀드 운용 강점</li><li><strong>건강·CI보험</strong> — 암·뇌·심 중대질병 보장</li><li><strong>연금저축·즉시연금</strong></li><li><strong>어린이·태아보험</strong></li><li><strong>실손의료보험</strong> (4세대 표준약관)</li></ul>' },

    { type: 'h2', id: 'claim', text: '청구 채널·고객센터' },
    { type: 'body', html: '<ul><li>모바일 앱·홈페이지 e-청구</li><li>콜센터 1588-1001</li><li>전국 영업점</li><li>설계사 대행</li></ul><p>실손 청구 간소화법 적용 — 환자 동의 시 병원 직접 전송.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '변액보험 수익률이 보장되나요?', a: '아니오. 변액은 펀드 운용 결과에 따라 변동. 최저보증옵션이 있어도 중도 해지 시 손실 가능.' },
      { q: '교보생명 종신보험 환급률은?', a: '20년 납 완료 시 일반적으로 95% 이상. 중도 해지 시 시기별 환급률에 따라 차감.' },
      { q: '청구 처리는 평균 며칠?', a: '소액 3~5일, 고액·진단서 5~10일.' },
      { q: '광화문 본사 외 지점은 어디서 찾나요?', a: '교보생명 홈페이지 지점 검색 메뉴.' },
      { q: '예금자보호 적용되나요?', a: '예금자보호법상 해약환급금 5,000만원 한도 내 보호.' },
      { q: '다이렉트와 설계사 가격 차이?', a: '동일 상품도 사업비 구조 차이로 다이렉트가 5~15% 저렴한 경우.' },
      { q: '변액연금 수령 시 과세는?', a: '10년 이상 유지 + 비과세 한도 내면 비과세. 그 외는 이자소득 과세.' },
      { q: '계약 후 회사 인수합병 영향?', a: '약관 자체는 유지. 새 회사가 동일 약관으로 보장 승계.' },
    ]},

    { type: 'sources', items: [
      { label: '교보생명 공시실', url: 'https://www.kyobo.co.kr', org: '교보생명보험', accessedAt: '2026-04-28' },
      { label: '생명보험협회 공시실', url: 'https://www.klia.or.kr', org: '생명보험협회', accessedAt: '2026-04-28' },
      { label: '금감원 FISIS', url: 'https://fisis.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-28' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

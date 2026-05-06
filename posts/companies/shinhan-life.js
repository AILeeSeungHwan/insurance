const post = {
  id: 'C0004',
  sections: [
    { type: 'intro', html: '<p><strong>신한라이프생명보험은 2021년 7월 신한생명과 오렌지라이프(구 ING생명)의 합병으로 출범</strong>한 신한금융그룹 산하 생명보험사입니다. 합병 직후부터 자산 규모 빅4에 진입했으며, 디지털·헬스케어 연계 상품에서 적극적인 행보를 보이고 있습니다.</p><p>이 글은 신한라이프의 회사 개요·재무건전성·주력 상품·청구 채널을 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 모든 수치는 공시 자료 기준. 정확한 지표는 신한라이프 공시실에서 확인.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">정식 명칭</td><td style="padding:8px;border:1px solid #E5E7EB">신한라이프생명보험 주식회사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">분류</td><td style="padding:8px;border:1px solid #E5E7EB">생명보험사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">설립</td><td style="padding:8px;border:1px solid #E5E7EB">2021년 7월 (신한생명+오렌지라이프 합병)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">모회사</td><td style="padding:8px;border:1px solid #E5E7EB">신한금융지주</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">시장 위치</td><td style="padding:8px;border:1px solid #E5E7EB">생명보험 빅4</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">공식 웹사이트</td><td style="padding:8px;border:1px solid #E5E7EB"><a href="https://www.shinhanlife.co.kr" target="_blank" rel="noopener noreferrer">www.shinhanlife.co.kr</a></td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">고객센터</td><td style="padding:8px;border:1px solid #E5E7EB">1588-5800</td></tr></table>' },

    { type: 'h2', id: 'history', text: '회사 개요' },
    { type: 'body', html: '<p>신한금융그룹의 보험 부문 핵심 회사. 신한은행·신한카드·신한투자증권 등 그룹 계열사와 시너지를 활용한 종합 금융 서비스를 제공합니다. 합병 후 통합 IT 시스템·상품 라인업 정비를 거쳐 디지털·헬스케어 분야에서 적극적인 신상품을 출시하고 있습니다.</p>' },

    { type: 'h2', id: 'soundness', text: '재무건전성 (공시 기반)' },
    { type: 'info', title: '재무 지표 기준', html: '<p>K-ICS·자본 규모는 공시. 정확한 수치는 신한라이프 공시실에서 확인.</p>' },
    { type: 'body', html: '<p>합병 직후부터 자산 규모 빅4 진입. K-ICS 규제 기준 이상 유지. 신한금융그룹 자본력을 배경으로 안정적 자본 건전성 평가.</p>' },

    { type: 'h2', id: 'products', text: '주요 상품 카테고리' },
    { type: 'body', html: '<ul><li><strong>종신·정기보험</strong> — 디지털 가입 비중 확대</li><li><strong>건강·헬스케어 연계 상품</strong> — 건강관리 앱 연동</li><li><strong>연금·변액연금</strong></li><li><strong>어린이보험</strong></li><li><strong>실손의료보험</strong> (4세대 표준)</li></ul>' },

    { type: 'h2', id: 'claim', text: '청구 채널·고객센터' },
    { type: 'body', html: '<ul><li>신한라이프 모바일 앱 — 영수증 사진 청구</li><li>홈페이지 e-청구</li><li>콜센터 1588-5800</li><li>신한은행 영업점 (방카슈랑스 가입자)</li></ul><p>실손 청구 간소화법 적용.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '신한생명 시절 가입한 계약은 그대로?', a: '예. 합병 시 기존 약관·보험금 모두 승계. 변경 사항 없음.' },
      { q: '오렌지라이프 시절 계약은?', a: '동일하게 신한라이프로 자동 승계.' },
      { q: '신한카드와 묶음 할인이 있나요?', a: '신한금융그룹 다채널 활용 일부 혜택. 가입 시 확인.' },
      { q: '변액보험 펀드 변경 가능한가요?', a: '연 12회까지 무료 변경 일반적. 약관 확인.' },
      { q: '청구 평균 처리 기간?', a: '소액 영업일 3~5일, 고액 5~10일.' },
      { q: '디지털 가입 시 보험료 차이?', a: '다이렉트 채널이 사업비 절감으로 5~15% 저렴.' },
      { q: '신한은행 방문 가입과 본사 가입 차이?', a: '약관 동일. 방카슈랑스는 은행 직원 응대.' },
      { q: '예금자보호 한도?', a: '해약환급금 5,000만원까지.' },
    ]},

    { type: 'sources', items: [
      { label: '신한라이프 공시실', url: 'https://www.shinhanlife.co.kr', org: '신한라이프생명보험', accessedAt: '2026-04-28' },
      { label: '생명보험협회 공시실', url: 'https://www.klia.or.kr', org: '생명보험협회', accessedAt: '2026-04-28' },
      { label: '금감원 FISIS', url: 'https://fisis.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-28' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

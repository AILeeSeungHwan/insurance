const post = {
  id: 'C0010',
  sections: [
    { type: 'intro', html: '<p><strong>NH농협생명보험은 2012년 농협중앙회 보험사업이 분리·신설된 생명보험사</strong>입니다. 농협중앙회·NH투자증권·NH농협은행 등 농협금융 계열 네트워크를 활용한 방카슈랑스 비중이 높으며, 농어촌·지방 영업력이 강합니다. 연금·종신·건강 라인업을 운영하며 농민·농촌 가구 특화 상품도 운영합니다.</p><p>이 글은 NH농협생명의 회사 개요·재무건전성·주력 상품·청구 채널을 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험상품을 판매·모집하지 않습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">정식 명칭</td><td style="padding:8px;border:1px solid #E5E7EB">NH농협생명보험 주식회사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">분류</td><td style="padding:8px;border:1px solid #E5E7EB">생명보험사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">설립</td><td style="padding:8px;border:1px solid #E5E7EB">2012년 (농협 보험사업 분리)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">시장 위치</td><td style="padding:8px;border:1px solid #E5E7EB">생명보험 빅5</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">모회사</td><td style="padding:8px;border:1px solid #E5E7EB">농협금융지주</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">공식 웹사이트</td><td style="padding:8px;border:1px solid #E5E7EB"><a href="https://www.nhlife.co.kr" target="_blank" rel="noopener noreferrer">www.nhlife.co.kr</a></td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">고객센터</td><td style="padding:8px;border:1px solid #E5E7EB">1544-4000</td></tr></table>' },

    { type: 'h2', id: 'history', text: '회사 개요' },
    { type: 'body', html: '<p>농협 보험사업 분리 후 빠르게 자산 빅5 진입. 농협 단위조합·NH농협은행 영업점을 통한 방카슈랑스가 핵심 영업 채널. 농어촌 지역 영업력·연금보험에서 시장 인지도 보유.</p>' },

    { type: 'h2', id: 'soundness', text: '재무건전성 (공시 기반)' },
    { type: 'info', title: '재무 지표 기준', html: '<p>K-ICS·자본 규모는 공시. NH농협생명 공시실 또는 FISIS에서 확인.</p>' },
    { type: 'body', html: '<p>K-ICS 규제 기준 이상 유지. 농협중앙회 자본력·자산 규모를 배경으로 안정적. 민원 지표 양호.</p>' },

    { type: 'h2', id: 'products', text: '주요 상품 카테고리' },
    { type: 'body', html: '<ul><li><strong>연금·즉시연금·변액연금</strong></li><li><strong>종신·정기보험</strong></li><li><strong>건강·암·CI보험</strong></li><li><strong>어린이보험</strong></li><li><strong>저축성보험</strong></li><li><strong>실손의료보험 4세대</strong></li></ul>' },

    { type: 'h2', id: 'claim', text: '청구 채널·고객센터' },
    { type: 'body', html: '<ul><li>NH농협생명 앱·홈페이지 e-청구</li><li>콜센터 1544-4000</li><li>NH농협은행 영업점 (방카슈랑스)</li><li>지역 농협 단위조합</li></ul><p>실손 청구 간소화법 적용.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '농협 보험과 NH농협생명은 같은 회사?', a: '농협중앙회 보험사업이 2012년 분리·신설된 회사가 NH농협생명. 옛 농협 보험 계약은 자동 승계.' },
      { q: '농협은행 가입과 본사 가입 차이?', a: '약관 동일. 방카슈랑스는 은행 직원 응대.' },
      { q: '농민·농가 특화 상품이 있나요?', a: '농기계·농민 안전 등 일부 특화 상품 운영. 가입 시 확인.' },
      { q: '연금보험 강하다고 들었는데?', a: '방카슈랑스 채널을 통한 연금보험 영업 강한 편. 변액연금·즉시연금 라인업 운영.' },
      { q: '청구 처리 평균?', a: '소액 3~5일, 고액 5~10일.' },
      { q: '재무건전성?', a: 'K-ICS 규제 기준 이상. 농협중앙회 자본력 배경.' },
      { q: '예금자보호?', a: '해약환급금 5,000만원 한도.' },
      { q: 'NH농협손해보험과는 다른 회사?', a: '예. 별개 법인. 손해보험은 NH농협손해보험.' },
    ]},

    { type: 'sources', items: [
      { label: 'NH농협생명 공시실', url: 'https://www.nhlife.co.kr', org: 'NH농협생명보험', accessedAt: '2026-04-28' },
      { label: '생명보험협회 공시실', url: 'https://www.klia.or.kr', org: '생명보험협회', accessedAt: '2026-04-28' },
      { label: '금감원 FISIS', url: 'https://fisis.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-28' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

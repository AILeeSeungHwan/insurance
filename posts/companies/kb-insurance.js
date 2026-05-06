const post = {
  id: 'C0008',
  sections: [
    { type: 'intro', html: '<p><strong>KB손해보험은 1959년 설립된 손해보험사로, 2015년 KB금융그룹에 인수된 이후 금융그룹 시너지를 적극 활용하는 회사</strong>입니다. KB국민은행·KB증권·KB카드 등 그룹 계열사 네트워크와 KB Pay·KB스타뱅킹 앱을 통한 디지털 통합이 강점입니다.</p><p>이 글은 KB손해보험의 회사 개요·재무건전성·주력 상품·청구 채널을 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험상품을 판매·모집하지 않습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">정식 명칭</td><td style="padding:8px;border:1px solid #E5E7EB">KB손해보험 주식회사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">분류</td><td style="padding:8px;border:1px solid #E5E7EB">손해보험사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">설립</td><td style="padding:8px;border:1px solid #E5E7EB">1959년 (LIG손해보험 등 전신) / 2015년 KB금융그룹 인수</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">시장 위치</td><td style="padding:8px;border:1px solid #E5E7EB">손해보험 빅5</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">모회사</td><td style="padding:8px;border:1px solid #E5E7EB">KB금융지주</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">공식 웹사이트</td><td style="padding:8px;border:1px solid #E5E7EB"><a href="https://www.kbinsure.co.kr" target="_blank" rel="noopener noreferrer">www.kbinsure.co.kr</a></td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">고객센터</td><td style="padding:8px;border:1px solid #E5E7EB">1544-0114</td></tr></table>' },

    { type: 'h2', id: 'history', text: '회사 개요' },
    { type: 'body', html: '<p>KB금융그룹 손해보험 부문 핵심 회사. 자동차·실손·장기손해보험 풀라인업. 직장단체보험 영업이 강하며 KB국민은행 점포 네트워크를 활용한 방카슈랑스 비중도 높음.</p>' },

    { type: 'h2', id: 'soundness', text: '재무건전성 (공시 기반)' },
    { type: 'info', title: '재무 지표 기준', html: '<p>K-ICS·자본 규모는 공시. KB손해보험 공시실 또는 FISIS에서 확인.</p>' },
    { type: 'body', html: '<p>K-ICS 규제 기준 이상 유지. KB금융그룹 자본력을 배경으로 안정적. 민원 지표 양호.</p>' },

    { type: 'h2', id: 'products', text: '주요 상품 카테고리' },
    { type: 'body', html: '<ul><li><strong>자동차보험 — KB 다이렉트</strong></li><li><strong>실손의료보험 4세대</strong></li><li><strong>운전자보험·암·치아·간병</strong></li><li><strong>직장단체보험</strong> — 직장 단체실손 시장 점유율 상위</li><li><strong>화재·배상·재난</strong></li></ul>' },

    { type: 'h2', id: 'claim', text: '청구 채널·고객센터' },
    { type: 'body', html: '<ul><li>KB손해보험 앱·KB스타뱅킹 연동</li><li>홈페이지 e-청구</li><li>콜센터 1544-0114</li><li>KB국민은행 영업점 (방카슈랑스)</li><li>전국 손해사정 직원</li></ul><p>실손 청구 간소화법 적용.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: 'LIG손해보험과 KB손해보험은 같은 회사?', a: '네. 2015년 KB금융그룹 인수 후 사명 변경. 기존 약관·계약 모두 그대로.' },
      { q: 'KB금융 다른 상품과 묶음 할인?', a: 'KB Pay·KB스타뱅킹 연동 일부 혜택 운영. 가입 시 확인.' },
      { q: '직장단체실손이 강하다는데?', a: '직장 단체실손 영업이 강한 편. 단체 가입자는 본 회사 가입 비율 높음.' },
      { q: '다이렉트 가격은?', a: '5대사 중 중간 수준. 본인 조건 견적 비교 권장.' },
      { q: '청구 처리 평균?', a: '소액 3~5일, 고액 5~10일.' },
      { q: 'KB국민은행 가입과 본사 가입 차이?', a: '약관 동일. 방카슈랑스는 은행 직원 응대.' },
      { q: '재무건전성 등급?', a: '글로벌 신평사 상위권. 정확한 등급은 공시실.' },
      { q: '예금자보호 한도?', a: '해약환급금 5,000만원.' },
    ]},

    { type: 'sources', items: [
      { label: 'KB손해보험 공시실', url: 'https://www.kbinsure.co.kr', org: 'KB손해보험', accessedAt: '2026-04-28' },
      { label: '손해보험협회 공시실', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-28' },
      { label: '금감원 FISIS', url: 'https://fisis.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-28' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

const post = {
  id: 'C0005',
  sections: [
    { type: 'intro', html: '<p><strong>삼성화재해상보험은 1952년 설립된 한국 손해보험 1위 회사</strong>입니다. 자동차보험·실손의료보험·장기손해보험·운전자보험 등 손해보험 전 영역에서 시장 점유율 상위를 유지하며, 다이렉트 채널 "애니카"로 잘 알려져 있습니다. 사고 처리 직원망이 전국 최대급으로 사고 출동·합의 응대에서 인지도가 높습니다.</p><p>이 글은 삼성화재의 회사 개요·재무건전성·주력 상품·청구 채널을 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험상품을 판매·모집하지 않습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">정식 명칭</td><td style="padding:8px;border:1px solid #E5E7EB">삼성화재해상보험 주식회사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">분류</td><td style="padding:8px;border:1px solid #E5E7EB">손해보험사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">설립</td><td style="padding:8px;border:1px solid #E5E7EB">1952년</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">시장 위치</td><td style="padding:8px;border:1px solid #E5E7EB">손해보험 1위</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대표 다이렉트 브랜드</td><td style="padding:8px;border:1px solid #E5E7EB">애니카 다이렉트</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">공식 웹사이트</td><td style="padding:8px;border:1px solid #E5E7EB"><a href="https://www.samsungfire.com" target="_blank" rel="noopener noreferrer">www.samsungfire.com</a></td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">고객센터</td><td style="padding:8px;border:1px solid #E5E7EB">1588-5114 (자동차)</td></tr></table>' },

    { type: 'h2', id: 'history', text: '회사 개요' },
    { type: 'body', html: '<p>삼성그룹 손해보험 핵심 계열사로 자산총계·보험료수입·영업수익에서 손해보험 시장 1위 유지. 자동차보험 다이렉트 채널 "애니카"는 시장 인지도 최상위. 사고처리 직원망이 전국 최대 규모라 사고 발생 시 평균 출동 시간이 짧은 편으로 평가됩니다.</p>' },

    { type: 'h2', id: 'soundness', text: '재무건전성 (공시 기반)' },
    { type: 'info', title: '재무 지표 기준', html: '<p>K-ICS는 분기 공시. 정확한 수치는 삼성화재 공시실 또는 FISIS에서 확인.</p>' },
    { type: 'body', html: '<p>손해보험 1위로서 안정적 자본 건전성 유지. K-ICS 규제 기준 상회. 신용평가 등급 글로벌 신평사 기준 상위권. 민원 지표는 보유계약 대비 양호 수준.</p>' },

    { type: 'h2', id: 'products', text: '주요 상품 카테고리' },
    { type: 'body', html: '<ul><li><strong>자동차보험</strong> — 애니카 다이렉트, 점유율 1위</li><li><strong>실손의료보험</strong> — 4세대 착한실손의료비보험</li><li><strong>운전자보험</strong> — 형사·행정 책임 보장</li><li><strong>장기손해보험</strong> — 암·치아·간병·종합</li><li><strong>여행자보험</strong> — 해외·국내</li><li><strong>화재·재난·배상책임</strong></li></ul><p>대표 상품: <a href="/products/samsung-silson-4g/">착한실손 4세대</a>, <a href="/products/samsung-direct-car/">애니카 다이렉트 자동차보험</a>, <a href="/products/samsung-travel/">해외여행자보험</a>.</p>' },

    { type: 'h2', id: 'claim', text: '청구 채널·고객센터' },
    { type: 'body', html: '<ul><li>다이렉트 앱 — AI OCR 자동 청구</li><li>홈페이지 e-청구</li><li>자동차 사고 1588-5114 (24시간)</li><li>실손 청구 1588-5114</li><li>전국 영업점 / 사고처리 직원 출동</li></ul><p>실손 청구 간소화법 적용. 자동차 사고 출동 평균 30~60분.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '삼성화재와 삼성생명은 같은 회사?', a: '아니오. 별개 법인. 삼성화재는 손해보험(자동차·실손 등), 삼성생명은 생명보험(종신·연금·암 등).' },
      { q: '애니카 다이렉트와 일반 채널 보장 차이?', a: '약관 동일. 다이렉트가 사업비 절감으로 5~15% 저렴.' },
      { q: '사고 처리 직원이 가장 많은가요?', a: '전국 직원망 최대급으로 평가됨. 단 지역별 차이가 있어 모든 곳에서 1위는 아님.' },
      { q: '다른 회사로 보험을 옮기면 무사고 경력 사라지나?', a: '아니오. 할인할증 등급은 보험사 간 공유. 옮겨도 유지.' },
      { q: '자동차+실손 묶음 할인 있나요?', a: '동일 회사 가입 시 일부 할인. 가입 시 확인.' },
      { q: '실손 청구 간소화는 모든 병원 가능?', a: '단계적 확대. 종합·상급종합 우선. 의원급 점진 적용.' },
      { q: '재무건전성이 가장 좋은 손해보험사인가?', a: '시장 1위로서 자본력 우수. 단정적 1위는 시점·지표마다 다름.' },
      { q: '예금자보호 적용?', a: '해약환급금 5,000만원 한도.' },
    ]},

    { type: 'sources', items: [
      { label: '삼성화재 공시실', url: 'https://www.samsungfire.com', org: '삼성화재해상보험', accessedAt: '2026-04-28' },
      { label: '손해보험협회 공시실', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-28' },
      { label: '금감원 FISIS', url: 'https://fisis.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-28' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

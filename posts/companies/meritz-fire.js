const post = {
  id: 'C0009',
  sections: [
    { type: 'intro', html: '<p><strong>메리츠화재해상보험은 1922년 설립된 한국에서 가장 오래된 손해보험사 중 하나</strong>입니다. 메리츠금융그룹 산하로 자동차·실손·운전자·치아·간병 등 풀라인업을 운영하며, 특히 치아·간병 등 장기손해보험에서 강한 시장 점유율을 보입니다.</p><p>이 글은 메리츠화재의 회사 개요·재무건전성·주력 상품·청구 채널을 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험상품을 판매·모집하지 않습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">정식 명칭</td><td style="padding:8px;border:1px solid #E5E7EB">메리츠화재해상보험 주식회사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">분류</td><td style="padding:8px;border:1px solid #E5E7EB">손해보험사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">설립</td><td style="padding:8px;border:1px solid #E5E7EB">1922년 (조선해상화재) / 2005년 메리츠로 사명 변경</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">시장 위치</td><td style="padding:8px;border:1px solid #E5E7EB">손해보험 빅5</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대표 다이렉트</td><td style="padding:8px;border:1px solid #E5E7EB">메리츠 다이렉트</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">공식 웹사이트</td><td style="padding:8px;border:1px solid #E5E7EB"><a href="https://www.meritzfire.com" target="_blank" rel="noopener noreferrer">www.meritzfire.com</a></td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">고객센터</td><td style="padding:8px;border:1px solid #E5E7EB">1566-7711</td></tr></table>' },

    { type: 'h2', id: 'history', text: '회사 개요' },
    { type: 'body', html: '<p>한국에서 가장 오래된 손해보험사 계보를 잇는 회사. 메리츠금융그룹 산하 손해보험 부문으로, 보유계약·영업이익에서 안정적 성장세. 치아보험·간병보험 시장에서 점유율 강함. 분쟁 시 고객지원실 응대 평가 양호.</p>' },

    { type: 'h2', id: 'soundness', text: '재무건전성 (공시 기반)' },
    { type: 'info', title: '재무 지표 기준', html: '<p>K-ICS·자본 규모는 공시. 메리츠화재 공시실 또는 FISIS에서 확인.</p>' },
    { type: 'body', html: '<p>K-ICS 규제 기준 이상 유지. 손해보험 빅5로서 안정적 자본 건전성. 민원 지표 양호.</p>' },

    { type: 'h2', id: 'products', text: '주요 상품 카테고리' },
    { type: 'body', html: '<ul><li><strong>치아보험 — 시장 점유율 상위</strong></li><li><strong>간병보험·장기요양</strong></li><li><strong>자동차보험 — 메리츠 다이렉트</strong></li><li><strong>실손의료보험 4세대</strong></li><li><strong>운전자·암·CI보험</strong></li><li><strong>화재·배상책임</strong></li></ul><p>대표 상품: <a href="/products/meritz-dental/">메리츠 치아보험</a>.</p>' },

    { type: 'h2', id: 'claim', text: '청구 채널·고객센터' },
    { type: 'body', html: '<ul><li>메리츠 다이렉트 앱</li><li>홈페이지 e-청구</li><li>콜센터 1566-7711</li><li>전국 영업점·손해사정 직원</li></ul><p>실손 청구 간소화법 적용.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '치아보험에서 1위인가요?', a: '시장 점유율 상위권. 단정적 1위는 시점에 따라 다름. 비교 시 약관 한도·면책기간 함께 확인.' },
      { q: '간병보험은 어떤가요?', a: '국가 장기요양 등급 연계 보장. 메리츠는 간병 전문 라인업 강한 편.' },
      { q: '메리츠 다이렉트 가격은?', a: '5대사 중 가격 경쟁력. 직접 견적 비교 권장.' },
      { q: '분쟁 시 응대 평가?', a: '고객지원실 응대 양호. 분쟁조정 신청은 별개로 금감원 가능.' },
      { q: '재무건전성?', a: 'K-ICS 규제 기준 이상. 메리츠금융그룹 시너지.' },
      { q: '예금자보호?', a: '해약환급금 5,000만원 한도.' },
      { q: '장기손해보험 묶음 할인?', a: '치아·간병·운전자 묶음 가입 시 일부 할인 가능. 가입 시 확인.' },
      { q: '메리츠금융그룹 다른 회사는?', a: '메리츠증권·메리츠캐피탈·메리츠자산운용 등.' },
    ]},

    { type: 'sources', items: [
      { label: '메리츠화재 공시실', url: 'https://www.meritzfire.com', org: '메리츠화재해상보험', accessedAt: '2026-04-28' },
      { label: '손해보험협회 공시실', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-28' },
      { label: '금감원 FISIS', url: 'https://fisis.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-28' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

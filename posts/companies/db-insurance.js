const post = {
  id: 'C0007',
  sections: [
    { type: 'intro', html: '<p><strong>DB손해보험은 1962년 동부화재로 출발해 2017년 DB손해보험으로 사명을 변경한 손해보험 빅3 회사</strong>입니다. 운전자보험·암·치아·종합 등 장기손해보험 라인업이 강하며, "프로미" 브랜드로 다이렉트 자동차보험 시장에서 강한 가격 경쟁력을 보유합니다.</p><p>이 글은 DB손해보험의 회사 개요·재무건전성·주력 상품·청구 채널을 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험상품을 판매·모집하지 않습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">정식 명칭</td><td style="padding:8px;border:1px solid #E5E7EB">DB손해보험 주식회사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">분류</td><td style="padding:8px;border:1px solid #E5E7EB">손해보험사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">설립</td><td style="padding:8px;border:1px solid #E5E7EB">1962년 (동부화재) / 2017년 사명 변경</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">시장 위치</td><td style="padding:8px;border:1px solid #E5E7EB">손해보험 빅3</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대표 다이렉트</td><td style="padding:8px;border:1px solid #E5E7EB">DB 다이렉트 (프로미)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">공식 웹사이트</td><td style="padding:8px;border:1px solid #E5E7EB"><a href="https://www.directdb.co.kr" target="_blank" rel="noopener noreferrer">www.directdb.co.kr</a></td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">고객센터</td><td style="padding:8px;border:1px solid #E5E7EB">1588-0100</td></tr></table>' },

    { type: 'h2', id: 'history', text: '회사 개요' },
    { type: 'body', html: '<p>DB금융그룹 산하 손해보험사. 자동차·운전자·장기손해보험에 강점을 가지며 "프로미드라이브" 운전자보험은 시장 점유율 상위. 사고 처리 영업일 평균이 짧은 편으로 평가됩니다.</p>' },

    { type: 'h2', id: 'soundness', text: '재무건전성 (공시 기반)' },
    { type: 'info', title: '재무 지표 기준', html: '<p>K-ICS·자본 규모는 공시. DB손해보험 공시실에서 확인.</p>' },
    { type: 'body', html: '<p>K-ICS 규제 기준 이상 유지. 자산 규모 손해보험 빅3. 민원 지표 양호.</p>' },

    { type: 'h2', id: 'products', text: '주요 상품 카테고리' },
    { type: 'body', html: '<ul><li><strong>자동차보험 — DB 다이렉트</strong></li><li><strong>운전자보험 — 프로미드라이브 (점유율 상위)</strong></li><li><strong>실손의료보험 4세대</strong></li><li><strong>암·치아·간병보험</strong></li><li><strong>화재·배상책임</strong></li></ul><p>대표 상품: <a href="/products/db-driver/">DB 프로미드라이브 운전자보험</a>.</p>' },

    { type: 'h2', id: 'claim', text: '청구 채널·고객센터' },
    { type: 'body', html: '<ul><li>프로미앱 — 영수증 사진 청구</li><li>홈페이지 e-청구</li><li>콜센터 1588-0100</li><li>전국 영업점·현장출동</li></ul><p>실손 청구 간소화법 적용.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '동부화재와 DB손해보험은 같은 회사?', a: '네. 사명만 변경. 기존 약관·계약 모두 그대로 승계.' },
      { q: '운전자보험 점유율이 1위인가요?', a: '시장 상위권으로 평가됨. 단정적 1위는 시점·지표마다 다름.' },
      { q: '다이렉트 가격 경쟁력은?', a: '5대사 중 가격 경쟁력 강한 편. 직접 견적 비교 권장.' },
      { q: '사고 처리 영업일 평균은?', a: '소액 3~5일, 고액 5~10일. 회사별 미세 차이.' },
      { q: '프로미앱 기능은?', a: '청구·계약 조회·사고 접수 통합.' },
      { q: '재무건전성?', a: 'K-ICS 규제 기준 이상. 공시실에서 정확한 수치 확인.' },
      { q: '예금자보호 한도?', a: '해약환급금 5,000만원.' },
      { q: '자동차+운전자보험 묶음 할인?', a: '같은 회사 가입 시 5~10% 가능.' },
    ]},

    { type: 'sources', items: [
      { label: 'DB손해보험 공시실', url: 'https://www.directdb.co.kr', org: 'DB손해보험', accessedAt: '2026-04-28' },
      { label: '손해보험협회 공시실', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-28' },
      { label: '금감원 FISIS', url: 'https://fisis.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-28' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

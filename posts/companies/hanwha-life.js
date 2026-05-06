const post = {
  id: 'C0002',
  sections: [
    { type: 'intro', html: '<p><strong>한화생명보험은 1946년 대한생명으로 출발해 2012년 한화생명으로 사명을 변경한 한국 최초의 생명보험사</strong>입니다. 자산 규모와 보유 계약 기준 생명보험 업계 상위권을 유지하며, 한화금융그룹 시너지를 활용한 종합 금융 서비스가 강점입니다.</p><p>이 글은 한화생명의 회사 개요·재무건전성 지표(K-ICS)·주력 상품군·청구 채널을 정리합니다. 본 사이트는 이 보험사의 상품을 판매·모집하지 않습니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 모든 수치는 공시 자료 기준의 일반적 범위. 정확한 지표는 한화생명 공시실에서 확인.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">정식 명칭</td><td style="padding:8px;border:1px solid #E5E7EB">한화생명보험 주식회사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">분류</td><td style="padding:8px;border:1px solid #E5E7EB">생명보험사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">설립</td><td style="padding:8px;border:1px solid #E5E7EB">1946년 (대한생명) / 2012년 한화생명 사명 변경</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">상장</td><td style="padding:8px;border:1px solid #E5E7EB">2010년 코스피 상장</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">시장 위치</td><td style="padding:8px;border:1px solid #E5E7EB">생명보험 상위권</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">공식 웹사이트</td><td style="padding:8px;border:1px solid #E5E7EB"><a href="https://www.hanwhalife.com" target="_blank" rel="noopener noreferrer">www.hanwhalife.com</a></td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">고객센터</td><td style="padding:8px;border:1px solid #E5E7EB">1588-6363</td></tr></table>' },

    { type: 'h2', id: 'history', text: '회사 개요' },
    { type: 'body', html: '<p>한국 최초로 설립된 생명보험사라는 역사적 위치를 지니며, 한화금융그룹 산하에서 한화손해보험·한화투자증권·한화자산운용 등과 시너지를 활용합니다. 영업조직, 방카슈랑스, 다이렉트(온라인) 채널을 모두 운영하며 디지털 전환에 적극적인 회사로 평가됩니다.</p>' },

    { type: 'h2', id: 'soundness', text: '재무건전성 (공시 기반)' },
    { type: 'info', title: '재무 지표 기준', html: '<p>지급여력비율(K-ICS)은 분기 공시. 정확한 수치는 한화생명 공시실 또는 <a href="https://fisis.fss.or.kr" target="_blank" rel="noopener noreferrer">금감원 FISIS</a>에서 확인.</p>' },
    { type: 'body', html: '<h3>지급여력비율 (K-ICS)</h3><p>한화생명은 K-ICS 규제 기준(150%) 이상의 지급여력비율을 유지하는 것으로 공시. 정확한 분기 비율은 공시실에서 확인.</p><h3>민원 지표</h3><p>금감원 보험소비자 민원평가 기준 일반 등급. 보유계약 대비 민원율은 업계 평균 수준.</p>' },

    { type: 'h2', id: 'products', text: '주요 상품 카테고리' },
    { type: 'body', html: '<ul><li><strong>종신·정기보험</strong> — 변액·종신 라인업</li><li><strong>건강·CI보험</strong> — 암·중대질병 진단비</li><li><strong>연금·변액연금</strong> — 세제적격 연금저축, 변액연금</li><li><strong>어린이·태아보험</strong></li><li><strong>실손의료보험</strong> (4세대 표준약관)</li><li><strong>저축성·즉시연금</strong></li></ul>' },

    { type: 'h2', id: 'claim', text: '청구 채널·고객센터' },
    { type: 'body', html: '<ul><li><strong>모바일 앱·홈페이지</strong> — 영수증 업로드 청구</li><li><strong>콜센터</strong> 1588-6363</li><li><strong>전국 영업점·고객 플라자</strong></li><li><strong>설계사 대행</strong></li></ul><p>2024.10 시행 실손 청구 간소화법 적용. 환자 동의 시 병원→보험사 자동 전송.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '한화생명과 한화손해보험은 다른 회사인가요?', a: '예. 별개 법인. 한화생명은 종신·연금·암 등, 한화손해보험은 자동차·실손·운전자 등 손해보험 영역 담당.' },
      { q: '대한생명 시절 가입 계약은 그대로 유지되나요?', a: '예. 사명 변경은 약관에 영향 없음. 모든 기존 계약 보장 내용 유지.' },
      { q: '한화생명 다이렉트 가입과 설계사 가입의 차이는?', a: '약관·보장 동일. 사업비 구조 차이로 보험료 5~15% 차이.' },
      { q: '청구 후 지급까지 평균 며칠?', a: '소액 영업일 3~5일. 고액·진단서 첨부는 5~10일.' },
      { q: '한화금융그룹 다른 상품과 묶음 할인이 있나요?', a: '한화손해보험 자동차+한화생명 종신 등 일부 묶음 할인 운영. 가입 시 확인.' },
      { q: '재무건전성이 갑자기 악화되면 어떻게 되나요?', a: '금감원이 적기시정조치 등을 통해 개선 요구. 가입자 보호는 예금자보호 한도 + 보험계약 이전 등 다단계 안전장치.' },
      { q: '공시실 자료는 어디서?', a: '한화생명 공시실 또는 생명보험협회 공시실.' },
      { q: '전화로 가입 가능한가요?', a: '텔레마케팅(TM) 채널 운영. 단 청약 시 약관 핵심 내용 확인은 본인 책임.' },
    ]},

    { type: 'sources', items: [
      { label: '한화생명 공시실', url: 'https://www.hanwhalife.com', org: '한화생명보험', accessedAt: '2026-04-28' },
      { label: '생명보험협회 공시실', url: 'https://www.klia.or.kr', org: '생명보험협회', accessedAt: '2026-04-28' },
      { label: '금감원 금융통계정보시스템', url: 'https://fisis.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-28' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

const post = {
  id: 'C0001',
  sections: [
    { type: 'intro', html: '<p><strong>삼성생명보험은 1957년 동방생명으로 출발해 1989년 삼성생명으로 사명을 변경한 한국 최대 생명보험사</strong>입니다. 자산총계와 보유 계약수에서 생명보험 시장 1위를 유지하고 있으며, 종신·정기·연금·변액·건강 전 영역에 걸친 풀라인업을 운영합니다.</p><p>이 글은 삼성생명의 회사 개요·재무건전성 지표(K-ICS)·주력 상품군·청구 채널·공시 기반 일반 정보를 정리합니다. 본 사이트는 이 보험사의 상품을 판매·모집하지 않으며, 가입·해지·청구는 반드시 삼성생명 공식 채널을 이용해야 합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 모든 수치는 공시 자료 기준의 일반적 범위 추정. 최신 정확한 지표는 금감원 금융통계정보시스템·삼성생명 공시실에서 직접 확인.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">정식 명칭</td><td style="padding:8px;border:1px solid #E5E7EB">삼성생명보험 주식회사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">분류</td><td style="padding:8px;border:1px solid #E5E7EB">생명보험사</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">설립</td><td style="padding:8px;border:1px solid #E5E7EB">1957년 (동방생명) / 1989년 사명 변경</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">상장</td><td style="padding:8px;border:1px solid #E5E7EB">2010년 코스피 상장</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">시장 위치</td><td style="padding:8px;border:1px solid #E5E7EB">자산·계약수 생명보험 1위</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">공식 웹사이트</td><td style="padding:8px;border:1px solid #E5E7EB"><a href="https://www.samsunglife.com" target="_blank" rel="noopener noreferrer">www.samsunglife.com</a></td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">고객센터</td><td style="padding:8px;border:1px solid #E5E7EB">1588-3114</td></tr></table>' },

    { type: 'h2', id: 'history', text: '회사 개요' },
    { type: 'body', html: '<p>삼성생명은 한국 생명보험 시장의 표준을 만들어 온 회사로 평가됩니다. 영업조직(설계사 채널), 방카슈랑스, 다이렉트(온라인) 채널 모두 운영하며 삼성그룹 금융 계열사 시너지를 활용합니다. 자산운용은 삼성자산운용 등 그룹 자산운용사와 연계, 건강관리 서비스는 삼성서울병원·디지털 헬스케어 솔루션과 일부 연동하는 사례가 있습니다.</p><p>임직원 규모와 영업 네트워크가 업계 최대급이라 신상품·프로세스 개선에서 시장 표준을 선도하는 경우가 많습니다.</p>' },

    { type: 'h2', id: 'soundness', text: '재무건전성 (공시 기반)' },
    { type: 'info', title: '재무 지표 기준', html: '<p>지급여력비율(K-ICS), 자본·부채 규모, 민원 건수 지표는 분기별로 공시됩니다. 본 페이지의 일반 정보 외 정확한 수치는 <a href="https://fisis.fss.or.kr" target="_blank" rel="noopener noreferrer">금감원 금융통계정보시스템</a> 또는 삼성생명 공시실에서 직접 확인하세요.</p>' },
    { type: 'body', html: '<h3>지급여력비율 (K-ICS)</h3><p>K-ICS(킥스)는 2023년부터 적용된 새 보험사 자본 건전성 규제. 일반적으로 150% 이상이면 안정적, 200% 이상이면 우수로 평가됩니다. 삼성생명은 시장 1위로서 안정적 K-ICS 비율을 유지하고 있는 것으로 공시됩니다.</p><h3>자본·자산 규모</h3><p>총자산 수백조 원 규모. 보험사 중 최대급. 신용평가 등급은 글로벌 신평사 기준 상위권.</p><h3>민원 건수 지표</h3><p>금감원 보험소비자 민원평가지표 기준 일반적으로 양호 등급. 시장 1위로서 절대 민원 수는 많을 수 있으나 보유계약 대비 비율은 낮은 편.</p>' },

    { type: 'h2', id: 'products', text: '주요 상품 카테고리' },
    { type: 'body', html: '<ul><li><strong>종신·정기보험</strong> — 사망 보장 풀라인업. 비갱신·저해지환급형 등 다양한 옵션</li><li><strong>연금·변액연금</strong> — 세제적격 연금저축, 일반 연금보험, 변액연금</li><li><strong>건강·CI보험</strong> — 암·뇌혈관·심장 등 중대질병 진단비 보장</li><li><strong>어린이·태아보험</strong> — 출산 전후 통합 설계</li><li><strong>저축성보험</strong> — 비과세 한도 활용 저축</li><li><strong>실손의료보험</strong> — 4세대 표준약관 기준 (생명보험사 실손)</li></ul><p>대표 상품은 <a href="/products/samsung-cancer-nonrenew/">삼성생명 비갱신 암보험</a> 등.</p>' },

    { type: 'h2', id: 'claim', text: '청구 채널·고객센터' },
    { type: 'body', html: '<h3>주요 청구 경로</h3><ul><li><strong>모바일 앱</strong> — 삼성생명 앱에서 영수증 사진 업로드 → AI OCR 자동 입력</li><li><strong>홈페이지</strong> — 회원 로그인 후 e-청구</li><li><strong>콜센터</strong> 1588-3114 (고령 가입자·복잡한 건)</li><li><strong>영업점 방문</strong> — 전국 지점 네트워크</li><li><strong>설계사 대행</strong> — 가입 설계사 통한 서류 대행</li></ul><h3>실손 청구 간소화 적용</h3><p>2024년 10월 25일 시행된 실손보험 청구 간소화법에 따라 환자 동의 시 병원에서 자동 전송 가능. 종합병원·상급종합병원 우선 적용.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '삼성생명이 망하면 가입자는 어떻게 되나요?', a: '예금자보호법상 보험계약 해약환급금 한도 5,000만원까지 보호. 다만 시장 1위 보험사로서 도산 가능성은 매우 낮음. 금감원이 보험사 건전성을 상시 감독.' },
      { q: '설계사 가입과 다이렉트 가입이 다른가요?', a: '약관·보장은 동일. 설계사 채널은 사후 관리·청구 보조 강점, 다이렉트는 사업비가 낮아 보험료가 상대적 저렴.' },
      { q: '타 회사로 계약 이전 가능한가요?', a: '보장성 보험은 이전 불가. 해지 후 신규 가입 방식이며 신규 가입 시 연령 가산·고지 의무 다시 적용.' },
      { q: '계약 후 회사 합병되면 보장이 변하나요?', a: '약관 자체는 유지. 회사 합병 시 새 회사가 동일 약관으로 보장 승계.' },
      { q: '공시 자료는 어디서 보나요?', a: '삼성생명 공식 홈페이지의 공시실 메뉴, 생명보험협회 공시실(klia.or.kr), 금감원 금융상품통합비교공시.' },
      { q: '고객센터 운영 시간은?', a: '평일 09:00~18:00 일반 상담. 사고 접수·긴급 청구는 24시간 응대 채널 운영.' },
      { q: '온라인 가입과 방문 가입 보험료 차이가 있나요?', a: '동일 약관 상품도 사업비 구조 차이로 보험료가 다를 수 있음. 다이렉트 채널 가입이 일반적으로 5~15% 저렴.' },
      { q: '삼성화재와 삼성생명은 다른 회사인가요?', a: '예. 별개 법인. 삼성화재는 손해보험사(자동차·실손 등), 삼성생명은 생명보험사(종신·연금·암 등). 같은 그룹이지만 상품·약관·청구 시스템이 별개.' },
    ]},

    { type: 'sources', items: [
      { label: '삼성생명 공시실', url: 'https://www.samsunglife.com', org: '삼성생명보험', accessedAt: '2026-04-28' },
      { label: '생명보험협회 공시실', url: 'https://www.klia.or.kr', org: '생명보험협회', accessedAt: '2026-04-28' },
      { label: '금감원 금융통계정보시스템 (FISIS)', url: 'https://fisis.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-28' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

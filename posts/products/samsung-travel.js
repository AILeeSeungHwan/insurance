const post = {
  id: 'P0008',
  sections: [
    { type: 'intro', html: '<p><strong>삼성화재 해외여행자보험</strong>은 단기 해외여행 중 발생하는 의료비·휴대품·배상·지연 리스크를 통합 보장하는 단기 보험입니다. 미국·캐나다·스위스 등 의료비가 높은 국가는 응급실 초진만 100만원을 넘는 경우가 흔하기 때문에 의료비 담보가 가장 핵심이며, 신용카드 무료 여행자보험 한도(보통 5백~2천만원)로는 부족한 경우가 많습니다.</p><p>이 글은 삼성화재 여행자보험의 담보 구성, 국가별 권장 의료비 한도, 7일 일본·14일 유럽·30일 미주 여행 보험료 예시(2026-04-01 공시 기준), 코로나19 보장 변경점, 청구 시 필요 서류까지 정리합니다. 본 사이트는 이 상품을 판매·모집하지 않습니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 최종 보험료는 삼성화재 공시실에서 여행 일정·국가·연령으로 견적 확인하세요.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>상품 정식명</strong></td><td style="padding:8px;border:1px solid #E5E7EB">삼성화재 해외여행자보험</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>보험사</strong></td><td style="padding:8px;border:1px solid #E5E7EB">삼성화재해상보험</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>가입 시점</strong></td><td style="padding:8px;border:1px solid #E5E7EB">출국 전 (일부 출국 후 가입 가능 약관 있음)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>가입 연령</strong></td><td style="padding:8px;border:1px solid #E5E7EB">0세~89세</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>여행 기간</strong></td><td style="padding:8px;border:1px solid #E5E7EB">최대 1년</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>공시 기준일</strong></td><td style="padding:8px;border:1px solid #E5E7EB">2026-04-01</td></tr></table>' },

    { type: 'h2', id: 'covers', text: '주요 담보 구성' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">담보</th><th style="padding:8px;border:1px solid #E5E7EB">권장 한도</th><th style="padding:8px;border:1px solid #E5E7EB">메모</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>해외 상해 의료비</strong></td><td style="padding:8px;border:1px solid #E5E7EB">3억~5억</td><td style="padding:8px;border:1px solid #E5E7EB">미주·유럽 1억 이상 권장</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>해외 질병 의료비</strong></td><td style="padding:8px;border:1px solid #E5E7EB">3,000~5,000만원</td><td style="padding:8px;border:1px solid #E5E7EB">상해와 별도 한도</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>휴대품 손해</strong></td><td style="padding:8px;border:1px solid #E5E7EB">100~200만원</td><td style="padding:8px;border:1px solid #E5E7EB">1품목 20~30만원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>여행중 배상책임</strong></td><td style="padding:8px;border:1px solid #E5E7EB">1억~3억</td><td style="padding:8px;border:1px solid #E5E7EB">제3자 피해 배상</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>항공기 지연</strong></td><td style="padding:8px;border:1px solid #E5E7EB">정액 5~20만원</td><td style="padding:8px;border:1px solid #E5E7EB">4시간 이상 지연 등</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>수하물 지연</strong></td><td style="padding:8px;border:1px solid #E5E7EB">정액 5~10만원</td><td style="padding:8px;border:1px solid #E5E7EB">12~24시간 이상</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>여행중 상해 사망·후유장해</strong></td><td style="padding:8px;border:1px solid #E5E7EB">1억~3억</td><td style="padding:8px;border:1px solid #E5E7EB">기본 포함</td></tr></table>' },

    { type: 'h2', id: 'country', text: '국가별 권장 의료비 한도' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">국가</th><th style="padding:8px;border:1px solid #E5E7EB">의료비 수준</th><th style="padding:8px;border:1px solid #E5E7EB">권장 의료비 한도</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">일본·동남아·중국</td><td style="padding:8px;border:1px solid #E5E7EB">중간</td><td style="padding:8px;border:1px solid #E5E7EB">3,000만~1억</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">유럽 (영·독·프·이)</td><td style="padding:8px;border:1px solid #E5E7EB">높음</td><td style="padding:8px;border:1px solid #E5E7EB">1억~3억</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">미주 (미국·캐나다)</td><td style="padding:8px;border:1px solid #E5E7EB">매우 높음</td><td style="padding:8px;border:1px solid #E5E7EB">3억~5억 (필수)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">스위스·노르딕</td><td style="padding:8px;border:1px solid #E5E7EB">매우 높음</td><td style="padding:8px;border:1px solid #E5E7EB">2억~5억</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">호주·뉴질랜드</td><td style="padding:8px;border:1px solid #E5E7EB">중상</td><td style="padding:8px;border:1px solid #E5E7EB">1억~3억</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">미국 응급실 초진만 100만~300만원, 입원 1일 500만~1,000만원 사례가 흔합니다.</p>' },

    { type: 'h2', id: 'premium', text: '여행 기간별 보험료 예시 (30대 기준, 2026-04-01 공시)' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">조건</th><th style="padding:8px;border:1px solid #E5E7EB">보험료</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">7일 일본·기본 패키지</td><td style="padding:8px;border:1px solid #E5E7EB">15,000~35,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">7일 동남아·기본</td><td style="padding:8px;border:1px solid #E5E7EB">15,000~35,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">14일 유럽·중간 패키지</td><td style="padding:8px;border:1px solid #E5E7EB">40,000~70,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">14일 미주·고한도 (의료비 5억)</td><td style="padding:8px;border:1px solid #E5E7EB">60,000~120,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">30일 미주·풀 패키지</td><td style="padding:8px;border:1px solid #E5E7EB">120,000~250,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">7일 가족 4인 일본 패키지</td><td style="padding:8px;border:1px solid #E5E7EB">50,000~100,000원</td></tr></table>' },

    { type: 'h2', id: 'covid', text: '코로나19·전염병 보장' },
    { type: 'body', html: '<p>2024년 이후 일반 여행자보험에서도 코로나19를 일반 질병으로 다루는 추세이지만, 약관에 따라 다음 차이가 있습니다.</p><ul><li><strong>치료비</strong> — 대부분 일반 해외 질병 의료비 한도로 보장</li><li><strong>격리비용</strong> — 격리 명령 시 정액 또는 별도 특약</li><li><strong>입국 거부 → 귀국 비용</strong> — 일부 상품 한정 보장</li><li><strong>여행 취소 (감염 사유)</strong> — 별도 특약 가입 시 보장</li></ul><p>여행지 국가의 의료 시스템·보험 인정 여부를 사전 확인 권장.</p>' },

    { type: 'h2', id: 'claim', text: '청구 시 필요 서류' },
    { type: 'body', html: '<h3>의료비 청구</h3><ul><li>현지 진료비 영수증 (원본)</li><li>진단서 / 진료 기록 (영문 권장)</li><li>처방전·약제비 영수증</li><li>여권·항공권 사본</li></ul><h3>휴대품 손해 청구</h3><ul><li>경찰신고서 (Police Report) — 도난 시 필수</li><li>현지 피해신고서 (호텔·항공사 등)</li><li>구입 영수증 또는 사진</li><li>분실물 신고 접수번호</li></ul><h3>항공·수하물 지연</h3><ul><li>항공사 지연 증명서</li><li>지연으로 발생한 추가 비용 영수증 (숙박·식비)</li></ul><p>외국어 서류는 한국어 번역 첨부. 청구 기한은 사고일로부터 3년.</p>' },

    { type: 'warning', title: '면책 사유', html: '<ul><li>출국 전 발현된 질환·임신·치과 치료</li><li>레저 스포츠 사고 (스키·스쿠버·등반 등) — 별도 특약 필요</li><li>음주·약물·자해 사고</li><li>전쟁·내란·테러 (일부 국가)</li><li>위험지역 여행경보 발효 후 입국</li></ul>' },

    { type: 'h2', id: 'choose', text: '선택 시 핵심 포인트' },
    { type: 'body', html: '<ol><li>여행 국가에 맞는 의료비 한도 (미주는 3억 이상)</li><li>레저 스포츠 특약 (스키·스쿠버 일정 시)</li><li>휴대품 1품목 한도 (노트북·카메라)</li><li>코로나19 보장 범위</li><li>가족 패키지 할인 (1인당 단독 가입 대비 효율)</li><li>신용카드 무료 보험과의 중복·보완</li></ol>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '신용카드 무료 보험으로 충분한가요?', a: '국내 단기·동남아 짧은 여행은 가능. 미주·유럽·장기는 한도 부족 가능성 큼.' },
      { q: '레저 스포츠 사고 보장되나요?', a: '기본 약관에서는 면책. 스키·스쿠버 특약 추가 필요.' },
      { q: '출국 후 가입할 수 있나요?', a: '대부분 출국 전이 원칙. 일부 약관은 출국 후 24시간 내 가입 가능.' },
      { q: '도난당한 노트북 200만원, 얼마 받나요?', a: '1품목 한도가 20~30만원이라 보장 한도 한정. 풀 보장이 안 되니 노트북 별도 동산보험 검토.' },
      { q: '코로나 확진으로 격리되면 보장되나요?', a: '치료비는 일반 의료비로 보장. 격리비용은 약관별 다름.' },
      { q: '가족 단위 가입이 유리한가요?', a: '가족 패키지 할인이 적용되어 1인당 보험료가 낮아짐.' },
      { q: '여행 취소되면 환급되나요?', a: '여행 취소 특약 가입 시 사유에 따라 환급. 단순 변심은 면책.' },
      { q: '국내 여행도 같은 상품으로 보장되나요?', a: '아닙니다. 별도 국내여행자보험 상품 가입 필요.' },
    ]},

    { type: 'sources', items: [
      { label: '삼성화재 해외여행자보험', url: 'https://www.samsungfire.com', org: '삼성화재해상보험', accessedAt: '2026-04-27' },
      { label: '손해보험협회 공시실', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-27' },
      { label: '외교부 해외안전여행', url: 'https://www.0404.go.kr', org: '외교부', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

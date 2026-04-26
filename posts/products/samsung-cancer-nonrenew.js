const post = {
  id: 'P0005',
  sections: [
    { type: 'intro', html: '<p><strong>삼성생명 비갱신 암보험은 평생 동일 보험료를 납입하고 평생 진단·치료비를 보장하는 종신·정기형 암보험</strong>입니다. 갱신형 암보험이 5년마다 보험료가 재산정되는 반면, 비갱신형은 가입 시점의 보험료가 납입 만료까지 동일하게 유지됩니다. 초기 보험료가 갱신형의 1.5~2배이지만 30~40년 장기 유지 시 총 납입액은 비갱신이 적은 경우가 많습니다.</p><p>이 글은 일반암·고액암·유사암·소액암의 분류, 진단비 지급 구조, 30대·40대 남녀별 월 보험료 예시(공시 기준일 2026-01-01), 보험료 납입면제 특약, 갱신형 대비 장단기 손익 분기점까지 정리합니다. 본 사이트는 이 상품을 판매·모집하지 않습니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 최종 보험료·보장 한도는 삼성생명 공시실 및 상품설명서를 직접 확인해야 합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'overview', text: '한눈에 보기' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB;text-align:left;width:35%">항목</th><th style="padding:8px;border:1px solid #E5E7EB;text-align:left">내용</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>상품 정식명</strong></td><td style="padding:8px;border:1px solid #E5E7EB">삼성생명 비갱신 암보험</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>보험사</strong></td><td style="padding:8px;border:1px solid #E5E7EB">삼성생명보험</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>유형</strong></td><td style="padding:8px;border:1px solid #E5E7EB">비갱신형 (납입기간 내 보험료 동일)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>납입 / 보장기간</strong></td><td style="padding:8px;border:1px solid #E5E7EB">10·15·20·30년 납 / 80세·90세·100세 만기</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>가입 가능 연령</strong></td><td style="padding:8px;border:1px solid #E5E7EB">15세~65세</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>면책기간</strong></td><td style="padding:8px;border:1px solid #E5E7EB">90일 (가입 후 90일 내 진단 시 보장 50%만 지급, 일부는 면책)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>공시 기준일</strong></td><td style="padding:8px;border:1px solid #E5E7EB">2026-01-01</td></tr></table>' },

    { type: 'h2', id: 'classification', text: '암 종류별 분류와 지급 구조' },
    { type: 'body', html: '<p>암보험 약관에서 가장 중요한 것은 "어떤 암이 일반암으로, 어떤 암이 유사암·소액암으로 분류되는지"입니다. 같은 진단비 5천만원 가입이라도 갑상선암은 1천만원, 유방암은 5천만원이 지급될 수 있습니다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">분류</th><th style="padding:8px;border:1px solid #E5E7EB">대표 진단</th><th style="padding:8px;border:1px solid #E5E7EB">지급 비율</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>고액암</strong></td><td style="padding:8px;border:1px solid #E5E7EB">백혈병·뇌암·식도·간·췌장·골수암 등</td><td style="padding:8px;border:1px solid #E5E7EB">100% + 선지급 100% (총 200%)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>일반암</strong></td><td style="padding:8px;border:1px solid #E5E7EB">위·폐·대장·유방·자궁·전립선 등 대부분 암</td><td style="padding:8px;border:1px solid #E5E7EB">100%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>소액암</strong></td><td style="padding:8px;border:1px solid #E5E7EB">방광암·생식기암 등 일부 (상품마다 정의 다름)</td><td style="padding:8px;border:1px solid #E5E7EB">20~50%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>유사암</strong></td><td style="padding:8px;border:1px solid #E5E7EB">갑상선·경계성·제자리(상피내)·기타피부암</td><td style="padding:8px;border:1px solid #E5E7EB">10~20%</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">※ 정확한 분류는 약관에 명시. 한국표준질병사인분류(KCD) 코드 기준.</p>' },

    { type: 'h2', id: 'main-cover', text: '주계약·특약 구성' },
    { type: 'body', html: '<h3>주계약 — 암 진단비</h3><p>일반암 진단 시 가입금액 100% 일시금 지급. 평생 1회 한도가 일반적이며 일부 상품은 재진단 후 5년 경과 시 50% 추가 지급 가능.</p><h3>특약 — 추가 보장</h3><ul><li>고액암 진단비 (100% 추가 선지급)</li><li>암 입원·수술비 (1일당·회당 정액)</li><li>항암방사선·호르몬·표적치료비</li><li>암 통원치료비</li><li>보험료 납입면제 특약 (일반암 진단 시 이후 보험료 면제)</li><li>표적·면역항암제 특약 (고가 신약 비용 보장)</li></ul>' },

    { type: 'h2', id: 'premium', text: '연령·성별별 월 보험료 예시 (진단비 5천만원·20년 납)' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">연령·성별</th><th style="padding:8px;border:1px solid #E5E7EB">주계약만</th><th style="padding:8px;border:1px solid #E5E7EB">고액암·납면 특약 포함</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">30대 남성</td><td style="padding:8px;border:1px solid #E5E7EB">35,000~50,000원</td><td style="padding:8px;border:1px solid #E5E7EB">55,000~80,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">30대 여성</td><td style="padding:8px;border:1px solid #E5E7EB">45,000~65,000원</td><td style="padding:8px;border:1px solid #E5E7EB">70,000~100,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">40대 남성</td><td style="padding:8px;border:1px solid #E5E7EB">55,000~80,000원</td><td style="padding:8px;border:1px solid #E5E7EB">85,000~125,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">40대 여성</td><td style="padding:8px;border:1px solid #E5E7EB">65,000~95,000원</td><td style="padding:8px;border:1px solid #E5E7EB">100,000~145,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">50대 남성</td><td style="padding:8px;border:1px solid #E5E7EB">85,000~125,000원</td><td style="padding:8px;border:1px solid #E5E7EB">130,000~190,000원</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">실제 보험료는 건강고지·직업·납입기간·만기 선택에 따라 달라집니다.</p>' },

    { type: 'h2', id: 'vs-renew', text: '비갱신 vs 갱신 — 손익 분기점' },
    { type: 'body', html: '<p>30대 남성 진단비 5천만원 기준 단순 비교 (예시값):</p><ul><li><strong>비갱신 20년 납</strong>: 월 4만원 × 240개월 = 약 960만원 (이후 보험료 0)</li><li><strong>갱신 5년</strong>: 1주기 월 1.5만원 → 5년마다 약 30~40% 인상 → 30년 누적 약 1,200~1,400만원</li></ul><p>20년 이상 보유할 경우 비갱신이 유리해지는 일반적 패턴입니다. 다만 중도해지·재무 여건 변화를 고려해야 합니다. <a href="/tools/inflation-renewal/">갱신형 인플레 시뮬레이션</a>으로 본인 조건에 맞춰 계산해 볼 수 있습니다.</p>' },

    { type: 'h2', id: 'waive', text: '보험료 납입면제 특약 — 핵심 포인트' },
    { type: 'body', html: '<p>일반암 진단 시 이후 보험료 납입을 면제하는 특약. 실제로 암에 걸리면 소득 감소가 동반되어 보험료 부담이 커지는데 납입면제 특약이 이를 막아줍니다.</p><p>유의: 갑상선암·제자리암 등 유사암은 대부분 면제 대상이 아니거나 50% 적용. 특약 약관에 어떤 암이 면제 대상인지 명확히 확인해야 합니다.</p>' },

    { type: 'warning', title: '면책기간·고지의무·면책사항', html: '<ul><li><strong>면책기간 90일</strong>: 가입 후 90일 내 암 진단 시 보장 제한. 일부는 50%, 일부는 면책</li><li><strong>1년 이내 진단 시 50% 감액</strong>: 가입 후 90일~1년 내 진단</li><li><strong>고지 의무</strong>: 최근 5년 입원·수술, 최근 10년 암·중대질환 — 누락 시 보장 거절</li><li><strong>해외 발병</strong>: 보장 가능하나 진단서 한국어 번역·공증 필요</li><li><strong>HIV·자기 신체 손상</strong>: 면책</li></ul>' },

    { type: 'h2', id: 'choose', text: '선택 시 핵심 포인트' },
    { type: 'body', html: '<ol><li>진단비 한도 — <a href="/tools/cancer-coverage-need/">계산기</a>로 적정선 추정</li><li>고액암 선지급 비율 (100%, 200%, 300% 등)</li><li>유사암·소액암 정의와 지급액 — 약관 명문 확인</li><li>납입기간(10/15/20/30년)과 만기(80/90/100세)</li><li>보험료 납입면제 특약 적용 범위</li><li>표적·면역항암제 특약 (고가 신약 대비)</li></ol>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '갑상선암도 일반암 100%로 지급되나요?', a: '대부분 상품에서 갑상선암은 유사암으로 분류되어 10~20%만 지급됩니다. 약관 확인이 필수.' },
      { q: '실손보험과 중복 보장되나요?', a: '예. 암 진단비는 정액형이라 실손과 중복 수령 가능합니다.' },
      { q: '재진단 암도 보장되나요?', a: '일반암 1회가 대부분이지만 일부 상품은 5년 경과 후 재진단 시 50% 추가 지급.' },
      { q: '비갱신형이 항상 유리한가요?', a: '20년 이상 유지 시 일반적으로 유리하나 중도해지하면 손해. 가구 재무 안정성을 함께 고려.' },
      { q: '암 진단 후 보험료를 계속 내야 하나요?', a: '납입면제 특약을 가입했고 일반암으로 진단되면 이후 면제. 유사암은 적용 제외인 경우가 많음.' },
      { q: '진단 확정 시점은 언제인가요?', a: '조직검사·세포진검사로 확정된 시점. CT·MRI만으로는 진단확정 인정이 어려운 경우가 있음.' },
      { q: '경계성 종양도 암보험 보장되나요?', a: '대부분 유사암으로 분류되어 10~20%만 지급. 일반암 100%로 오해하기 쉬운 부분.' },
      { q: '암 가족력이 있으면 가입이 거절되나요?', a: '가족력 자체는 거절 사유가 아니지만 본인의 검진 이력·증상·정밀검사 권유 등이 거절 요소가 될 수 있음.' },
    ]},

    { type: 'sources', items: [
      { label: '삼성생명 공시실', url: 'https://www.samsunglife.com', org: '삼성생명보험', accessedAt: '2026-04-27' },
      { label: '생명보험협회 공시실', url: 'https://www.klia.or.kr', org: '생명보험협회', accessedAt: '2026-04-27' },
      { label: '금감원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

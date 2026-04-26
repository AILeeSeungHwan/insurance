const post = {
  id: 'M0003',
  sections: [
    { type: 'intro', html: '<p><strong>암보험은 같은 진단비 5천만원을 가입해도 회사·약관·암 분류에 따라 실제 받는 금액이 천차만별</strong>입니다. 갑상선암(유사암)으로 진단되면 어떤 상품은 1,000만원, 어떤 상품은 100만원 지급됩니다. 또한 고액암 선지급 비율(100%·200%·300%)이 회사별로 다르고, 보험료 납입면제 특약·표적항암제 특약·재진단 보장 등에서 차이가 큽니다.</p><p>이 글은 5대 생명·손해보험사 암보험을 일반암·고액암·유사암·소액암 분류 기준으로 비교한 매트릭스, 30대 남성 진단비 5천만원 기준 월 보험료 범위(공시 기준일 2026-01-01), 비갱신 vs 갱신 손익 분기점, 가입 시 반드시 확인할 약관 체크리스트를 정리합니다. 본 사이트는 보험상품을 판매·모집하지 않습니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 모든 수치는 공시 자료 기준의 일반적 범위. 실제 보험료·지급 비율은 각 회사 약관·상품설명서를 직접 확인해야 합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'classification', text: '암 분류 — 같은 5천만원이라도 지급액이 다른 이유' },
    { type: 'body', html: '<p>암보험에서 가장 헷갈리는 부분이 "어떤 암이 어떻게 분류되느냐"입니다. 한국표준질병사인분류(KCD) 코드 기준이지만 회사별 약관에서 미세하게 다릅니다.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">분류</th><th style="padding:8px;border:1px solid #E5E7EB">대표 진단</th><th style="padding:8px;border:1px solid #E5E7EB">지급 비율 (일반)</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>고액암</strong></td><td style="padding:8px;border:1px solid #E5E7EB">백혈병·뇌암·식도·간·췌장·골수암 등</td><td style="padding:8px;border:1px solid #E5E7EB">100% + 선지급 100~300%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>일반암</strong></td><td style="padding:8px;border:1px solid #E5E7EB">위·폐·대장·유방·자궁·전립선 등 대부분</td><td style="padding:8px;border:1px solid #E5E7EB">100%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>소액암</strong></td><td style="padding:8px;border:1px solid #E5E7EB">방광·생식기 일부 (회사별 정의 다름)</td><td style="padding:8px;border:1px solid #E5E7EB">20~50%</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>유사암</strong></td><td style="padding:8px;border:1px solid #E5E7EB">갑상선·경계성·제자리(상피내)·기타피부암</td><td style="padding:8px;border:1px solid #E5E7EB">10~20%</td></tr></table>' },

    { type: 'h2', id: 'matrix', text: '5대사 비교 매트릭스 — 30대 남성·진단비 5천만원·20년 납' },
    { type: 'body', html: '<p>주요 생명보험사 비갱신 암보험을 동일 조건으로 비교한 일반적 범위 추정입니다.</p><table style="width:100%;border-collapse:collapse;font-size:13px"><tr style="background:#F3F4F6"><th style="padding:6px;border:1px solid #E5E7EB">보험사</th><th style="padding:6px;border:1px solid #E5E7EB">월 보험료 (주계약)</th><th style="padding:6px;border:1px solid #E5E7EB">고액암 선지급</th><th style="padding:6px;border:1px solid #E5E7EB">유사암 비율</th><th style="padding:6px;border:1px solid #E5E7EB">납입면제</th></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">삼성생명</td><td style="padding:6px;border:1px solid #E5E7EB">35,000~50,000</td><td style="padding:6px;border:1px solid #E5E7EB">100%</td><td style="padding:6px;border:1px solid #E5E7EB">10~20%</td><td style="padding:6px;border:1px solid #E5E7EB">일반암 시 면제</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">한화생명</td><td style="padding:6px;border:1px solid #E5E7EB">33,000~48,000</td><td style="padding:6px;border:1px solid #E5E7EB">100~200%</td><td style="padding:6px;border:1px solid #E5E7EB">10~20%</td><td style="padding:6px;border:1px solid #E5E7EB">일반암 시 면제</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">교보생명</td><td style="padding:6px;border:1px solid #E5E7EB">36,000~52,000</td><td style="padding:6px;border:1px solid #E5E7EB">100%</td><td style="padding:6px;border:1px solid #E5E7EB">15~20%</td><td style="padding:6px;border:1px solid #E5E7EB">일반암 시 면제</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">신한라이프</td><td style="padding:6px;border:1px solid #E5E7EB">34,000~49,000</td><td style="padding:6px;border:1px solid #E5E7EB">100~200%</td><td style="padding:6px;border:1px solid #E5E7EB">10~20%</td><td style="padding:6px;border:1px solid #E5E7EB">일반암 시 면제</td></tr><tr><td style="padding:6px;border:1px solid #E5E7EB">NH농협생명</td><td style="padding:6px;border:1px solid #E5E7EB">32,000~46,000</td><td style="padding:6px;border:1px solid #E5E7EB">100%</td><td style="padding:6px;border:1px solid #E5E7EB">15~20%</td><td style="padding:6px;border:1px solid #E5E7EB">일반암 시 면제</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">손해보험사(삼성화재·DB·메리츠 등)도 암보험을 판매하며, 진단비 단일 보장은 손해보험사 상품이 보험료가 낮은 경우가 많습니다.</p>' },

    { type: 'h2', id: 'check-list', text: '약관 체크리스트 — 가입 전 반드시 확인' },
    { type: 'body', html: '<h3>1. 고액암 정의와 선지급 비율</h3><p>회사별로 "고액암"에 포함되는 암의 종류와 선지급 비율(100%·200%·300%)이 다릅니다. 약관에 명시된 KCD 코드 리스트로 확인.</p><h3>2. 유사암·소액암 정의와 지급 비율</h3><p>갑상선암이 유사암으로 분류되어 10%만 지급되는지 20% 지급되는지 확인. 차이가 1,000만원 이상.</p><h3>3. 보험료 납입면제 특약 적용 범위</h3><p>일반암 진단 시만 면제인지, 유사암도 포함인지. 납입면제는 실제 가입자 만족도에 큰 영향.</p><h3>4. 진단확정 시점 규정</h3><p>조직검사·세포진검사 확정 기준이 약관에 어떻게 명시되어 있는지. CT·MRI 단독으로는 진단 확정 인정 안 되는 경우 많음.</p><h3>5. 표적·면역항암제 특약 한도</h3><p>고가 신약(트라스투주맙·키트루다 등) 1회 비용이 수백만~수천만원. 특약 가입 시 한도 확인.</p><h3>6. 재진단·재발암 보장</h3><p>일반암 1회 지급 후 재진단 시 추가 지급 가능 여부. 5년 경과 후 50% 추가 지급되는 상품도 존재.</p>' },

    { type: 'h2', id: 'renew-vs', text: '비갱신 vs 갱신 — 어느 쪽이 유리한가' },
    { type: 'body', html: '<p>30대 남성 진단비 5천만원 기준 단순 비교 (예시):</p><table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">유형</th><th style="padding:8px;border:1px solid #E5E7EB">초기 월 보험료</th><th style="padding:8px;border:1px solid #E5E7EB">30년 누적</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">비갱신 20년 납</td><td style="padding:8px;border:1px solid #E5E7EB">약 4만원</td><td style="padding:8px;border:1px solid #E5E7EB">약 960만원 (이후 0)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">갱신형 5년 주기</td><td style="padding:8px;border:1px solid #E5E7EB">약 1.5만원</td><td style="padding:8px;border:1px solid #E5E7EB">약 1,200~1,400만원 누적</td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">※ 갱신형은 5년마다 30~40% 인상 가정. 실제 인상률은 회사 손해율에 따라 다름. <a href="/tools/inflation-renewal/">인플레 시뮬레이션 계산기</a></p>' },

    { type: 'h2', id: 'choose', text: '선택 시 핵심 우선순위' },
    { type: 'body', html: '<ol><li>본인 가족력·건강 상태에 맞는 진단비 한도 (3천~1억)</li><li>고액암 선지급 비율 200% 이상 우선 검토</li><li>유사암·소액암 정의가 명확하고 지급 비율이 높은 상품</li><li>보험료 납입면제 특약 적용 범위 (일반암 + 가능하면 유사암 일부 포함)</li><li>표적·면역항암제 특약 (50대 이후 신약 사용 가능성 대비)</li><li>비갱신형 (장기 유지 전제) — 20년 이상 유지 시 갱신형 대비 유리</li><li>실손 + 정액 암보험 + 종신 등 보험료 비중 점검 (수입의 8~12% 한도)</li></ol>' },

    { type: 'warning', title: '주의', html: '<ul><li>진단비를 무한 늘리면 보험료가 급등 — 가구 재무 부담을 고려</li><li>"종신·CI·암보험 통합" 상품은 보장이 분산되어 약관 해석 어려움</li><li>가입 후 5년 이내 진단은 면책 또는 50% 감액 (회사별 약관 다름)</li><li>고지의무 위반 시 보험금 거절 — 5/10년 룰 정확히 기재</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '갑상선암은 일반암으로 지급되나요?', a: '대부분 회사에서 유사암으로 분류되어 진단비의 10~20%만 지급됩니다.' },
      { q: '실손과 암보험을 둘 다 가입하면 중복 지급되나요?', a: '예. 실손은 실비, 암보험 진단비는 정액. 구조가 달라 중복 수령 가능.' },
      { q: '재발암도 진단비가 또 지급되나요?', a: '일반적으로 일반암은 1회 지급. 일부 상품은 5년 경과 후 50% 추가 지급.' },
      { q: '50대 이후 가입은 의미가 있나요?', a: '보험료가 급격히 올라 효율이 낮아짐. 발병 위험은 높지만 가성비는 떨어짐. 정밀 비교 필수.' },
      { q: '고액암 200% 선지급이 진짜 200%인가요?', a: '주계약 100% + 선지급 특약 100% = 총 200%로 합산되는 구조. 약관 표현 방식 다름.' },
      { q: '경계성 종양도 보장되나요?', a: '대부분 유사암으로 분류되어 10~20%만 지급.' },
      { q: '암 가족력이 있으면 가입 거절되나요?', a: '가족력 자체는 거절 사유 아님. 본인의 검진·정밀검사 권유 이력이 영향을 줌.' },
      { q: '진단비를 1억 이상 가입하는 게 의미 있나요?', a: '치료비·생활비·소득 공백 합산 1억 이상 필요한 가구도 있음. <a href="/tools/cancer-coverage-need/">계산기</a>로 추정 권장.' },
    ]},

    { type: 'sources', items: [
      { label: '금감원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '생명보험협회 공시실', url: 'https://www.klia.or.kr', org: '생명보험협회', accessedAt: '2026-04-27' },
      { label: '한국표준질병사인분류 (KCD)', url: 'https://www.kostat.go.kr', org: '통계청', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

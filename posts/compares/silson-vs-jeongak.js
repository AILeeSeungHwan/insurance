const post = {
  id: 'M0006',
  sections: [
    { type: 'intro', html: '<p><strong>"실손과 정액형 건강보험 중 무엇을 먼저 가입해야 하나"</strong>는 보험 상담에서 가장 자주 나오는 질문입니다. 실손은 실제 의료비를 비례 보상하고, 정액형은 진단·입원·수술 시 정해진 금액을 일시금으로 지급합니다. 보장 구조가 완전히 다르기 때문에 실손이 정액을 대체하지 못하고, 정액이 실손을 대체하지 못합니다.</p><p>이 글은 실손과 정액형 건강보험의 구조적 차이, 같은 사건에서 두 보험이 어떻게 작동하는지(실제 시뮬레이션), 가구 재무 상황별 우선순위, 중복 가입 시 효과, 자주 발생하는 오해까지 정리합니다. 본 사이트는 보험상품을 판매·모집하지 않습니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 비교는 일반적 설명. 본인 가구 상황에 맞춘 결정은 약관·재무 상황을 함께 검토해야 합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'definition', text: '실손과 정액 — 구조 차이' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB"></th><th style="padding:8px;border:1px solid #E5E7EB">실손의료보험</th><th style="padding:8px;border:1px solid #E5E7EB">정액형 (암·CI·종신 등)</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>지급 방식</strong></td><td style="padding:8px;border:1px solid #E5E7EB">실제 지출 의료비 비례 보상</td><td style="padding:8px;border:1px solid #E5E7EB">정해진 금액 일시 지급</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>주 용도</strong></td><td style="padding:8px;border:1px solid #E5E7EB">병원비·약값 실제 지출 보상</td><td style="padding:8px;border:1px solid #E5E7EB">치료 공백·소득 감소·간병비</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>보장 범위</strong></td><td style="padding:8px;border:1px solid #E5E7EB">광범위 — 입원·외래·약제</td><td style="padding:8px;border:1px solid #E5E7EB">특정 진단·사건 (암·뇌졸중·심근경색 등)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>중복 보상</strong></td><td style="padding:8px;border:1px solid #E5E7EB">불가 (실비 비례 분담)</td><td style="padding:8px;border:1px solid #E5E7EB">가능 (정액)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>지급 횟수</strong></td><td style="padding:8px;border:1px solid #E5E7EB">발생할 때마다</td><td style="padding:8px;border:1px solid #E5E7EB">진단·사건 1회 (또는 한정)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>월 보험료 (30대 남)</strong></td><td style="padding:8px;border:1px solid #E5E7EB">9,000~16,000원</td><td style="padding:8px;border:1px solid #E5E7EB">암 진단비 5천만원: 35,000~50,000원</td></tr></table>' },

    { type: 'h2', id: 'simulation', text: '같은 사건에서 두 보험 작동 시뮬레이션' },
    { type: 'body', html: '<p>가상 사례 (허구 예시): 40대 남성 A씨가 위암 진단 → 1년 치료 → 회복</p><h3>의료비 발생 (1년 누적)</h3><ul><li>수술·입원 의료비 (급여+비급여): 1,500만원</li><li>항암치료 비용: 1,200만원</li><li>회복기 통원 치료: 300만원</li><li>치료 동안 소득 감소: 약 4,000만원 (월 급여 350만 × 12 - 부분 복귀)</li></ul><h3>실손 작동 (4세대 기준)</h3><p>의료비 3,000만원 중 자기부담 30%(비급여) + 20%(급여) 차감 후 약 <strong>2,200만원 보상</strong>. 소득 감소는 보장 안 됨.</p><h3>암보험 진단비 작동 (5천만원 가입)</h3><p>위암은 일반암 → 진단 시 <strong>5,000만원 일시금 지급</strong>. 의료비·생활비·간병비 어디든 자유롭게 사용.</p><h3>합산 결과</h3><p>실손 2,200만원 + 암보험 5,000만원 = 7,200만원. 의료비 3,000만 + 소득 공백 4,000만 = 7,000만원을 거의 커버. <strong>실손과 암보험은 둘 다 필요한 구조</strong>임을 보여주는 사례.</p>' },

    { type: 'h2', id: 'priority', text: '우선순위 — 실손이 먼저' },
    { type: 'body', html: '<p>대부분의 가구에서 다음 순서가 합리적입니다.</p><ol><li><strong>실손의료보험</strong> — 가장 광범위한 의료비 보장. 1인 1실손이라 미가입자라면 최우선.</li><li><strong>정액형 (암·CI·운전자)</strong> — 실손이 보장하지 못하는 소득 공백·치료 공백·간병비 영역.</li><li><strong>저축성·연금</strong> — 보장성 보험으로 위험 차단 후 노후 준비.</li></ol><p>가구 보험료 비중은 월 수입의 8~12%가 일반적 권장. 보장성에 6~9% + 저축성·연금에 2~3%가 합리적 분배.</p>' },

    { type: 'h2', id: 'duplicate', text: '중복 가입 — 무엇이 의미가 있나' },
    { type: 'body', html: '<h3>실손 중복 가입 — 의미 없음</h3><p>실손은 비례 보상이라 2개 가입해도 실제 지급은 한 번. 보험료만 두 배.</p><h3>정액형 중복 가입 — 의미 있음</h3><p>암보험 5천만원 + 5천만원 = 진단 시 1억 지급. 다만 보험료 부담이 두 배라 가구 재무에 맞춰야 함.</p><h3>실손 + 정액형 — 가장 일반적 설계</h3><p>두 보험은 보장 영역이 달라 중복 가입이 일반적. 시뮬레이션처럼 합산 보장이 진가를 발휘.</p>' },

    { type: 'h2', id: 'misunderstanding', text: '자주 발생하는 오해' },
    { type: 'body', html: '<ul><li>"실손이 있으면 암보험 불필요" — 아닙니다. 소득 공백은 실손이 보장 안 함.</li><li>"암보험만 있으면 의료비 다 됨" — 아닙니다. 정액 5천만원은 평균 의료비보다 적을 수 있음.</li><li>"정액형 여러 개 가입해서 부자 되겠다" — 보험료 누적이 큼. 적정선 유지가 중요.</li><li>"종신·CI·암보험 통합 상품이면 더 좋다" — 보장이 분산되어 약관 해석이 어렵고 단일 사건에서 일부만 지급될 수 있음.</li></ul>' },

    { type: 'h2', id: 'budget', text: '가구 재무별 우선순위 매트릭스' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">상황</th><th style="padding:8px;border:1px solid #E5E7EB">우선 가입</th><th style="padding:8px;border:1px solid #E5E7EB">차순위</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">실손 미가입자</td><td style="padding:8px;border:1px solid #E5E7EB">실손 (절대 우선)</td><td style="padding:8px;border:1px solid #E5E7EB">암·정기</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">실손 보유 + 자녀 있는 가구</td><td style="padding:8px;border:1px solid #E5E7EB">정기보험·암</td><td style="padding:8px;border:1px solid #E5E7EB">자녀 실손·태아·운전자</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">실손·암 보유 + 50세 전후</td><td style="padding:8px;border:1px solid #E5E7EB">간병·치아·CI</td><td style="padding:8px;border:1px solid #E5E7EB">연금 강화</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">자영업자·프리랜서</td><td style="padding:8px;border:1px solid #E5E7EB">실손·소득보장</td><td style="padding:8px;border:1px solid #E5E7EB">정기·연금·IRP</td></tr></table>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '실손만 잘 가입하면 정말 충분한가요?', a: '의료비는 어느 정도 보장되지만 소득 공백·생활비·간병비는 별도. 정액형 보완이 합리적.' },
      { q: '암보험을 5천만원 vs 1억 중 무엇으로?', a: '본인 소득·가족 부양 상황에 따라. <a href="/tools/cancer-coverage-need/">계산기</a>로 추정 권장.' },
      { q: '정기보험과 종신보험 중 어느 것?', a: '경제활동 기간 보장은 정기, 평생 보장+상속 대비는 종신. 비용 차이가 큼.' },
      { q: 'CI보험은 무엇인가요?', a: '중대질병(Critical Illness) 일시금 지급. 암·뇌졸중·심근경색 등 협의 진단 기준.' },
      { q: '암보험과 CI보험 중복 가입은?', a: '암 진단 시 양쪽 다 지급. 다만 보험료 부담이 두 배.' },
      { q: '직장 단체보험이 있으면 개인 정액형 불필요한가요?', a: '단체는 퇴직 시 종료. 개인 정기·암보험으로 보완 필수.' },
      { q: '실손과 운전자보험 중 무엇 우선?', a: '실손 미가입자라면 실손 먼저. 자가용 운전자라면 운전자보험 동등 우선순위.' },
      { q: '실손 가입 못하는 유병자는 어떻게 해야 하나요?', a: '유병자 실손 또는 정액형 위주로 설계. 일부 회사는 만성질환자 인수 가능 상품 운영.' },
    ]},

    { type: 'sources', items: [
      { label: '금감원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '생명보험협회·손해보험협회 공시실', url: 'https://www.klia.or.kr', org: '협회', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

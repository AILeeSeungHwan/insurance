const post = {
  id: 'G0004',
  sections: [
    { type: 'intro', html: '<p><strong>"갱신형이 처음에는 저렴해서 좋아 보이지만 50대 이후 보험료가 폭등한다"</strong>는 말은 부분적으로 맞고 부분적으로 틀립니다. 어떤 상품(실손·암·운전자)이냐, 가입 시점 연령은 몇 살인지, 가구 재무 안정성에 따라 갱신형이 유리한 경우도 비갱신형이 유리한 경우도 있습니다. 핵심은 "30년 누적 총 납입액"과 "중도 해지 가능성"을 함께 비교하는 것입니다.</p><p>이 글은 갱신형·비갱신형 구조의 본질적 차이, 30대 가입자가 30년 유지 시 두 유형의 누적 총 납입액 시뮬레이션, 상품별 어느 쪽이 일반적으로 유리한지, 중도 해지 영향까지 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 가이드는 일반적 설명입니다. 본인 상황의 정확한 손익 분기점은 보험사 견적 + 재무 시뮬레이션이 필요합니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'definition', text: '갱신형 vs 비갱신형 — 구조' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB"></th><th style="padding:8px;border:1px solid #E5E7EB">갱신형</th><th style="padding:8px;border:1px solid #E5E7EB">비갱신형</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>보험료 재산정</strong></td><td style="padding:8px;border:1px solid #E5E7EB">1년·5년·10년 주기로 손해율·연령에 따라 재산정</td><td style="padding:8px;border:1px solid #E5E7EB">납입기간 동안 동일</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>초기 보험료</strong></td><td style="padding:8px;border:1px solid #E5E7EB">낮음 (비갱신의 1/2~1/3)</td><td style="padding:8px;border:1px solid #E5E7EB">높음</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>고령기 보험료</strong></td><td style="padding:8px;border:1px solid #E5E7EB">급격히 증가</td><td style="padding:8px;border:1px solid #E5E7EB">납입 만료 후 0</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>30년 누적</strong></td><td style="padding:8px;border:1px solid #E5E7EB">비갱신 대비 30~50% 많음</td><td style="padding:8px;border:1px solid #E5E7EB">상대적 적음 (장기 유지 시)</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB"><strong>중도 해지 시</strong></td><td style="padding:8px;border:1px solid #E5E7EB">손해 적음</td><td style="padding:8px;border:1px solid #E5E7EB">손해 큼</td></tr></table>' },

    { type: 'h2', id: 'sim', text: '시뮬레이션 — 30대 남성·암보험 5천만원 30년 유지' },
    { type: 'body', html: '<p>가정: 30대 남성·암보험 진단비 5천만원·30년 유지·갱신형 5년마다 30% 인상</p><table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">기간</th><th style="padding:8px;border:1px solid #E5E7EB">갱신형 월 보험료</th><th style="padding:8px;border:1px solid #E5E7EB">비갱신 20년 납</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">30~34세 (1주기)</td><td style="padding:8px;border:1px solid #E5E7EB">15,000원</td><td style="padding:8px;border:1px solid #E5E7EB">40,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">35~39세 (2주기)</td><td style="padding:8px;border:1px solid #E5E7EB">19,500원</td><td style="padding:8px;border:1px solid #E5E7EB">40,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">40~44세 (3주기)</td><td style="padding:8px;border:1px solid #E5E7EB">25,400원</td><td style="padding:8px;border:1px solid #E5E7EB">40,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">45~49세 (4주기)</td><td style="padding:8px;border:1px solid #E5E7EB">33,000원</td><td style="padding:8px;border:1px solid #E5E7EB">40,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">50~54세 (5주기, 비갱신 납입 종료)</td><td style="padding:8px;border:1px solid #E5E7EB">42,900원</td><td style="padding:8px;border:1px solid #E5E7EB">0원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">55~59세</td><td style="padding:8px;border:1px solid #E5E7EB">55,800원</td><td style="padding:8px;border:1px solid #E5E7EB">0원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">30년 누적</td><td style="padding:8px;border:1px solid #E5E7EB"><strong>약 1,300만원</strong></td><td style="padding:8px;border:1px solid #E5E7EB"><strong>약 960만원</strong></td></tr></table><p style="margin-top:8px;font-size:13px;color:#64748B">※ 갱신 인상률은 회사 손해율에 따라 달라짐. 실제 인상폭이 더 클 수도 있음.</p><p>이 시뮬레이션에서 비갱신형이 약 340만원 절약. 다만 중도 해지 가능성·재무 안정성을 함께 고려해야 합니다. <a href="/tools/inflation-renewal/">시뮬레이션 계산기</a>로 본인 조건에 맞춰 재계산 가능.</p>' },

    { type: 'h2', id: 'by-product', text: '상품별 어느 쪽이 일반적으로 유리한가' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">상품</th><th style="padding:8px;border:1px solid #E5E7EB">유리한 유형</th><th style="padding:8px;border:1px solid #E5E7EB">사유</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">실손의료보험</td><td style="padding:8px;border:1px solid #E5E7EB">갱신형 (선택지 없음)</td><td style="padding:8px;border:1px solid #E5E7EB">실손은 갱신형만 판매</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">암보험</td><td style="padding:8px;border:1px solid #E5E7EB">비갱신형 (장기 유지 시)</td><td style="padding:8px;border:1px solid #E5E7EB">고령기 보험료 급등 회피</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">운전자보험</td><td style="padding:8px;border:1px solid #E5E7EB">상황에 따라</td><td style="padding:8px;border:1px solid #E5E7EB">단기 가성비는 갱신, 장기 안정은 비갱신</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">치아보험</td><td style="padding:8px;border:1px solid #E5E7EB">갱신형 (10년)</td><td style="padding:8px;border:1px solid #E5E7EB">비갱신 비중 낮음</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">정기보험·종신보험</td><td style="padding:8px;border:1px solid #E5E7EB">비갱신형</td><td style="padding:8px;border:1px solid #E5E7EB">평생 보장 전제</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">CI보험·간병보험</td><td style="padding:8px;border:1px solid #E5E7EB">비갱신형</td><td style="padding:8px;border:1px solid #E5E7EB">고령 발병 가능성 높음</td></tr></table>' },

    { type: 'h2', id: 'mid-cancel', text: '중도 해지 — 가장 큰 리스크' },
    { type: 'body', html: '<p>비갱신형의 가장 큰 단점은 중도 해지 시 손실이 큽니다.</p><ul><li>5년 이내 해지: 환급금 거의 없음</li><li>10년 해지: 납입 보험료의 30~50% 환급</li><li>20년 만기 직전 해지: 70~80% 환급</li><li>20년 납 완료 + 보장 유지: 100% 환급(저축성 일부 상품)</li></ul><p>가구 재무가 불안정하거나 향후 수입이 줄어들 가능성이 있으면 갱신형이 안전한 선택일 수 있음. 갱신형은 해지 시 손실이 거의 없음.</p>' },

    { type: 'h2', id: 'choose', text: '어느 쪽을 선택할 것인가 — 의사결정 트리' },
    { type: 'body', html: '<ol><li><strong>20년 이상 유지할 자신이 있는가?</strong> Y → 비갱신 우선 / N → 갱신</li><li><strong>현재 가구 재무가 안정적인가?</strong> Y → 비갱신 가능 / N → 갱신</li><li><strong>50대 이후 보험료 감당 가능한가?</strong> Y → 갱신도 OK / N → 비갱신</li><li><strong>중도 해지 가능성?</strong> 있음 → 갱신 / 없음 → 비갱신</li><li><strong>현재 연령은 30대 이하?</strong> Y → 비갱신이 일반적으로 유리 / 50대+ → 비갱신은 보험료 부담 큼</li></ol>' },

    { type: 'h2', id: 'mistakes', text: '자주 하는 실수' },
    { type: 'body', html: '<ul><li>"갱신형이 무조건 저렴" — 30년 누적은 비갱신이 적음</li><li>"비갱신이 무조건 안전" — 중도 해지 시 손해 큼</li><li>"갱신 시 보험료 30% 인상은 평균" — 회사·시기에 따라 50% 이상도 가능</li><li>"갱신 시 거절될 수 있다" — 갱신은 보장 연속 원칙. 무심사 갱신.</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '갱신 시 보험료가 얼마나 오르나요?', a: '회사 손해율·연령 인상에 따라 5년마다 20~50% 수준. 50대 이후 더 가파름.' },
      { q: '갱신 시점에 회사가 거절할 수 있나요?', a: '갱신은 무심사 보장 연속 원칙. 거절 불가. 단 약관은 그 시점 표준약관으로 변경 가능.' },
      { q: '비갱신형이 진짜 평생 보험료가 같은가요?', a: '납입기간 내에서만 동일. 납입 만료 후는 보험료 0(소멸성). 단 만기까지 보장 유지.' },
      { q: '비갱신형 30년 납이 정말 유리한가요?', a: '30년 납은 부담 분산되지만 총 보험료가 20년 납보다 큼. 일반적으로 20년 납이 효율 좋음.' },
      { q: '갱신형을 비갱신으로 갈아탈 수 있나요?', a: '이전·전환은 불가. 기존 해지 + 신규 가입. 신규 가입 시 연령 가산 + 면책기간 다시 적용.' },
      { q: '실손은 왜 비갱신이 없나요?', a: '실손은 손해율 변동성이 크고 표준약관 5년마다 갱신되는 구조라 비갱신 설계가 불가능.' },
      { q: '20년 납과 30년 납 중 무엇?', a: '소득 안정자는 20년 납이 효율적. 부담 분산 필요시 30년 납.' },
      { q: '저해지환급형이 일반 비갱신과 다른가요?', a: '저해지는 중도 해지 시 환급률 50~70%로 낮춤 → 보험료 30~40% 저렴. 만기 보장은 동일.' },
    ]},

    { type: 'sources', items: [
      { label: '금감원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-27' },
      { label: '생명보험협회·손해보험협회 공시실', url: 'https://www.klia.or.kr', org: '협회', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

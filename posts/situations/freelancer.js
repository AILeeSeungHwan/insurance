const post = {
  id: 'H0004',
  sections: [
    { type: 'intro', html: '<p><strong>프리랜서는 자영업자와 직장인의 중간 위치</strong>입니다. 4대보험 미적용, 소득 변동성 큼, 정년 개념 없음 — 이 세 특성이 보험 설계의 출발점입니다. 동시에 절세 측면에서는 강력한 도구(노란우산·IRP·연금저축)를 활용할 수 있어 잘 활용하면 직장인보다 유리한 노후 준비가 가능합니다.</p><p>이 글은 프리랜서의 보험 우선순위, 3층 연금 구조 활용, 소득 변동성에 대응하는 보험료 비중, 자영업자와의 차이까지 실전 정보로 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험상품을 판매·모집하지 않습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'characteristic', text: '프리랜서의 보험 환경 — 4가지 특성' },
    { type: 'body', html: '<ul><li><strong>국민연금 지역가입자</strong> — 신고 소득 기준 자체 납부. 직장 가입자 대비 연금액 낮은 경향.</li><li><strong>건강보험 지역가입자</strong> — 사업소득·재산 기준 보험료 산정. 변동성 큼.</li><li><strong>고용보험 임의가입</strong> — 신청 안 하면 실업급여 없음.</li><li><strong>산재 미적용</strong> — 업무 중 사고 시 보장 자체 책임.</li></ul><p>특히 IT 개발자·디자이너·작가·강사 등 직무에 따라 사고 위험이 다르므로 프리랜서 직무별 보험 검토 필요.</p>' },

    { type: 'h2', id: 'priority', text: '프리랜서 보험 우선순위' },
    { type: 'body', html: '<h3>1순위. 실손의료보험</h3><p>의료비 기본. 직장 단체실손 없는 프리랜서는 절대 1순위.</p><h3>2순위. 소득보장 (입원일당·진단비)</h3><p>일하지 못하면 수입 0원이 되는 구조. 입원일당·재해·암 진단비 정액 보장 필수.</p><h3>3순위. 정기·종신보험</h3><p>사망 시 가족 부양 공백. 정기 5억 권장 (자녀 있는 경우).</p><h3>4순위. 자동차+운전자보험</h3><p>업무용 이동이 많은 직무는 영업용 보험 검토.</p>' },

    { type: 'h2', id: 'pension', text: '3층 연금 구조 — 프리랜서 노후 준비 핵심' },
    { type: 'body', html: '<h3>1층. 국민연금</h3><ul><li>지역가입자 의무 가입</li><li>최저 월 9만 ~ 최고 월 56만원 보험료</li><li>10년 이상 가입 시 노령연금 수령</li><li>임의계속가입으로 60세 후에도 가입 가능</li></ul><h3>2층. 퇴직연금 X (프리랜서 미해당)</h3><p>대신 IRP·연금저축으로 대체.</p><h3>3층. 개인연금</h3><ul><li>연금저축 + IRP 합산 연 900만원 세액공제 (13.2~16.5%)</li><li>최대 환급 약 148만원/년</li><li>노란우산공제 연 600만원 별도 (자영업자·프리랜서)</li></ul><p>총 활용 가능 한도: <strong>연 1,500만원</strong> (연금저축 + IRP + 노란우산). 약 250만원 이상 환급 가능.</p>' },

    { type: 'h2', id: 'budget', text: '소득 변동성에 대응하는 보험료 비중' },
    { type: 'body', html: '<p>프리랜서는 월별 수입 차이가 크기 때문에 <strong>연 평균 소득 기준 10~14%</strong>를 보험료로 잡되, 비갱신·고정 보험료 상품 비중을 높이는 것이 안전합니다. 갱신형은 보험료 변동이 있어 수입 변동과 충돌 가능.</p>' },

    { type: 'h2', id: 'scenario', text: '가상 시나리오 (허구 예시)' },
    { type: 'body', html: '<p>※ 허구 사례입니다.</p><h3>30대 후반 IT 프리랜서 (연 평균 소득 9,000만원)</h3><ul><li>4세대 실손: 월 12,000원</li><li>입원일당 15만 + 재해 진단비: 월 35,000원</li><li>정기보험 5억: 월 35,000원</li><li>암보험 1억 비갱신: 월 100,000원</li><li>자동차+운전자보험: 월 70,000원</li><li>합계 월 약 252,000원 (소득의 3.4%)</li><li>연금저축 50만 + IRP 25만 + 노란우산 50만 = 월 125만원 노후·절세 (총 한도 활용)</li></ul>' },

    { type: 'h2', id: 'vs', text: '프리랜서 vs 자영업자 — 보험 차이' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB"></th><th style="padding:8px;border:1px solid #E5E7EB">프리랜서</th><th style="padding:8px;border:1px solid #E5E7EB">자영업자</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">사업장 화재·배상</td><td style="padding:8px;border:1px solid #E5E7EB">불필요한 경우 多</td><td style="padding:8px;border:1px solid #E5E7EB">필수 검토</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">고용보험 임의가입</td><td style="padding:8px;border:1px solid #E5E7EB">선택</td><td style="padding:8px;border:1px solid #E5E7EB">선택</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">노란우산</td><td style="padding:8px;border:1px solid #E5E7EB">가입 가능</td><td style="padding:8px;border:1px solid #E5E7EB">가입 가능</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">자동차 영업용</td><td style="padding:8px;border:1px solid #E5E7EB">대부분 자가용 OK</td><td style="padding:8px;border:1px solid #E5E7EB">업종 따라 영업용</td></tr></table>' },

    { type: 'h2', id: 'often-missed', text: '프리랜서가 자주 놓치는 항목' },
    { type: 'body', html: '<ul><li>건강보험료 폭증 — 이전 직장 가입 후 지역가입자로 전환 시 보험료 산정 기준 변동</li><li>고용보험 미가입 — 폐업·일감 단절 시 실업급여 없음</li><li>국민연금 임의계속가입 — 60세 후에도 납입 가능. 노령연금 증액</li><li>업무용 노트북·장비 보험 — 사업용 동산보험 별도</li><li>저작권·전문직 배상책임 — 작가·강사·디자이너의 분쟁 대응</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '프리랜서도 직장인 단체실손 가입 가능한가요?', a: '단체 가입 자체는 보통 회사 직원만. 프리랜서는 개인 4세대 가입.' },
      { q: '국민연금이 너무 부담됩니다.', a: '소득 신고 조정 검토. 일정 기간 납부예외 신청 가능 (단 연금액 감소).' },
      { q: '연금저축·IRP·노란우산 다 가입 가능?', a: '가능. 한도 별도. 합산 연 1,500만원 절세 활용.' },
      { q: '폐업 시 실업급여 받을 수 있나요?', a: '고용보험 임의가입 1년 이상 + 비자발적 폐업 사유. 신청은 폐업 후 12개월 내.' },
      { q: '건강보험 지역가입자 보험료가 너무 비싸요.', a: '재산·소득에 따라 산정. 절세 위해 사업소득 신고를 정확히. 의무가입자 보험료 폐지(2024~) 영향 확인.' },
      { q: '프리랜서 산재 가입 가능한가요?', a: '특고 산재(특수형태근로자). 일부 직군(보험설계사·택배기사·플랫폼 노동자) 가입.' },
      { q: '노후 준비를 보험으로 할까 펀드로 할까?', a: '연금저축펀드가 운용 자유도 높음. 변동성 감수 가능하면 펀드. 안정 선호 시 연금저축보험.' },
      { q: '저작권 분쟁 대응 보험이 있나요?', a: '전문직 배상책임 보험. 작가·강사 직군 가입 가능. 보험료 월 1~3만원.' },
    ]},

    { type: 'sources', items: [
      { label: '국민연금공단 임의계속가입', url: 'https://www.nps.or.kr', org: '국민연금공단', accessedAt: '2026-04-27' },
      { label: '국세청 — 프리랜서 종합소득세 신고', url: 'https://www.nts.go.kr', org: '국세청', accessedAt: '2026-04-27' },
      { label: '중소기업중앙회 노란우산공제', url: 'https://www.kbiz.or.kr', org: '중소기업중앙회', accessedAt: '2026-04-27' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

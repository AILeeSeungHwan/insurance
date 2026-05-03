const post = {
  id: 'T0010',
  calculator: 'copayment',
  sections: [
    { type: 'intro', html: '<p><strong>실손보험 자기부담금 계산기는 4세대 실손보험 기준 의료기관 종류·급여/비급여 구분·의료비 금액을 입력하면 실손 청구 가능 추정액을 계산</strong>합니다. 4세대 실손(2021년 7월 이후 가입)은 급여 20%·비급여 30% 자기부담 구조로, 소액 외래는 최소공제 때문에 실질 청구 금액이 0원이 될 수 있습니다.</p><p>1~3세대 실손과 4세대는 자기부담 구조가 다릅니다. 본 계산기는 4세대 기준입니다. 본인 가입 세대를 보험증권에서 먼저 확인하세요.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 계산 결과는 추정치입니다. 실제 지급액은 급여·비급여 판정 및 보험사 심사 결과에 따라 달라집니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'how', text: '계산기 사용법' },
    { type: 'body', html: '<ol><li><strong>의료기관 종류</strong> 선택 — 의원(1차) / 병원(2차) / 종합병원(3차) / 응급실</li><li><strong>급여/비급여 구분</strong> 선택 — 진료비 영수증의 "급여" 란과 "비급여" 란 금액을 각각 입력</li><li><strong>의료비 금액</strong> 입력 — 본인부담금(건강보험 적용 후 남은 금액) 기준으로 입력</li></ol><p>결과로 급여 파트·비급여 파트 각각 청구 가능 추정액과 합산 금액이 표시됩니다.</p>' },

    { type: 'h2', id: 'logic', text: '계산 원리' },
    { type: 'body', html: '<p>본 계산기는 4세대 실손보험 표준약관 기준 수식을 사용합니다:</p><p style="background:#F8FAFC;border:1px solid #E5E7EB;border-radius:8px;padding:12px"><code>청구 가능액 = MAX(의료비 × (1 - 자기부담률) - 최소공제금액, 0)</code></p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">구분</th><th style="padding:8px;border:1px solid #E5E7EB">자기부담률</th><th style="padding:8px;border:1px solid #E5E7EB">최소공제금액</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #E5E7EB">급여 외래 — 의원</td><td style="padding:8px;border:1px solid #E5E7EB">20%</td><td style="padding:8px;border:1px solid #E5E7EB">10,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">급여 외래 — 병원</td><td style="padding:8px;border:1px solid #E5E7EB">20%</td><td style="padding:8px;border:1px solid #E5E7EB">15,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">급여 외래 — 종합병원</td><td style="padding:8px;border:1px solid #E5E7EB">20%</td><td style="padding:8px;border:1px solid #E5E7EB">20,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">급여 입원</td><td style="padding:8px;border:1px solid #E5E7EB">20%</td><td style="padding:8px;border:1px solid #E5E7EB">없음</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">비급여 외래</td><td style="padding:8px;border:1px solid #E5E7EB">30%</td><td style="padding:8px;border:1px solid #E5E7EB">30,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">비급여 입원</td><td style="padding:8px;border:1px solid #E5E7EB">30%</td><td style="padding:8px;border:1px solid #E5E7EB">없음</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">응급실 (비응급 판정)</td><td style="padding:8px;border:1px solid #E5E7EB">90%</td><td style="padding:8px;border:1px solid #E5E7EB">없음</td></tr></tbody></table><p style="margin-top:8px">예시: 의원 외래 급여 50,000원 → MAX(50,000 × 0.8 - 10,000, 0) = 30,000원 청구 가능</p>' },

    { type: 'h2', id: 'interpret', text: '결과 해석하기' },
    { type: 'body', html: '<p>결과를 해석하는 방법:</p><ul><li><strong>급여 외래 1~2만원대</strong>: 최소공제 초과분이 없거나 매우 적어 실질 청구액 0원 가능. 청구 번거로움 대비 효용 낮음.</li><li><strong>비급여 외래 3만원 이하</strong>: 최소공제(30,000원) 미만이라 청구 금액 0원. 청구해도 받는 돈 없음.</li><li><strong>입원 비급여 고액</strong>: 최소공제 없어 70% 수령 가능. 입원 치료비는 청구 효과가 큼.</li></ul><p>청구 팁: 같은 날 여러 의료기관을 방문했다면 각각 청구 가능. 동일 의료기관이라도 급여·비급여를 분리 청구하면 계산이 달라질 수 있습니다.</p>' },

    { type: 'h2', id: 'limits', text: '한계와 유의사항' },
    { type: 'warning', title: '1~3세대 실손은 이 계산기 대상이 아닙니다', html: '<p>다음 사항을 반드시 확인하세요:</p><ul><li>1세대(~2009): 급여·비급여 구분 없이 90% 보장, 최소공제 5,000원 수준</li><li>2세대(2009~2012): 급여 20%, 비급여 20%, 입원·외래 구분 있음</li><li>3세대(2013~2021.6): 급여 20%, 비급여 20%, 외래 최소공제 적용</li><li>4세대(2021.7~): 급여 20%, 비급여 30%, 비급여 외래 최소공제 30,000원 (본 계산기)</li><li>도수치료·MRI·주사제 3대 비급여 특약은 별도 한도(연간 50회 등) 적용</li></ul>' },

    { type: 'h2', id: 'misuse', text: '흔한 오해' },
    { type: 'body', html: '<ul><li><strong>"비급여는 다 보장된다"</strong> — 4세대는 비급여 30% 자기부담 + 외래 최소공제 3만원. 소액 비급여는 청구해도 0원.</li><li><strong>"응급실은 무조건 급여 기준"</strong> — 비응급 판정 시 자기부담 90%. 감기·경미한 복통으로 응급실 이용하면 청구 금액이 거의 없습니다.</li><li><strong>"전액 청구 가능하다"</strong> — 자기부담률(20~30%) + 최소공제 적용으로 항상 일부는 본인 부담.</li><li><strong>"한번에 여러 달치를 모아 청구할 수 있다"</strong> — 원칙적으로 가능하지만 보험사마다 청구 기한(180일~3년) 있음. 가급적 진료 직후 청구 권장.</li></ul>' },

    { type: 'h2', id: 'howto-use', text: '실제 활용 시나리오' },
    { type: 'body', html: '<ol><li><strong>외래 진료 전 본인 부담 예상</strong> — 비급여 검사·주사 예정 시 본인 부담 최솟값 파악</li><li><strong>입원 전 비용 계획</strong> — 입원 비급여 금액 입력해 실손 청구 후 실제 본인 부담 추정</li><li><strong>비급여 MRI 비용 청구 계산</strong> — 비급여 MRI 50만원 → 특약 있으면 70%(35만원) 청구 가능</li><li><strong>도수치료 연간 한도 확인</strong> — 도수치료 특약은 연 50회 한도. 회당 자기부담 30% 계산해 연간 예상 비용 파악</li></ol><p>관련 계산기: <a href="/tools/silson-premium/">실손보험료 추정기</a>, <a href="/guides/silson-claim-howto/">실손 청구 완전 가이드</a>.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '1~3세대 실손 가입자는 자기부담이 다른가요?', a: '네. 1세대는 90% 보장(자기부담 10%), 2세대는 급여·비급여 각 20% 자기부담. 4세대가 가장 자기부담 비율이 높습니다. 증권의 가입 세대를 먼저 확인하세요.' },
      { q: '응급실 비응급 기준이 뭔가요?', a: '응급의료에 관한 법률 기준 응급 증상(심정지, 호흡곤란, 의식장애 등)이 아닌 경우 비응급으로 분류. 경미한 감기·타박상으로 응급실 이용은 비응급 판정 가능성이 높습니다.' },
      { q: '비급여 등급제가 보험료에 영향을 주나요?', a: '4세대 실손은 비급여 이용 실적에 따라 갱신 시 할인(-5%)~할증(+100%)이 적용됩니다. 비급여를 적게 쓸수록 갱신 보험료가 유리합니다.' },
      { q: '치과 치료도 실손 청구가 되나요?', a: '치과는 대부분 실손보험에서 제외. 치아보험이 별도입니다. 다만 사고로 인한 치아 파절 치료는 일부 실손에서 보장 가능합니다.' },
      { q: '약값(처방전 약국)도 청구할 수 있나요?', a: '처방전에 의한 약국 조제비(급여)는 청구 가능. 단, 의원 외래 최소공제와 합산 적용되어 소액이면 청구액이 0원이 될 수 있습니다.' },
      { q: '외래 여러 날치를 합산해 청구할 수 있나요?', a: '같은 질병으로 여러 날 진료를 받았다면 각 방문 건별로 별도 청구. 합산 청구는 단일 방문·입원 건에 한합니다.' },
      { q: '도수치료 연간 한도를 초과하면?', a: '도수·증식치료·체외충격파 특약은 통상 연 50회 한도. 초과분은 실손 청구 불가하며 전액 본인 부담입니다.' },
    ]},

    { type: 'sources', items: [
      { label: '금융감독원 — 4세대 실손의료보험 자료', url: 'https://www.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-28' },
      { label: '손해보험협회 공시실 — 실손의료보험', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-28' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

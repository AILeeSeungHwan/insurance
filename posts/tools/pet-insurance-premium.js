const post = {
  id: 'T0009',
  calculator: 'pet-insurance-premium',
  sections: [
    { type: 'intro', html: '<p><strong>펫보험 예상 보험료 계산기는 반려동물 종류·나이·크기(체중)·플랜을 입력하면 월 보험료 범위를 추정</strong>합니다. 펫보험은 반려동물의 나이가 많을수록, 품종별 유전성 질환 위험이 클수록 보험료가 급등합니다.</p><p>품종별 유전성 질환 할증은 본 계산기에 반영되지 않습니다. 닥스훈트(척추 디스크)·불독·퍼그(호흡기)·골든 리트리버(관절)처럼 특정 품종은 기본 견적보다 20~50% 높은 보험료가 부과될 수 있습니다. 정확한 견적은 각 보험사 공식 채널에서 직접 확인하세요.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 계산 결과는 추정치입니다. 실제 보험료는 품종·과거 진료 이력·가입 보험사에 따라 다릅니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'how', text: '계산기 사용법' },
    { type: 'body', html: '<ol><li><strong>동물 종류</strong> 선택 — 강아지 / 고양이</li><li><strong>나이</strong> 입력 — 만 나이 기준. 7세 이상부터 보험료가 급격히 상승합니다.</li><li><strong>체중(크기)</strong> 선택 — 강아지: 소형(7kg 이하) / 중형(7~20kg) / 대형(20kg 초과)</li><li><strong>플랜</strong> 선택 — 기본형(외래·입원·수술) / 프리미엄형(+치과·피부·유전성 질환·예방 일부)</li></ol><p>입력 즉시 추정 월 보험료 범위가 표시됩니다.</p>' },

    { type: 'h2', id: 'logic', text: '계산 원리' },
    { type: 'body', html: '<p>본 계산기는 다음 수식을 사용합니다:</p><p style="background:#F8FAFC;border:1px solid #E5E7EB;border-radius:8px;padding:12px"><code>월 보험료 = 기준값(종류·크기) × 나이 가중치 × 플랜 가중치</code></p><p><strong>2026년 기준 일반적 범위 (한국 주요 펫보험사 기준):</strong></p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">구분</th><th style="padding:8px;border:1px solid #E5E7EB">0~3세 기본</th><th style="padding:8px;border:1px solid #E5E7EB">0~3세 프리미엄</th><th style="padding:8px;border:1px solid #E5E7EB">7세 이상 기본</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #E5E7EB">소형견(7kg 이하)</td><td style="padding:8px;border:1px solid #E5E7EB">15,000~25,000원</td><td style="padding:8px;border:1px solid #E5E7EB">30,000~45,000원</td><td style="padding:8px;border:1px solid #E5E7EB">35,000~60,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">중형견(7~20kg)</td><td style="padding:8px;border:1px solid #E5E7EB">22,000~35,000원</td><td style="padding:8px;border:1px solid #E5E7EB">40,000~60,000원</td><td style="padding:8px;border:1px solid #E5E7EB">50,000~85,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대형견(20kg+)</td><td style="padding:8px;border:1px solid #E5E7EB">30,000~50,000원</td><td style="padding:8px;border:1px solid #E5E7EB">55,000~80,000원</td><td style="padding:8px;border:1px solid #E5E7EB">70,000~120,000원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">고양이(일반)</td><td style="padding:8px;border:1px solid #E5E7EB">20,000~35,000원</td><td style="padding:8px;border:1px solid #E5E7EB">35,000~55,000원</td><td style="padding:8px;border:1px solid #E5E7EB">45,000~80,000원</td></tr></tbody></table><p style="margin-top:8px"><strong>나이 가중치</strong>: 0~3세 1.0 / 4~6세 1.4 / 7~9세 1.9~2.5 / 10세+ 2.5~4.0 (또는 신규가입 불가)</p>' },

    { type: 'h2', id: 'interpret', text: '결과 해석하기' },
    { type: 'body', html: '<p>계산 결과는 ±30% 범위로 이해하세요. 다음 요인이 결과에 추가로 영향을 줍니다:</p><ul><li><strong>품종별 유전성 질환 할증</strong>: 닥스훈트·불독·퍼그·코기·골든리트리버 등 유전성 질환 위험 품종은 20~50% 할증</li><li><strong>과거 진료 이력</strong>: 가입 전 진료 받은 질환은 부담보(면책) 또는 보험료 할증 조건</li><li><strong>자기부담금 선택</strong>: 20~30% 자기부담금 설정으로 보험료 조정 가능</li><li><strong>갱신 인상</strong>: 나이가 들면서 매년 갱신 보험료가 인상됨. 10세 이후 신규 가입 불가 보험사 많음</li></ul>' },

    { type: 'h2', id: 'limits', text: '한계와 유의사항' },
    { type: 'warning', title: '품종별 유전성 질환 할증은 반영되지 않습니다', html: '<p>다음 항목은 본 계산기에 반영되지 않습니다:</p><ul><li>품종별 유전성 질환 위험도 (닥스훈트→척추, 불독→호흡기, 골든·래브라도→관절)</li><li>이미 진단받은 질환에 대한 부담보 조건</li><li>갱신 인상률 (나이 증가에 따른 장기 총납입액)</li><li>보험사별 지정 동물병원 여부 (직접 청구 vs 영수증 청구 방식 차이)</li></ul>' },

    { type: 'h2', id: 'misuse', text: '흔한 오해' },
    { type: 'body', html: '<ul><li><strong>"중성화 수술하면 보험료 할인된다"</strong> — 대부분의 국내 펫보험사는 중성화 수술 여부를 보험료 할인 기준으로 적용하지 않습니다.</li><li><strong>"모든 질환이 보장된다"</strong> — 선천성·유전성 질환은 약관에 따라 제외되는 경우 많습니다. 예방접종·건강검진·미용도 대부분 보장 외입니다.</li><li><strong>"사람 실손처럼 자유롭게 청구한다"</strong> — 일부 펫보험은 지정 동물병원에서만 직접 청구. 지정 외 병원은 영수증·진단서 제출 후 환급 방식.</li><li><strong>"노령견도 언제든 가입 가능"</strong> — 대부분 8~10세 이상이면 신규 가입 불가. 반려동물 어린 시기에 가입이 유리합니다.</li></ul>' },

    { type: 'h2', id: 'howto-use', text: '실제 활용 시나리오' },
    { type: 'body', html: '<ol><li><strong>입양 전 보험료 예산 책정</strong> — 원하는 품종·나이 입력 후 월 보험료 예산 확인</li><li><strong>고령 반려동물 갱신 부담 예측</strong> — 현재 3세 강아지가 10세가 됐을 때 보험료 시뮬레이션</li><li><strong>기본 vs 프리미엄 비용 대비 보장 비교</strong> — 추가 보험료 대비 추가 보장(치과·유전성) 필요성 판단</li><li><strong>여러 마리 가구 총 보험료 파악</strong> — 각각 입력해 가구 전체 펫보험 예산 산정</li></ol><p>관련 링크: <a href="/categories/pet/">펫보험 종합 가이드</a>, <a href="/addons/pet-health-checker/">반려동물 건강체크 용품 가이드</a>.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '펫보험 가입 가능한 나이 범위는?', a: '대부분 생후 90일(3개월)~8세 이하에서 신규 가입 가능. 보험사에 따라 10세까지 가능한 상품도 있습니다.' },
      { q: '해외 품종도 가입이 가능한가요?', a: '네. 국내에서 사육 중이면 품종 제한 없이 가입 가능합니다. 단, 특정 대형 맹견(핏불 테리어 등)은 인수 거절되는 경우 있습니다.' },
      { q: '반려동물이 사망하거나 안락사하면 보험금이 나오나요?', a: '일반 펫보험은 사망 급여 없음. 수술·치료 중 사망은 치료비 청구 가능하지만, 안락사 비용은 보험 적용 안 됩니다.' },
      { q: '펫보험 청구 방법은?', a: '동물병원에서 진단서·영수증·치료비 명세서를 받아 보험사 앱·우편으로 청구. 일부 보험사는 지정 병원에서 직접 청구 가능합니다.' },
      { q: '여러 마리를 키우면 할인이 되나요?', a: '보험사에 따라 2마리 이상 가입 시 5~10% 다견·다묘 할인을 제공하는 경우 있습니다. 해당 여부를 가입 전 확인하세요.' },
      { q: '약물·처방식 비용도 보장되나요?', a: '처방받은 의약품은 일반적으로 보장. 처방식(특수 사료)은 대부분 제외됩니다.' },
      { q: '갱신 시 건강 심사가 다시 있나요?', a: '갱신 시 원칙적으로 새 건강 고지 없이 자동 갱신. 단, 보험료는 나이 증가에 따라 인상됩니다.' },
    ]},

    { type: 'sources', items: [
      { label: '금융감독원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-28' },
      { label: '농림축산식품부 — 반려동물 보험 현황', url: 'https://www.mafra.go.kr', org: '농림축산식품부', accessedAt: '2026-04-28' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

const post = {
  id: 'G0007',
  sections: [
    { type: 'intro', html: '<p><strong>1세대 실손보험을 보유하고 있다면, 4세대로 전환하라는 권유를 한 번쯤 받아봤을 것입니다.</strong> "갱신이 안 된다", "더 이상 지원이 안 된다", "지금 전환하면 혜택이 있다" 같은 말들입니다. 이 페이지에서는 세대별 실손보험의 보장 구조 차이를 실제 수치로 비교하고, 1세대 유지가 왜 대부분의 경우 유리한지 정리합니다.</p><p>단, 이것은 일반적인 설명입니다. 개인 가입 조건과 건강 상태에 따라 다를 수 있으며, 중요한 결정은 반드시 공시 자료와 약관을 직접 확인하거나 전문가 상담을 받으세요.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'experience', text: '편집장이 직접 겪은 전환 압박 사례' },
    { type: 'experience', html: '<p>저는 1세대 실손보험을 보유하고 있습니다. 수 년에 걸쳐 세 차례 설계사가 방문해 4세대 전환을 권유했습니다. 마지막에는 서류까지 거의 다 작성했습니다.</p><p>다행히 그 시점에 보험사에서 일하는 친구한테 전화로 물어봤더니 "절대 바꾸지 마. 1세대가 비급여 거의 다 되는데 4세대 가면 비급여 특약 따로 들어야 하고 한도도 확 줄어"라고 했습니다. 그제야 멈췄습니다.</p><p>그때 받은 설명 중 하나가 "1세대는 갱신이 안 된다"는 말이었습니다. 나중에 알고 보니 사실이 아니었습니다. 갱신도 됩니다. 보험료가 오를 수는 있지만, 보장 구조 자체는 유지됩니다. 만약 그냥 전환했다면 지금쯤 비급여 도수치료, MRI 청구할 때마다 손해를 보고 있었을 것입니다.</p>' },

    { type: 'h2', id: 'comparison', text: '실손보험 세대별 비급여 보장 구조 비교' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:13px"><thead><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">항목</th><th style="padding:8px;border:1px solid #E5E7EB">1세대</th><th style="padding:8px;border:1px solid #E5E7EB">2세대</th><th style="padding:8px;border:1px solid #E5E7EB">3세대</th><th style="padding:8px;border:1px solid #E5E7EB">4세대</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #E5E7EB">출시 시기</td><td style="padding:8px;border:1px solid #E5E7EB">2009년 이전</td><td style="padding:8px;border:1px solid #E5E7EB">2009~2013년</td><td style="padding:8px;border:1px solid #E5E7EB">2013~2021년</td><td style="padding:8px;border:1px solid #E5E7EB">2021년~현재</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">비급여 보장</td><td style="padding:8px;border:1px solid #E5E7EB"><strong>급여+비급여 통합 90%</strong></td><td style="padding:8px;border:1px solid #E5E7EB">급여+비급여 통합 80~90%</td><td style="padding:8px;border:1px solid #E5E7EB">급여 90%, 비급여 80% 분리</td><td style="padding:8px;border:1px solid #E5E7EB">급여 80%, 비급여 별도 특약</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">도수치료·MRI</td><td style="padding:8px;border:1px solid #E5E7EB">별도 한도 없이 포함</td><td style="padding:8px;border:1px solid #E5E7EB">포함</td><td style="padding:8px;border:1px solid #E5E7EB">포함 (일부 한도 제한)</td><td style="padding:8px;border:1px solid #E5E7EB"><strong>주계약 제외, 특약 별도 가입 필요</strong></td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">비급여 특약 연간 한도</td><td style="padding:8px;border:1px solid #E5E7EB">해당 없음</td><td style="padding:8px;border:1px solid #E5E7EB">해당 없음</td><td style="padding:8px;border:1px solid #E5E7EB">일부 한도</td><td style="padding:8px;border:1px solid #E5E7EB">도수치료 50회/연, MRI 1회, 주사 50회 등 제한</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">자기부담금</td><td style="padding:8px;border:1px solid #E5E7EB">10%(입원)</td><td style="padding:8px;border:1px solid #E5E7EB">10~20%</td><td style="padding:8px;border:1px solid #E5E7EB">급여 10~20%, 비급여 20~30%</td><td style="padding:8px;border:1px solid #E5E7EB"><strong>급여 20%, 비급여 30%</strong></td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">보험료 수준</td><td style="padding:8px;border:1px solid #E5E7EB">가입 당시 낮음, 갱신 후 상승</td><td style="padding:8px;border:1px solid #E5E7EB">중간</td><td style="padding:8px;border:1px solid #E5E7EB">중간</td><td style="padding:8px;border:1px solid #E5E7EB">상대적으로 저렴 (보장 범위 축소 반영)</td></tr></tbody></table><p style="font-size:12px;color:#6B7280;margin:8px 0 0">세대별 상품마다 세부 조건이 다름. 반드시 본인 약관 확인 필요.</p>' },

    { type: 'h2', id: 'why-keep', text: '1세대 유지가 유리한 3가지 핵심 이유' },
    { type: 'body', html: '<ol><li><strong>비급여 포함 90% 보장 구조</strong>: 1세대는 급여·비급여 통합으로 실손 청구합니다. 도수치료, 비급여 주사, MRI 등 비급여 항목도 별도 특약 없이 보장됩니다. 4세대는 이 항목들을 별도 특약으로 가입해야 하고 연간 한도도 제한됩니다.</li><li><strong>갱신은 된다</strong>: 1세대 실손은 갱신이 됩니다. 갱신 시 보험료가 오를 수 있지만, 보장 구조 자체는 가입 당시 조건이 유지됩니다. "갱신 불가"는 사실이 아닙니다.</li><li><strong>전환 후 복구 불가</strong>: 4세대로 전환하면 1세대로 돌아올 수 없습니다. 한 번의 전환 결정이 영구적입니다. 불확실하다면 전환하지 않는 것이 기본값입니다.</li></ol>' },
    { type: 'risk', title: '전환 권유 시 반드시 확인할 것', html: '<p>4세대 전환을 권유받으면 다음을 직접 비교하세요:<br>① 현재 1세대 약관의 비급여 보장 범위 확인<br>② 전환 후 4세대 주계약 + 비급여 특약 구성 시 보험료 합계<br>③ 연간 비급여 청구 예상액(도수치료·MRI 등)과 4세대 한도 비교<br>전환이 유리하다면 숫자로 보여달라고 요청하세요.</p>' },

    { type: 'h2', id: 'when-switch', text: '4세대 전환이 실제로 유리한 경우' },
    { type: 'body', html: '<p>1세대 유지가 원칙이지만, 예외적으로 전환을 검토할 수 있는 상황도 있습니다:</p><ul><li><strong>1세대 보험료가 지나치게 높아진 경우</strong>: 고령·갱신 누적으로 보험료가 비급여 이용 빈도 대비 너무 비싸진 경우. 단, 단순 "비싸다"가 아니라 실제 청구액 대비 보험료 계산 필요.</li><li><strong>비급여 의료 이용이 거의 없는 경우</strong>: 도수치료·MRI·비급여 주사를 거의 이용하지 않는다면 4세대의 저렴한 보험료가 유리할 수 있습니다.</li><li><strong>건강보험 급여화 확대 예상</strong>: 향후 비급여 항목이 대거 급여화된다면 두 세대 간 차이가 줄 수 있습니다. 그러나 이는 예측이므로 현재 상태 기준으로 판단하는 것이 원칙입니다.</li></ul>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '1세대 실손이 "갱신 불가"라고 들었는데 사실인가요?', a: '사실이 아닙니다. 1세대 실손도 계약 조건에 따라 갱신됩니다. 갱신 시 보험료는 나이·손해율에 따라 오를 수 있지만, 보장 구조(비급여 포함 90%)는 유지됩니다. "갱신 불가"는 4세대 전환 권유를 위한 잘못된 설명입니다.' },
      { q: '4세대로 전환하면 보험료가 더 싸진다는 말이 맞나요?', a: '4세대는 보장 범위가 줄었기 때문에 보험료가 상대적으로 낮은 경우가 있습니다. 하지만 비급여 의료 이용(도수치료, MRI 등)을 자주 한다면 실질 혜택이 크게 줄어들어 보험료 절감 효과가 상쇄됩니다.' },
      { q: '1세대 보험료가 너무 많이 올라서 부담스럽습니다. 어떻게 해야 하나요?', a: '먼저 실제 연간 비급여 청구액을 계산해보세요. 청구액 > 보험료라면 유지가 유리합니다. 보험료가 지나치게 비싸다면 보험사에 보험료 분할납입, 납입 유예 등을 문의하고, 그래도 해결이 안 되면 전환을 고려할 수 있습니다.' },
      { q: '4세대로 전환했다가 다시 1세대로 돌아올 수 있나요?', a: '돌아올 수 없습니다. 전환은 일방향입니다. 이 점이 가장 중요한 이유 중 하나입니다. 불확실하다면 전환하지 않는 것이 안전합니다.' },
      { q: '설계사가 전환하면 보험료가 절반이 된다고 했는데 믿어도 되나요?', a: '비급여 의료 이용 패턴에 따라 다릅니다. 단순 보험료 비교가 아닌 "비급여 보장 범위와 한도"를 함께 비교해야 합니다. 전환 제안 시 반드시 4세대 비급여 특약 포함 보험료와 연간 청구 가능 한도를 서면으로 받아 비교하세요.' },
      { q: '2세대, 3세대 실손도 유지하는 게 좋나요?', a: '일반적으로 네. 4세대보다 비급여 보장이 넓고 자기부담금도 낮습니다. 다만 2·3세대는 세대별 구체적 조건이 다르므로 본인 약관을 먼저 확인하세요.' },
      { q: '1세대 실손 갱신 시 보험료가 얼마나 오를 수 있나요?', a: '갱신 인상률은 보험사·나이·손해율에 따라 다릅니다. 2021~2024년 사이 일부 보험사는 갱신 시 10~30% 인상이 발생했습니다. 인상폭이 크더라도 보장 구조 자체는 유지됩니다. 인상 통지를 받으면 보험사 고객센터에 이의 제기할 수 있습니다.' },
      { q: '1세대 실손 보유자가 추가로 4세대에 신규 가입할 수 있나요?', a: '실손보험은 중복 가입이 제한됩니다. 1세대를 보유하고 있으면 4세대 신규 가입이 원칙적으로 불가하거나 특별한 조건이 붙습니다. 반드시 보험사에 확인하세요.' },
    ]},

    { type: 'sources', items: [
      { label: '금융감독원 — 실손의료보험 세대별 비교 안내', url: 'https://www.fss.or.kr', org: '금융감독원', accessedAt: '2026-05-14' },
      { label: '금융감독원 금융상품통합비교공시', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-05-14' },
    ]},
    { type: 'medDisclaimer' },
  ]
}
module.exports = post

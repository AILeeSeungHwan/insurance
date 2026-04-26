const post = {
  id: 'K0002',
  sections: [
    { type: 'intro', html: '<p><strong>자동차보험은 의무보험(대인Ⅰ·대물 최소 2천만 원)과 임의보험(대인Ⅱ·자기차량·자기신체·무보험차 상해)으로 구성</strong>되며, 임의보험 한도를 어떻게 설정하느냐에 따라 사고 시 본인 부담이 수억 원 차이가 날 수 있습니다.</p><p>이 글은 담보별 역할과 권장 한도, 다이렉트 보험사별 할인 구조, 연령·운전경력·블랙박스 할인이 보험료에 미치는 영향을 금감원 공시 기준으로 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 보험 상품을 판매·모집하지 않습니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'structure', text: '자동차보험의 구조' },
    { type: 'body', html: '<p>자동차손해배상보장법에 따라 모든 차량은 <strong>대인Ⅰ·대물 2천만 원 이상 의무가입</strong>입니다. 여기에 더해 임의보험(대인Ⅱ·자기차량·자기신체·무보험차)을 가입해야 실제 사고 피해를 실질적으로 보장받을 수 있습니다.</p>' },

    { type: 'h2', id: 'covers', text: '담보별 역할' },
    { type: 'h3', id: 'bodily1', text: '대인배상Ⅰ — 법정 의무보험' },
    { type: 'body', html: '<p>자동차손해배상보장법에 따라 피해자 1인당 사망 1.5억 원, 상해 3천만 원 등 법정 한도 내에서 보상하는 의무보험입니다.</p>' },
    { type: 'h3', id: 'bodily2', text: '대인배상Ⅱ — 사고처리의 진짜 핵심' },
    { type: 'body', html: '<p>대인Ⅰ 초과분을 무한으로 보상하는 임의보험. <strong>사망·중상해 사고의 거의 모든 비용은 대인Ⅱ가 부담</strong>하게 됩니다. 무한 가입이 일반적입니다.</p>' },
    { type: 'h3', id: 'property', text: '대물배상' },
    { type: 'body', html: '<p>상대 차량·시설물 손해. 고가 수입차·공공시설물 파손 대비로 <strong>2억 원 이상</strong>이 권장됩니다.</p>' },
    { type: 'h3', id: 'own-car', text: '자기차량손해(자차)' },
    { type: 'body', html: '<p>내 차 수리비. 차량가액 기반으로 책정되며 자기부담금 설정에 따라 보험료가 크게 달라집니다.</p>' },
    { type: 'h3', id: 'own-body', text: '자기신체사고 / 자동차상해' },
    { type: 'body', html: '<p>내 차에 타고 있던 본인·동승자의 피해 보상. "자동차상해"는 자기신체보다 보장 범위가 넓고 과실상계 기준이 유리합니다.</p>' },

    { type: 'h2', id: 'discount', text: '다이렉트 보험사 할인 구조' },
    { type: 'body', html: '<ul><li>마일리지 할인(연 5,000~15,000km 미만일수록 유리)</li><li>블랙박스 장착 할인 (2~5%)</li><li>티맵·안전운전 습관 할인 (5~10%)</li><li>자녀 할인 / 2차 소유주 할인 / 승용차 할인 등</li></ul>' },

    { type: 'h2', id: 'recommended', text: '권장 담보 구성 예시' },
    { type: 'body', html: '<table style="width:100%;border-collapse:collapse;font-size:14px"><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">담보</th><th style="padding:8px;border:1px solid #E5E7EB">권장 한도</th></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대인Ⅰ</td><td style="padding:8px;border:1px solid #E5E7EB">의무가입</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대인Ⅱ</td><td style="padding:8px;border:1px solid #E5E7EB">무한</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">대물</td><td style="padding:8px;border:1px solid #E5E7EB">2억 원 이상</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">자기차량</td><td style="padding:8px;border:1px solid #E5E7EB">차량가액 기준 가입</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">자동차상해</td><td style="padding:8px;border:1px solid #E5E7EB">3억 원 이상 권장</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">무보험차상해</td><td style="padding:8px;border:1px solid #E5E7EB">2억 원</td></tr></table>' },

    { type: 'h2', id: 'mistake', text: '자주 하는 실수' },
    { type: 'body', html: '<ul><li>의무보험만 가입 → 대인Ⅱ 미가입 상태에서 사망사고 시 본인이 수억 원 배상</li><li>대물 1천~5천만 원으로 설정 → 고가 수입차 사고 시 부족</li><li>자기차량 미가입 → 단독사고·홍수 피해 등 무보상</li></ul>' },

    { type: 'h2', id: 'related', text: '운전자보험과의 차이' },
    { type: 'body', html: '<p>자동차보험은 민사 책임을, <a href="/categories/driver/">운전자보험</a>은 형사·행정 책임(벌금·변호사 선임비·교통사고처리지원금)을 커버합니다. 둘은 대체재가 아니라 <strong>보완재</strong>입니다.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '다이렉트와 설계사 채널, 무엇이 더 저렴한가요?', a: '일반적으로 다이렉트가 사업비가 낮아 보험료가 저렴합니다. 다만 사고 접수·합의 조력이 필요한 경우 설계사 채널의 도움이 유리한 경우도 있습니다.' },
      { q: '자동차보험을 갱신할 때 보험사 이동 가능한가요?', a: '가능합니다. 할인할증 기록(무사고 경력)은 이관되므로 이동 시 불이익은 없습니다.' },
      { q: '블랙박스는 보험료 할인 효과가 얼마나 되나요?', a: '보험사별로 2~5% 수준의 할인이 일반적입니다. 다만 실제 효용은 사고 시 과실비율 입증에 있습니다.' },
      { q: '자녀 할인은 누구에게 적용되나요?', a: '만 13세 미만 자녀가 있는 가입자에게 일부 보험사가 할인을 제공합니다. 보험사별 기준이 다릅니다.' },
      { q: '전기차는 보험료가 더 비쌉니까?', a: '배터리 수리비 비중이 높아 평균적으로 내연기관보다 다소 높은 경향입니다. 전기차 전용 상품·할인도 있으니 공식 견적을 비교하세요.' },
    ]},

    { type: 'sources', items: [
      { label: '금감원 금융상품통합비교공시 — 자동차보험', url: 'https://finlife.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-25' },
      { label: '손해보험협회 자동차보험 공시', url: 'https://www.knia.or.kr', org: '손해보험협회', accessedAt: '2026-04-25' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

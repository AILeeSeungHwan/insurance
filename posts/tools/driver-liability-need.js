const post = {
  id: 'T0004',
  calculator: 'driver-liability-need',
  sections: [
    { type: 'intro', html: '<p><strong>운전자보험 필요 한도 계산기는 주행 강도·주행 목적(출퇴근/업무/상업)을 입력해 벌금·변호사선임비·교통사고처리지원금의 권장 한도를 추정</strong>합니다. 운전자보험은 자동차보험이 다루지 않는 형사 처벌 비용(벌금·기소 시 변호사비)과 피해자 합의금 지원을 담당합니다.</p><p>12대 중과실(신호위반·음주운전·어린이보호구역 등)로 사고 시 벌금 수백~수천만원, 변호사 선임비 수백만원이 발생할 수 있습니다. 본 계산기는 위험 노출 수준에 맞는 한도를 추정하기 위한 참고 도구입니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 결과는 추정치입니다. 실제 법적 비용은 사고 내용·법원 판결에 따라 달라집니다.</p>' },
    { type: 'toc' },

    { type: 'h2', id: 'how', text: '계산기 사용법' },
    { type: 'body', html: '<ol><li><strong>주행 강도</strong> 선택 — 주 3일 이하 근거리(저) / 주 5일 출퇴근(중) / 주 5일 이상 장거리(고) 3단계</li><li><strong>주행 목적</strong> — 개인 출퇴근·레저 / 업무 주행(외근·영업) / 상업 운행(대리운전·택배·배달·퀵서비스)</li><li><strong>차량 종류</strong> — 승용차 / 화물차 (이륜차는 별도 특약 필요)</li></ol><p>결과로 벌금·변호사선임비·교통사고처리지원금 3가지 항목의 권장 한도가 표시됩니다.</p>' },

    { type: 'h2', id: 'logic', text: '계산 원리' },
    { type: 'body', html: '<p>운전자보험 필요 한도는 위험 노출 수준에 따라 3단계로 추정합니다:</p><p style="background:#F8FAFC;border:1px solid #E5E7EB;border-radius:8px;padding:12px"><code>권장 한도 = 기준 한도 × 주행강도 계수 × 상업용 가중치</code></p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#F3F4F6"><th style="padding:8px;border:1px solid #E5E7EB">구분</th><th style="padding:8px;border:1px solid #E5E7EB">벌금</th><th style="padding:8px;border:1px solid #E5E7EB">변호사선임비</th><th style="padding:8px;border:1px solid #E5E7EB">사고처리지원금</th></tr></thead><tbody><tr><td style="padding:8px;border:1px solid #E5E7EB">출퇴근·주말 운전</td><td style="padding:8px;border:1px solid #E5E7EB">300만원</td><td style="padding:8px;border:1px solid #E5E7EB">500만원</td><td style="padding:8px;border:1px solid #E5E7EB">3,000만원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">업무 주행(외근)</td><td style="padding:8px;border:1px solid #E5E7EB">500만원</td><td style="padding:8px;border:1px solid #E5E7EB">1,000만원</td><td style="padding:8px;border:1px solid #E5E7EB">5,000만원</td></tr><tr><td style="padding:8px;border:1px solid #E5E7EB">상업 운행(대리·배달)</td><td style="padding:8px;border:1px solid #E5E7EB">1,500만원</td><td style="padding:8px;border:1px solid #E5E7EB">2,000만원</td><td style="padding:8px;border:1px solid #E5E7EB">1억원</td></tr></tbody></table><p style="margin-top:12px"><strong>12대 중과실</strong>: 신호위반·중앙선침범·과속(20km/h 초과)·앞지르기 방법 위반·철길건널목 통과방법 위반·횡단보도 사고·무면허·음주운전·보도침범·승객 추락·어린이보호구역 사고·화물 적재 불량</p>' },

    { type: 'h2', id: 'interpret', text: '결과 해석하기' },
    { type: 'body', html: '<p>제안 한도는 출발점입니다. 다음 상황에서는 상향 조정을 검토하세요:</p><ul><li>가족 중 운전자가 여러 명 — 각자 별도 가입 필요 (운전자보험은 계약자 본인 한정)</li><li>어린이보호구역 사고 — 스쿨존은 벌금 상한이 2배로 가중</li><li>화물차·대형차 — 피해 규모가 크므로 사고처리지원금 1억원+ 권장</li></ul><p>교통사고처리지원금은 피해자 합의에 사용되는 금액으로, 피해자가 여러 명이면 1인당 지급이 아닌 총 지급 한도 내에서 분배됩니다.</p>' },

    { type: 'h2', id: 'limits', text: '한계와 유의사항' },
    { type: 'warning', title: '운전자보험은 형사 비용 전용입니다', html: '<p>다음 사항을 반드시 확인하세요:</p><ul><li>운전자보험은 형사 처벌 관련 비용(벌금·변호사선임비·합의금 지원) 담당. 민사 피해 배상은 자동차보험이 담당.</li><li>해외 운전 사고는 국내 운전자보험 적용 안 됨</li><li>오토바이(이륜차)는 대부분 기본 담보에서 제외 — 별도 이륜차 특약 가입 필요</li><li>음주운전·무면허 상태 사고는 면책 — 보험 지급 거절 대상</li></ul>' },

    { type: 'h2', id: 'misuse', text: '흔한 오해' },
    { type: 'body', html: '<ul><li><strong>"자동차보험으로 충분하다"</strong> — 자동차보험은 민사 피해 배상. 운전자 본인의 형사 처벌 비용(벌금·변호사비)은 운전자보험이 담당. 영역이 다릅니다.</li><li><strong>"대리운전 기사는 업체 보험으로 커버된다"</strong> — 대리운전 플랫폼 보험은 대물·대인 배상 위주. 기사 개인의 형사 책임 비용은 별도 운전자보험이 필요합니다.</li><li><strong>"벌금 보험 있으면 형사 처벌 안 받는다"</strong> — 처벌(면허 취소·정지·징역)은 그대로 받습니다. 경제적 비용(벌금 납부)만 지원합니다.</li><li><strong>"사고처리지원금 3,000만원이면 충분하다"</strong> — 다인 사고나 중상해 피해자 1인 합의금이 수천만원을 넘는 사례가 많습니다. 운전 빈도·환경에 따라 5,000만원~1억원 권장.</li></ul>' },

    { type: 'h2', id: 'howto-use', text: '실제 활용 시나리오' },
    { type: 'body', html: '<ol><li><strong>배달·대리기사 전업 전 가입</strong> — 상업 운행 한도(벌금 1,500만원, 변호사 2,000만원)로 설계 필수. 일반 출퇴근용으로는 부족.</li><li><strong>자녀 운전 시작 시</strong> — 부모 보험에 가족 추가 불가 (운전자보험은 본인 한정). 자녀 별도 가입 필요.</li><li><strong>사업용 차량 운행</strong> — 화물차·사업용 승합차는 사고 시 피해 규모가 크므로 지원금 한도 상향 검토.</li><li><strong>기존 보험 점검</strong> — 오래된 운전자보험이라면 12대 중과실 조항 추가 여부 확인. 구형 상품은 일부 담보 미포함.</li></ol><p>관련 링크: <a href="/tools/car-premium/">자동차보험료 추정기</a>, <a href="/categories/driver/">운전자보험 종합 가이드</a>.</p>' },

    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '12대 중과실 전체 목록이 무엇인가요?', a: '신호위반·중앙선침범·과속(20km/h 초과)·앞지르기 방법 위반·철길건널목 통과 위반·횡단보도 사고·무면허·음주운전·보도침범·승객 추락·어린이보호구역 사고·화물 적재 불량 총 12가지입니다.' },
      { q: '음주운전 사고도 운전자보험이 지급되나요?', a: '아닙니다. 음주·무면허 운전은 거의 모든 운전자보험에서 면책 사유입니다. 보험 지급이 거절됩니다.' },
      { q: '대리운전 기사도 운전자보험에 가입해야 하나요?', a: '네. 플랫폼 업체 보험은 대물·대인 배상 위주. 기사 개인의 형사 책임 비용은 별도 운전자보험이 필요합니다.' },
      { q: '오토바이도 운전자보험으로 커버되나요?', a: '기본 약관에서는 이륜차 제외가 많습니다. 이륜차 운전 특약을 별도 추가해야 하며, 인수 거절하는 보험사도 있습니다.' },
      { q: '화물차나 대형차 운전자도 가입할 수 있나요?', a: '가능합니다. 단, 사업용 차량은 인수 조건이 까다롭고 보험료가 높습니다. 사업용 전용 운전자보험 상품 확인이 필요합니다.' },
      { q: '자동차보험의 법률비용 담보와 운전자보험 변호사선임비는 다른가요?', a: '자동차보험 법률비용은 민사 손해배상 분쟁에 적용. 운전자보험 변호사선임비는 형사 기소 시 변호인 선임에 특화됩니다.' },
      { q: '운전자보험 해지 후 재가입 시 주의사항은?', a: '재가입 시 나이 증가로 보험료가 오릅니다. 과거 교통사고 이력·면허정지 이력이 있으면 부담보 조건이 붙을 수 있습니다.' },
    ]},

    { type: 'sources', items: [
      { label: '금융감독원 — 운전자보험 안내', url: 'https://www.fss.or.kr', org: '금융감독원', accessedAt: '2026-04-28' },
      { label: '도로교통공단 — 교통사고 통계', url: 'https://www.koroad.or.kr', org: '도로교통공단', accessedAt: '2026-04-28' },
    ]},

    { type: 'medDisclaimer' }
  ]
}
module.exports = post

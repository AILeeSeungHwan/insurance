const post = {
  id: 'P0007',
  sections: [
    { type: 'intro', html: '<p><strong>메리츠화재 치아보험</strong>은 보철·보존·예방을 체계적으로 보장하는 치과 전문 보험입니다. 면책기간 구조(90/180일)와 결손치 심사가 엄격한 편입니다.</p><p>이 글은 보장 한도, 40대 여성 월 보험료 예시, 가입 시 체크포인트를 공시 기준으로 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 이 상품을 판매·모집하지 않습니다.</p>' },
    { type: 'toc' },
    { type: 'h2', id: 'cover', text: '주요 보장' },
    { type: 'body', html: '<ul><li>보철: 임플란트 1개 150만원, 브릿지·틀니 별도 한도</li><li>보존: 크라운·인레이 1회 20~30만원</li><li>예방: 스케일링 연 1~2회</li></ul>' },
    { type: 'h2', id: 'waiting', text: '면책기간 구조' },
    { type: 'body', html: '<p>가입 후 90일 내 보존 치료 제외, 180일 내 보철 50% 감액. 180일 이후 100% 보장.</p>' },
    { type: 'h2', id: 'premium', text: '40대 여성 월 보험료 예시' },
    { type: 'body', html: '<p>10년 만기 갱신형 기준 약 <strong>2~4만원</strong>(2026-01-01 공시 기준).</p>' },
    { type: 'warning', title: '결손치는 평생 면책', html: '<p>가입 전 결손된 치아 위치는 평생 면책 대상입니다. 정확한 고지가 필수입니다.</p>' },
    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '충치 있으면 가입 안 되나요?', a: '가입 자체는 가능하나 해당 치아 치료는 면책 가능성이 큽니다.' },
      { q: '임플란트 평생 몇 개까지 보장되나요?', a: '보통 연 2회·평생 누적 제한이 있습니다.' },
      { q: '갱신 보험료는 얼마나 오르나요?', a: '10년 갱신 시 직전 손해율에 따라 달라집니다.' },
      { q: '치아보험을 해지하면 환급금이 있나요?', a: '갱신형은 환급이 거의 없습니다.' },
      { q: '교정은 보장되나요?', a: '미용 목적 교정은 대부분 면책입니다.' },
    ]},
    { type: 'sources', items: [
      { label: '메리츠화재 공시실', url: 'https://www.meritzfire.com', org: '메리츠화재', accessedAt: '2026-04-25' },
    ]},
    { type: 'medDisclaimer' },
  ]
}
module.exports = post

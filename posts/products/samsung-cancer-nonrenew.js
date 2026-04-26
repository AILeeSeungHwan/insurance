const post = {
  id: 'P0005',
  sections: [
    { type: 'intro', html: '<p><strong>삼성생명 비갱신 암보험</strong>은 장기 납입을 통한 평생 보장 구조의 대표 상품입니다. 초기 보험료는 갱신형보다 높지만 고령기 보험료 급등 리스크를 줄일 수 있습니다.</p><p>이 글은 일반암·고액암·유사암 진단비 구조, 30대 남성 월 보험료 예시, 보험료 납입면제 조건을 공시 기준으로 정리합니다.</p><p style="font-size:13px;color:#888;margin-top:12px">※ 본 사이트는 이 상품을 판매·모집하지 않습니다.</p>' },
    { type: 'toc' },
    { type: 'h2', id: 'cover', text: '진단비 지급 구조' },
    { type: 'body', html: '<ul><li><strong>일반암</strong> 100% 지급</li><li><strong>고액암</strong> 100% + 선지급 100% (총 200%)</li><li><strong>유사암</strong>(갑상선·경계성 등) 10~20%</li><li><strong>소액암</strong> 20~50%</li></ul>' },
    { type: 'h2', id: 'design', text: '납입기간·만기 설계 포인트' },
    { type: 'body', html: '<p>10년·20년·30년 납입, 종신 만기 선택 가능. 장기 유지가 전제이므로 가계 재무 상황에 맞는 납입기간 설정이 중요합니다.</p>' },
    { type: 'h2', id: 'premium', text: '공시 기준 월 보험료 예시 (30대 남성, 진단비 5천만원 기준)' },
    { type: 'body', html: '<p>20년 납 기준 약 <strong>4~6만원</strong> 수준(2026-01-01 공시 기준). 고액암 선지급 비율과 특약 조합에 따라 변동.</p>' },
    { type: 'h2', id: 'waive', text: '보험료 납입면제 특약' },
    { type: 'body', html: '<p>일반암 진단 시 이후 보험료 납입을 면제하는 특약. 가입 시 선택 여부 확인.</p>' },
    { type: 'h2', id: 'faq', text: '자주 묻는 질문' },
    { type: 'faq', items: [
      { q: '비갱신형이 무조건 유리한가요?', a: '장기 유지 시 유리할 가능성이 높지만 초기 부담이 큽니다.' },
      { q: '진단비 한도는 얼마가 적정인가요?', a: '1년 소득 공백 + 치료비 2~3천만 원 기준. <a href="/tools/cancer-coverage-need/">계산기</a> 참고.' },
      { q: '만기환급형으로 해야 하나요?', a: '소멸성이 보험료가 훨씬 저렴합니다. 저축 목적이면 별도 금융상품이 효율적.' },
      { q: '암 진단 후에도 해지 환급 가능한가요?', a: '납입면제 특약 적용 시 해지 시점에 따라 달라집니다. 약관 확인 필요.' },
      { q: '실손과 중복 보상되나요?', a: '진단비는 정액, 실손은 실비. 구조가 달라 중복 수령 가능합니다.' },
    ]},
    { type: 'sources', items: [
      { label: '삼성생명 공시실', url: 'https://www.samsunglife.com', org: '삼성생명', accessedAt: '2026-04-25' },
      { label: '생명보험협회 공시실', url: 'https://www.klia.or.kr', org: '생명보험협회', accessedAt: '2026-04-25' },
    ]},
    { type: 'medDisclaimer' },
  ]
}
module.exports = post
